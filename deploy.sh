#!/bin/bash

# ===========================================
# JOURNALY - DIRECT GITHUB DEPLOYMENT
# ===========================================

echo "🚀 Deploying Journaly directly from GitHub..."
echo "=============================================="

# Repository URL
REPO_URL="https://raw.githubusercontent.com/crypticbae/journaly/main"

# Create deployment directory
mkdir -p journaly-deploy
cd journaly-deploy

echo "📥 Downloading deployment files..."

# Download essential files
curl -fsSL "$REPO_URL/docker-compose.yml" -o docker-compose.yml
curl -fsSL "$REPO_URL/docker-compose.prod.yml" -o docker-compose.prod.yml
curl -fsSL "$REPO_URL/.env.example" -o .env.example

echo "✅ Files downloaded successfully!"

# Copy .env.example to .env
if [ ! -f .env ]; then
    cp .env.example .env
    echo "📋 .env file created from template"
    echo ""
    echo "🔧 WICHTIG: Bearbeite die .env Datei:"
    echo "   - NEXTAUTH_SECRET (sicherer Random String)"
    echo "   - ADMIN_EMAIL (deine Email)"
    echo "   - Für externe Server: localhost zu deiner Domain/IP"
    echo ""
    read -p "Drücke Enter wenn du die .env Datei bearbeitet hast..."
fi

echo "🐳 Starting Docker containers..."

# Choose deployment type
echo "Wähle Deployment-Typ:"
echo "1) Vollständig (mit PgAdmin)"
echo "2) Production (nur App + Database)"
read -p "Wahl (1 oder 2): " choice

case $choice in
    1)
        docker-compose up -d --build
        echo "🌐 App: http://localhost:5885"
        echo "📊 PgAdmin: http://localhost:5436"
        ;;
    2)
        docker-compose -f docker-compose.prod.yml up -d --build
        echo "🌐 App: http://localhost:5885"
        ;;
    *)
        echo "❌ Ungültige Wahl. Verwende Production Setup..."
        docker-compose -f docker-compose.prod.yml up -d --build
        echo "🌐 App: http://localhost:5885"
        ;;
esac

echo ""
echo "✅ Deployment erfolgreich!"
echo "==============================="
echo "🌐 Trading Journal: http://localhost:5885"
echo ""
echo "🛠️ Nützliche Befehle:"
echo "   - docker-compose logs -f"
echo "   - docker-compose down"
echo "   - docker-compose restart" 