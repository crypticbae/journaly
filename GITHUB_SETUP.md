# 📱 GitHub Setup - Schritt für Schritt

## 1. GitHub Account & Repository erstellen

### GitHub Account (falls noch nicht vorhanden)
1. Gehe zu [github.com](https://github.com)
2. Klicke **"Sign up"**
3. Erstelle deinen Account

### Neues Repository erstellen
1. **Einloggen** bei GitHub
2. Klicke oben rechts auf **"+"** → **"New repository"**
3. **Repository Details**:
   - **Repository name**: `journaly` (oder `efx-trading-journal`)
   - **Description**: `Modern Trading Journal with Email Import & Analytics`
   - **Public** ✅ (damit andere es nutzen können)
   - **Add a README file** ❌ (haben wir schon)
   - **Add .gitignore** ❌ (haben wir schon)
   - **Choose a license** ✅ **MIT License** (empfohlen für Open Source)

4. Klicke **"Create repository"**

## 2. Git Repository lokal initialisieren

Öffne Terminal im `trading-journal` Ordner:

```bash
# Git Repository initialisieren
git init

# Alle Dateien hinzufügen
git add .

# Ersten Commit erstellen
git commit -m "🚀 Initial commit - Journaly Trading Journal mit Docker Setup"

# GitHub Repository als Remote hinzufügen (ÄNDERE USERNAME!)
git remote add origin https://github.com/DEIN-USERNAME/journaly.git

# Main Branch erstellen und pushen
git branch -M main
git push -u origin main
```

## 3. GitHub Repository URL finden

Nach dem Repository erstellen findest du die URL hier:
- **HTTPS**: `https://github.com/DEIN-USERNAME/journaly.git`
- **SSH**: `git@github.com:DEIN-USERNAME/journaly.git`

## 4. Code hochladen

```bash
# Status prüfen
git status

# Falls Änderungen da sind
git add .
git commit -m "📝 Update mit Docker Setup"
git push origin main
```

## 5. Repository Settings optimieren

### README anpassen
1. Gehe zu deinem Repository auf GitHub
2. Klicke auf **README.md**
3. Klicke **Bleistift-Symbol** (Edit)
4. Ändere `<repository-url>` zu deiner echten URL:
   ```bash
   git clone https://github.com/DEIN-USERNAME/journaly.git
   ```

### Repository Settings
1. Gehe zu **Settings** Tab
2. **General**:
   - ✅ **Issues** (für Bug Reports)
   - ✅ **Wiki** (für Dokumentation)
   - ✅ **Discussions** (für Community)
3. **Pages** (optional):
   - Aktiviere GitHub Pages für Dokumentation

## 6. Release erstellen (Empfohlen)

1. Gehe zu **Releases** (rechte Seite der Repository-Seite)
2. Klicke **"Create a new release"**
3. **Tag version**: `v1.0.0`
4. **Release title**: `🚀 Journaly v1.0.0 - Initial Release`
5. **Description**:
   ```markdown
   ## 🎉 Erste Version von Journaly Trading Journal
   
   ### ✨ Features
   - 📊 Multi-Account Trading Analytics
   - 📧 Email Import von Trading Confirmations
   - 🎨 22+ DaisyUI Themes
   - 🐳 Ein-Klick Docker Setup
   - 📱 Responsive Design
   
   ### 🚀 Installation
   ```bash
   git clone https://github.com/DEIN-USERNAME/journaly.git
   cd journaly
   ./start.sh
   ```
   
   App läuft auf http://localhost:5885
   ```

6. Klicke **"Publish release"**

## 7. Repository-Beschreibung hinzufügen

1. Gehe zur **Hauptseite** deines Repositories
2. Klicke auf **Zahnrad-Symbol** neben "About"
3. **Description**: `🚀 Modern Trading Journal with Email Import & Docker Deployment`
4. **Website**: `https://github.com/DEIN-USERNAME/journaly`
5. **Topics** hinzufügen:
   - `trading`
   - `journal`
   - `docker`
   - `nextjs`
   - `postgresql`
   - `analytics`
   - `efx24`

## 8. .gitignore überprüfen

Erstelle `.gitignore` falls noch nicht vorhanden:

```bash
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts

# database
*.db
*.db-journal
trading-journal.db

# docker
.env
```

## 9. Endbenutzer-Installation testen

Teste ob alles funktioniert:

```bash
# In einem neuen Ordner
cd /tmp
git clone https://github.com/DEIN-USERNAME/journaly.git
cd journaly
./start.sh
```

## 10. Community Features aktivieren

### Issues Template
Erstelle `.github/ISSUE_TEMPLATE/bug_report.md`:

```markdown
---
name: Bug report
about: Create a report to help us improve
title: ''
labels: ''
assignees: ''

---

**Describe the bug**
A clear and concise description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

**Expected behavior**
A clear and concise description of what you expected to happen.

**Screenshots**
If applicable, add screenshots to help explain your problem.

**Environment:**
 - OS: [e.g. Windows, Linux, macOS]
 - Docker Version: [e.g. 20.10.7]
 - Browser [e.g. chrome, safari]

**Additional context**
Add any other context about the problem here.
```

### Pull Request Template
Erstelle `.github/pull_request_template.md`:

```markdown
## Description
Brief description of the changes

## Type of change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Performance improvement

## Testing
- [ ] Tested locally with Docker
- [ ] All existing tests pass
- [ ] Added new tests (if applicable)

## Checklist
- [ ] Code follows the existing style
- [ ] Self-review completed
- [ ] Documentation updated
```

---

## 🎉 Fertig!

Dein Repository ist jetzt live und andere können es einfach verwenden:

```bash
git clone https://github.com/DEIN-USERNAME/journaly.git
cd journaly
./start.sh
```

**Repository URL**: `https://github.com/DEIN-USERNAME/journaly` 