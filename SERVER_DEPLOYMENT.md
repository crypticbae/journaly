# 🚀 Journaly - Server Deployment Guide

## Schritt-für-Schritt Anleitung für externe Server

### 📋 Voraussetzungen auf deinem Server:
- Ubuntu/Debian Linux Server (empfohlen)
- Docker & docker-compose installiert
- Port 5885 verfügbar
- Mindestens 2GB RAM

---

## 🔧 1. Server vorbereiten

```bash
# Docker installieren (falls nicht vorhanden)
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Docker-compose installieren
sudo curl -L "https://github.com/docker/compose/releases/download/v2.21.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Benutzer zur Docker-Gruppe hinzufügen
sudo usermod -aG docker $USER
newgrp docker
```

---

## 📥 2. Projekt-Dateien übertragen

**Option A: Git Clone (empfohlen)**
```bash
git clone https://github.com/dein-repo/journaly.git
cd journaly
```

**Option B: Dateien hochladen**
- Lade nur diese Dateien auf deinen Server hoch:
  - `docker-compose.server.yml`
  - Oder nutze die reparierte `docker-compose.final.yml`

---

## ⚙️ 3. Konfiguration anpassen

**WICHTIG:** Ersetze in der docker-compose Datei:

```yaml
# Ändere diese Zeilen:
NEXTAUTH_URL: "http://DEINE_SERVER_IP:5885"
APP_URL: "http://DEINE_SERVER_IP:5885"
ADMIN_EMAIL: "deine@email.com"
```

**Beispiel für Server-IP 192.168.1.100:**
```yaml
NEXTAUTH_URL: "http://192.168.1.100:5885"
APP_URL: "http://192.168.1.100:5885"
```

---

## 🚀 4. Deployment starten

**Mit der neuen Server-Konfiguration:**
```bash
docker-compose -f docker-compose.server.yml up --build -d
```

**Oder mit der reparierten Final-Version:**
```bash
docker-compose -f docker-compose.final.yml up --build -d
```

---

## 📊 5. Status überprüfen

```bash
# Container-Status anzeigen
docker ps

# Logs verfolgen
docker-compose -f docker-compose.server.yml logs -f

# Nur App-Logs
docker logs journaly-app -f
```

---

## 🌐 6. Zugriff

Nach erfolgreichem Start:

- **App-URL:** `http://DEINE_SERVER_IP:5885`
- **Admin-Login:** `admin@journaly.app` / `admin123`

---

## 🔥 Wichtige Befehle

```bash
# Stoppen
docker-compose -f docker-compose.server.yml down

# Neustart
docker-compose -f docker-compose.server.yml restart

# Komplett neu bauen
docker-compose -f docker-compose.server.yml down -v
docker-compose -f docker-compose.server.yml up --build -d

# Datenbank zurücksetzen
docker volume rm journaly_postgres_data
```

---

## 🛠️ Problembehandlung

### ❌ "Module not found" Fehler
- **Gelöst!** Die Server-Konfiguration erstellt automatisch eine tsconfig.json

### ❌ Kann nicht auf Port 5885 zugreifen
```bash
# Firewall-Port öffnen (Ubuntu/Debian)
sudo ufw allow 5885

# Port-Status prüfen
sudo netstat -tlnp | grep 5885
```

### ❌ Database Connection Error
```bash
# Warte 30-60 Sekunden nach dem Start
# PostgreSQL braucht Zeit zum Initialisieren
```

---

## 🔒 Sicherheit für Produktion

1. **Sichere Passwörter verwenden:**
   ```yaml
   POSTGRES_PASSWORD: "DEIN_SICHERES_PASSWORT"
   NEXTAUTH_SECRET: "DEIN_32_ZEICHEN_SCHLÜSSEL"
   ```

2. **HTTPS einrichten** (Nginx + Let's Encrypt)

3. **Firewall konfigurieren:**
   ```bash
   sudo ufw enable
   sudo ufw allow ssh
   sudo ufw allow 5885
   ```

---

## 📞 Support

Bei Problemen:
1. Logs prüfen: `docker logs journaly-app`
2. Container-Status: `docker ps`
3. Ports prüfen: `sudo netstat -tlnp | grep 5885`

**Das Import-Problem wurde behoben!** 🎉 