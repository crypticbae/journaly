# 🔧 User-Status Fix - Neustart erforderlich

## Problem gelöst ✅
**User können sich nach Admin-Freischaltung nicht einloggen**

## Was war das Problem?
- JWT Token haben den alten User-Status gespeichert
- Nach Freischaltung war Status in DB = APPROVED, aber JWT Token = PENDING
- System hat JWT Token gecheckt → Login verweigert

## Was wurde gefixt?
- Session-Callback lädt jetzt immer aktuellen Status aus der Datenbank
- JWT Token wird nicht mehr als einzige Statusquelle verwendet

## 🚀 Neustart erforderlich:

```bash
# Container stoppen
docker-compose -f docker-compose.final.yml down

# Container neu starten (mit Fix)
docker-compose -f docker-compose.final.yml up --build -d

# Status prüfen
docker logs journaly-app -f
```

## ✅ Nach dem Neustart:
1. Admin kann User freischalten
2. User können sich sofort einloggen (ggf. Browser-Cache leeren)
3. Freischaltung wirkt sofort bei nächstem Seitenladen

## 🔍 Test:
1. User registrieren
2. Admin schaltet User frei
3. User loggt sich ein → sollte sofort funktionieren! 