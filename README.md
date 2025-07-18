# Portfolio Weboldal

Modern, professzionális portfolio weboldal React-ben, sötét témával és zöld kiemelésekkel.

## Funkciók

- 🎨 Modern, sötét téma zöld kiemelésekkel
- 📱 Teljesen reszponzív design
- ✨ Animált háttér elemek
- 🎯 Smooth scrolling navigáció
- 📊 Technológia szint mutatók
- 💼 Projektek szekció
- 📧 Kapcsolatfelvételi űrlap
- 🎭 Animált háttér körök

## Technológiák

- React 19
- CSS3 (Flexbox, Grid, Animations)
- React Icons
- Google Fonts (Space Grotesk)

## Telepítés és Futtatás

1. Klónozd a repository-t:
```bash
git clone https://github.com/[your-username]/portfolio.git
cd portfolio
```

2. Telepítsd a függőségeket:
```bash
npm install
```

3. Indítsd el a fejlesztői szervert:
```bash
npm start
```

4. Build production verzióhoz:
```bash
npm run build
```

## GitHub Pages Deploy

1. Frissítsd a `package.json`-ban a `homepage` mezőt a saját GitHub felhasználóneveddel:
```json
"homepage": "https://[your-username].github.io/portfolio"
```

2. Deploy a GitHub Pages-re:
```bash
npm run deploy
```

3. A GitHub repository beállításaiban engedélyezd a GitHub Pages-t a `gh-pages` branch-ről.

## Struktúra

```
src/
├── App.js          # Fő komponens
├── App.css         # Stílusok
└── index.js        # Entry point
```

## Szekciók

- **Hero/Welcome**: Üdvözlő szekció viewport magassággal
- **About**: Rólam szekció profil képpel
- **Technologies**: Használt technológiák progress bar-okkal
- **Projects**: Projektek horizontális görgetéssel
- **Contact**: Kapcsolatfelvételi űrlap
- **Footer**: Kapcsolati információk ikonokkal

## Stílus

- Sötét háttér (#0a0a0a)
- Zöld kiemelések (#00ff88)
- Modern tipográfia (Space Grotesk)
- Animált háttér elemek
- Smooth scrolling

## Licenc

MIT License
