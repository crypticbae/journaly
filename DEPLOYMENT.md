# 🐳 Journaly - Docker Deployment Guide

## Für Endbenutzer (GitHub Distribution)

### 1. Repository klonen
```bash
git clone https://github.com/your-username/journaly.git
cd journaly
```

### 2. Automatischer Start
```bash
chmod +x start.sh
./start.sh
```

Das war's! Die App läuft auf http://localhost:5885

## Für Server-Deployment

### Externe Server Vorbereitung

1. **Domain/IP konfigurieren** (.env anpassen):
```bash
NEXTAUTH_URL="http://deine-domain.com:5885"
APP_URL="http://deine-domain.com:5885"
```

2. **Sichere Passwörter setzen**:
```bash
NEXTAUTH_SECRET="sicherer-32-zeichen-random-string-für-production"
```

3. **PostgreSQL Passwort ändern** (docker-compose.yml):
```yaml
POSTGRES_PASSWORD: starkes_passwort_2024
```

### Produktions-Deployment
```bash
# Nur App + Database (ohne PgAdmin)
docker-compose -f docker-compose.prod.yml up --build -d
```

### Reverse Proxy (Nginx)
```nginx
server {
    listen 80;
    server_name deine-domain.com;
    
    location / {
        proxy_pass http://localhost:5885;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

## Wartung & Updates

### Logs anzeigen
```bash
docker-compose logs -f journaly-app
```

### Container neu starten
```bash
docker-compose restart journaly-app
```

### Updates installieren
```bash
git pull origin main
docker-compose up --build -d
```

### Backup erstellen
```bash
# Database Backup
docker exec efx-postgres pg_dump -U efx_user trading_journal > backup.sql

# Volume Backup
docker run --rm -v efx_postgres_data:/data -v $(pwd):/backup alpine tar czf /backup/postgres_backup.tar.gz /data
```

## Troubleshooting

### Container läuft nicht
```bash
# Status prüfen
docker ps -a

# Logs prüfen
docker-compose logs journaly-app

# Clean restart
docker-compose down -v
docker-compose up --build -d
```

### Port-Konflikte
- Port 5885 ändern in docker-compose.yml
- Firewall-Regeln prüfen
- Andere Services auf Port prüfen

### Database-Probleme
```bash
# Database zurücksetzen
docker-compose down -v
docker volume rm efx_postgres_data
docker-compose up --build -d
```

## Sicherheit

### Production Checklist
- [ ] NEXTAUTH_SECRET geändert (32+ Zeichen)
- [ ] PostgreSQL Passwort geändert
- [ ] Admin Email konfiguriert
- [ ] Domain/IP in .env konfiguriert
- [ ] Firewall konfiguriert (nur Port 5885 öffentlich)
- [ ] SSL/TLS mit Reverse Proxy
- [ ] Regelmäßige Backups
- [ ] Updates überwachen

### Firewall (UFW)
```bash
# Nur Port 5885 öffnen
sudo ufw allow 5885
sudo ufw enable
``` 