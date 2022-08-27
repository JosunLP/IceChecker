# Ice Checker (icechecker)

Ein Software-Tool zur Überprüfung, ob ein Eis gültig ist

## Installieren Sie die Abhängigkeiten

```bash
yarn
# or
npm install
```

### Starten Sie die Anwendung im Entwicklungsmodus (Hot-Code-Nachladen, Fehlerberichte usw.)

```bash
npm run dev

# or

quasar dev
```

### Linten der Dateien

```bash
yarn lint

# or

npm run lint
```

### Formatieren der Dateien

```bash
yarn format

# or

npm run format
```

### Erstellen Sie die Anwendung für die Produktion

```bash
npm run build

# or

quasar build
```

### Requirements

Wenn die Temperatur über 30 Grad Celsius steigt, dann gibt es ein Eis für alle.
Ich brauche also eine Webapp, die mir die aktuelle Temperatur anzeigt. Diese wird von einer API abgerufen. Dazu hätte ich gerne eine adäquate Benachrichtigung, wenn die Temperatur über 30 Grad steigt. Ich möchte die Benachrichtigung schließen können (hab ja jetzt ein Eis) und möchte nicht noch einmal am selben Tag erinnert werden (gibt nur einmal welches). Gerne darf dann auch die Anzeige der Temperatur anders ausschauen oder so.
Details:

- Völlig frei in der Wahl des Frameworks, von mir aus auch ohne.
- Eine vom Betriebssystem unabhängige Lösung.
- Völlig frei in der Wahl des Designs.
- Temperatur von z. B. <https://openweathermap.org/api> abrufen.
- Es gibt nur ein Eis am Tag, steigt die Temperatur zweimal auf über 30 Grad, gibts nicht noch eins!
- Die Art und Weise der Benachrichtigung ist frei zu wählen und es darf gerne geil integrierbar sein.
Kür:
- Gerne hätte ich eine kurze Erläuterung zu den von dir gewählten Detaillösungen dazu. Also warum hast du das so und so gemacht etc.
- Einen Unit Test für die Kernfunktionen
