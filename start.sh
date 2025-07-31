#!/bin/bash

# ===========================================
# JOURNALY - TRADING JOURNAL DEPLOYMENT
# ===========================================

echo "🚀 Starting Journaly Trading Journal..."
echo "========================================"

# Prüfe ob Docker installiert ist
if ! command -v docker &> /dev/null; then
    echo "❌ Docker ist nicht installiert!"
    echo "Bitte installiere Docker: https://docs.docker.com/get-docker/"
    exit 1
fi

# Prüfe ob Docker Compose installiert ist
if ! command -v docker-compose &> /dev/null && ! docker compose version &> /dev/null; then
    echo "❌ Docker Compose ist nicht installiert!"
    echo "Bitte installiere Docker Compose: https://docs.docker.com/compose/install/"
    exit 1
fi

# Prüfe ob .env existiert
if [ ! -f .env ]; then
    echo "⚠️  .env Datei nicht gefunden!"
    if [ -f .env.example ]; then
        echo "📋 Kopiere .env.example zu .env..."
        cp .env.example .env
        echo "✅ .env Datei erstellt!"
        echo ""
        echo "🔧 WICHTIG: Bearbeite die .env Datei und ändere:"
        echo "   - NEXTAUTH_SECRET (sicherer, zufälliger String)"
        echo "   - ADMIN_EMAIL (deine Email)"
        echo "   - Für externe Server: localhost zu deiner Domain/IP"
        echo ""
        read -p "Drücke Enter wenn du die .env Datei bearbeitet hast..."
    else
        echo "❌ .env.example nicht gefunden!"
        exit 1
    fi
fi

echo "🐳 Starte Docker Container..."

# Verwende docker-compose oder docker compose je nach Installation
if command -v docker-compose &> /dev/null; then
    DOCKER_COMPOSE_CMD="docker-compose"
else
    DOCKER_COMPOSE_CMD="docker compose"
fi

# Stoppe existierende Container
$DOCKER_COMPOSE_CMD down

# Baue und starte Container
$DOCKER_COMPOSE_CMD up --build -d

echo ""
echo "⏳ Warte auf Container-Start..."
sleep 10

# Prüfe ob Container laufen
if docker ps | grep -q "journaly-app"; then
    echo ""
    echo "✅ Journaly Trading Journal erfolgreich gestartet!"
    echo "========================================"
    echo "🌐 App URL: http://localhost:5885"
    echo "📊 PgAdmin URL: http://localhost:5436 (mit --profile admin)"
    echo ""
    echo "📝 Erste Schritte:"
    echo "   1. Öffne http://localhost:5885"
    echo "   2. Registriere den ersten Admin-Benutzer"
    echo "   3. Beginne mit dem Trading Journal!"
    echo ""
    echo "⚙️  Container-Status:"
    docker ps --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"
else
    echo ""
    echo "❌ Container-Start fehlgeschlagen!"
    echo "Logs anzeigen mit: $DOCKER_COMPOSE_CMD logs"
fi

echo ""
echo "🛠️  Nützliche Befehle:"
echo "   - Container stoppen: $DOCKER_COMPOSE_CMD down"
echo "   - Logs anzeigen: $DOCKER_COMPOSE_CMD logs -f"
echo "   - Neustart: $DOCKER_COMPOSE_CMD restart"
echo "   - Mit PgAdmin: $DOCKER_COMPOSE_CMD --profile admin up -d" 