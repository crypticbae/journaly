# 🚀 ONE-LINER DEPLOYMENT VON GITHUB

## Methode 1: Direkter Download + Docker-Compose

**Ein einziger Befehl für komplettes Deployment:**

```bash
curl -fsSL https://raw.githubusercontent.com/crypticbae/journaly/main/docker-compose.prod.yml -o docker-compose.yml && curl -fsSL https://raw.githubusercontent.com/crypticbae/journaly/main/.env.example -o .env && docker-compose up -d --build
```

## Methode 2: Mit GitHub Clone im Container

**Docker-Compose das direkt von GitHub klont:**

```bash
curl -fsSL https://raw.githubusercontent.com/crypticbae/journaly/main/docker-compose.remote.yml -o docker-compose.yml && docker-compose up -d
```

## Methode 3: Deployment Script

**Lädt automatisch alles herunter:**

```bash
curl -fsSL https://raw.githubusercontent.com/crypticbae/journaly/main/deploy.sh | bash
```

## Methode 4: Minimaler One-Liner

**Nur das Nötigste:**

```bash
mkdir journaly-deploy && cd journaly-deploy && curl -fsSL https://raw.githubusercontent.com/crypticbae/journaly/main/docker-compose.prod.yml -o docker-compose.yml && echo 'DATABASE_URL="postgresql://efx_user:efx_secure_password_2024@efx-postgres:5432/trading_journal?schema=public"
NEXTAUTH_URL="http://localhost:5885"
NEXTAUTH_SECRET="change-this-to-secure-random-string"
ADMIN_EMAIL="admin@tradingjournal.com"
NODE_ENV="production"
APP_URL="http://localhost:5885"
PORT="5885"' > .env && docker-compose up -d --build
```

---

## 🎯 **Für Server-Deployment (Remote)**

### VPS/Server One-Liner:
```bash
# SSH auf deinen Server, dann:
curl -fsSL https://raw.githubusercontent.com/crypticbae/journaly/main/deploy.sh | bash
```

### Mit Custom Domain:
```bash
curl -fsSL https://raw.githubusercontent.com/crypticbae/journaly/main/docker-compose.prod.yml -o docker-compose.yml && \
curl -fsSL https://raw.githubusercontent.com/crypticbae/journaly/main/.env.example -o .env && \
sed -i 's/localhost:5885/deine-domain.com:5885/g' .env && \
docker-compose up -d --build
```

---

## 🔧 **Anpassungen**

### Environment Variables setzen:
```bash
export NEXTAUTH_SECRET="dein-super-sicherer-32-zeichen-key"
export ADMIN_EMAIL="deine@email.com"
export DOMAIN="deine-domain.com"

curl -fsSL https://raw.githubusercontent.com/crypticbae/journaly/main/docker-compose.prod.yml -o docker-compose.yml && \
docker-compose up -d --build
```

### Mit eigenem Port:
```bash
curl -fsSL https://raw.githubusercontent.com/crypticbae/journaly/main/docker-compose.prod.yml | \
sed 's/5885:5885/8080:5885/g' > docker-compose.yml && \
docker-compose up -d --build
```

---

## ✅ **Ergebnis**

Nach jedem Befehl:
- 🌐 **App läuft auf**: http://localhost:5885 (oder dein Port)
- 🗄️ **PostgreSQL**: Automatisch konfiguriert
- 📊 **Ready to use**: Sofort einsatzbereit

**Kein Git Clone nötig! Direkt von GitHub deployed!** 🚀 