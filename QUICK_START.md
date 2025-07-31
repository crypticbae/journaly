# 🚀 Journaly - 5-Minuten Setup

## Für GitHub Distribution (Empfohlen)

### 1. Repository auf GitHub erstellen
```bash
# Neues Repository auf github.com erstellen: "journaly"
# Dann:
git init
git add .
git commit -m "Initial Journaly Trading Journal"
git remote add origin https://github.com/dein-username/journaly.git
git push -u origin main
```

### 2. Endbenutzer Installation (Super Einfach!)
```bash
git clone https://github.com/dein-username/journaly.git
cd journaly
./start.sh
```

**Das war's!** App läuft auf http://localhost:5885

## Für Lokales Testen

```bash
cd trading-journal
./start.sh
```

## Wichtige Dateien

✅ **Dockerfile** - Next.js App Container
✅ **docker-compose.yml** - Vollständiges Setup mit PgAdmin
✅ **docker-compose.prod.yml** - Nur App + Database
✅ **.env.example** - Konfiguration Template
✅ **start.sh** - Ein-Klick Start Script
✅ **.dockerignore** - Optimiert Build-Performance

## Ports

- **5885** - Hauptapp (Trading Journal)
- **5436** - PgAdmin (optional)
- **5434** - PostgreSQL (intern)

## Warum GitHub?

✅ **Kostenlos** für öffentliche Repos
✅ **Ein Befehl** Installation für Benutzer
✅ **Automatische Updates** mit `git pull`
✅ **Issues & Wiki** für Support
✅ **Releases** für Versionen
✅ **Actions** für CI/CD (optional)

## Alternative: Docker Hub

Falls du Docker Images hosten willst:
```bash
# Build & Push
docker build -t dein-username/journaly .
docker push dein-username/journaly

# Benutzer können dann:
docker run -p 5885:5885 dein-username/journaly
```

**Aber GitHub ist einfacher für Gesamtprojekt!** 