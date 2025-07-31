# Journaly - by EFX24

Ein modernes Trading Journal für das Importieren und Analysieren von Daily Confirmation Emails von Trading-Brokern.

## 🚀 Features

### 📊 **Analytics & Charts**
- **Timeline-Auswahl**: 24h, 7 Tage, 30 Tage, 1 Monat
- **Interactive Charts**: Profit/Loss Timeline, Win/Loss Distribution, Monthly Performance
- **Real-time Statistics**: Live Updates mit Theme-kompatiblen Farben
- **Advanced Metrics**: Cumulative P&L, Individual Trade Performance

### 🎨 **Theme System** 
- **22 DaisyUI Themes**: Light, Dark, Nord, Cupcake, Bumblebee, Retro, und mehr
- **Theme Persistence**: LocalStorage + Hydration-safe Loading
- **Responsive Design**: Mobile-first approach
- **Dynamic Colors**: Charts passen sich automatisch an gewählte Themes an

## 💻 Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS, DaisyUI 5.0.46
- **Database**: Prisma + PostgreSQL
- **Authentication**: NextAuth.js mit bcrypt
- **Charts**: Recharts mit dynamischen Theme-Farben
- **Forms**: React Hook Form + Zod Validation
- **Icons**: Lucide React

## 🐳 Docker Deployment (Empfohlen)

### Schnellstart

```bash
# Repository klonen
git clone <repository-url>
cd journaly

# Einfacher Start mit Script
chmod +x start.sh
./start.sh
```

### Manueller Docker Start

```bash
# 1. Environment-Datei kopieren
cp .env.example .env

# 2. .env Datei bearbeiten (wichtig!)
nano .env

# 3. Container starten
docker-compose up --build -d

# Mit PgAdmin (optional)
docker-compose --profile admin up --build -d
```

### Produktions-Deployment

```bash
# Für externe Server
docker-compose -f docker-compose.prod.yml up --build -d
```

**Wichtige Ports:**
- **App**: http://localhost:5885
- **PgAdmin**: http://localhost:5436 (optional)
- **PostgreSQL**: localhost:5434 (intern)

## 🔧 Lokale Entwicklung

```bash
cd journaly
npm install
npm run dev
```

## 🎯 Hauptfunktionen

1. **Multi-User Support** mit Admin-Approval
2. **Email Import** von Trading-Confirmations
3. **Multi-Account Trading** Management
4. **Advanced Analytics** mit Timeline-Filter
5. **Theme System** mit 22+ Themes
6. **Responsive Design** für alle Geräte
7. **Password Management** mit sicherer Verschlüsselung
8. **Data Export** als CSV
9. **Real-time Updates** und Live-Status

## ⚙️ Konfiguration

### Environment-Variablen (.env)

```bash
# Wichtige Einstellungen
NEXTAUTH_SECRET="sicherer-32-zeichen-schlüssel"
ADMIN_EMAIL="deine@email.com"
NEXTAUTH_URL="http://deine-domain:5885"  # Für externe Server
```

### Erste Schritte

1. **Admin-Account erstellen**: Registriere dich auf der App
2. **Email-Import**: Lade Daily Confirmation Emails hoch
3. **Trading-Accounts**: Füge deine Broker-Accounts hinzu
4. **Analytics**: Analysiere deine Trading-Performance

## 🔧 Problembehandlung

### Docker Issues
```bash
# Container-Status prüfen
docker ps

# Logs anzeigen
docker-compose logs -f journaly-app

# Neustart
docker-compose restart

# Clean Installation
docker-compose down -v
docker-compose up --build -d
```

### Häufige Probleme
- **Port 5885 besetzt**: Ändere Port in docker-compose.yml
- **Database Connection Error**: Warte 30 Sekunden nach Container-Start
- **Auth-Probleme**: Prüfe NEXTAUTH_SECRET in .env
- **Theme-Probleme**: Browser-Cache leeren

## 📞 Support & Distribution

### GitHub (Empfohlen für Distribution)

1. **Repository erstellen** auf GitHub
2. **Code pushen**: `git push origin main`
3. **Releases erstellen** für Versionen
4. **Wiki/Issues** für Dokumentation & Support

**Vorteile von GitHub:**
- ✅ Kostenlos für öffentliche Repos
- ✅ Einfaches Klonen für Benutzer
- ✅ Issues & Discussions für Support
- ✅ Automatische Updates via `git pull`
- ✅ GitHub Actions für CI/CD

### Installation für Endbenutzer

```bash
# 1. Repository klonen
git clone https://github.com/dein-username/journaly.git
cd journaly

# 2. Einmalig starten
./start.sh

# 3. App öffnen
open http://localhost:5885
```

## 👨‍💻 Credits

**Lead Developer**: Marcel aka bae
- **Discord**: bae69
- **Role**: Full-Stack Developer & Designer
- **Tech**: Next.js, React, TypeScript, DaisyUI

**Special Thanks**:
- EFX24 Community - Feedback und Testing
- Open Source Contributors - Libraries und Tools
- Discord Community - Support und Ideas
- Trading Community - Real-world Requirements

## 📞 Support

**Questions? Feedback?** 
Contact `bae69` on Discord

---

© 2025 Journaly - by EFX24. Made with ❤️ by Marcel aka bae
