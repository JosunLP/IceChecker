# Ice Checker (icechecker)

A software tool to check, if its valid to get a ice

## Install the dependencies

```bash
yarn
# or
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
npm run dev
# or
quasar dev
```

### Lint the files

```bash
yarn lint
# or
npm run lint
```

### Format the files

```bash
yarn format
# or
npm run format
```

### Build the app for production

```bash
npm run build
# or
quasar build
```

### Customize the configuration

See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js).

### Requirements

Wenn die Temperatur über 30 Grad celsius steigt, dann gibt es ein Eis für alle.

Ich brauche also eine Webapp, die mir die aktuelle Temperatur anzeigt. Diese wird von einer API abgerufen. Dazu hätte ich gerne eine adequate Benachrichtigung wenn die Temperatur über 30 Grad steigt. Ich möchte die Benachrichtigung schliessen können (hab ja jetzt ein Eis) und möchte nicht noch einmal am selben Tag erinnert werden (gibt nur einmal welches). Gerne darf dann auch die Anzeige der Temperatur anders ausschauen oder so.

Details:

- Völlig frei in der Wahl das Frameworks, von mir aus auch ohne.
- Eine vom Betriebssystem unabhängige Lösung.
- Völlig frei in der Wahl des Designs.
- Temperatur von z.B. <https://openweathermap.org/api> abrufen.
- Es gibt nur ein Eis am Tag, steigt die Temperatur zweimal auf über 30 Grad, gibts nicht noch eins!
- Die Art und Weise der Benachrichtigung ist frei zu wählen und es darf gerne geil integrierbar sein.

Kür:

- Gerne hätte ich eine kurze Erläuterung zu den von dir gewählten Detaillösungen dazu. Also warum hast du das so und so gemacht etc.
- Einen unit Test für die Kernfunktionen
