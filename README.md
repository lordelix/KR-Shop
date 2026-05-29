# Klickrhein Shop

SvelteKit-basierter Online-Shop mit Produktlisten, Produktdetailseiten, Warenkorb, Checkout, Bestellabschluss und optionaler PayPal-Zahlung.

## Tech Stack

- Svelte 5 (Runes) + SvelteKit 2
- Vite 7
- TypeScript
- SCSS
- OpenAPI-typisierte API-Anbindung (`openapi-typescript`, `openapi-fetch`)

## Voraussetzungen

- Node.js 20+ (empfohlen aktuelle LTS)
- npm 10+

## Schnellstart

```bash
nvm use // Make sure to use the node version mentioned in .nvmrc

npm ci
npm run dev
```

Die App läuft lokal auf `http://localhost:3000`.

## Umgebungsvariablen

Die Konfiguration wird über öffentliche SvelteKit-Variablen gesteuert:

Beispiel `.env`:

```env
PUBLIC_SHOP_API_BASE_URL=https://api.klickrhein.de/v6
PUBLIC_SHOP_API_KEY=your-api-key
PUBLIC_SHOP_MODULE_ID=1
PUBLIC_PAYPAL_CLIENT_ID=your-paypal-client-id
```

## API und lokaler Proxy

In der lokalen Entwicklung ist ein Vite-Proxy aktiv:

- `"/api" -> "https://api.klickrhein.de/v6"`
- Rewrite von `^/api` auf leeren Prefix

## NPM Scripts

- `npm run dev` startet den Dev-Server
- `npm run build` erstellt das Production-Build
- `npm run preview` startet die Build-Vorschau
- `npm run lint` prüft Formatting + ESLint
- `npm run format` formatiert den Code mit Prettier
- `npm run generate-api-specs` erzeugt Typen aus OpenAPI

Hinweis: `npm install` triggert per `postinstall` automatisch `generate-api-specs`.

## Projektstruktur (Kurzüberblick)

- `src/routes` enthält alle Seiten und Shop-Flows
- `src/lib/boilerplate` enthält wiederverwendbare Komponenten, Utils und Xioni-Shop-API-Layer
- `src/lib/components` enthält projektspezifische Layout-Komponenten wie Header/Footer
- `src/lib/stores.ts` enthält globale Svelte Stores (z. B. Cart/Order)
- `static` enthält statische Assets

## Rendering und Deployment

- SvelteKit nutzt `@sveltejs/adapter-static`
- Build-Ausgabe liegt in `htdocs`
- Fallback-Datei: `200.html`
- Teile des Shops (z. B. Checkout) laufen clientseitig (`ssr = false` in relevanten Routen)

Build erstellen:

```bash
npm run build
```

Danach kann der Inhalt von `htdocs` auf statischem Hosting ausgeliefert werden.

## Qualitätssicherung

```bash
npm run lint
```

Bei Bedarf zusätzlich:

```bash
npm run format
```
