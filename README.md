# Ice Checker (icechecker)

## Menu

- [Ice Checker (icechecker)](#ice-checker-icechecker)
  - [Menu](#menu)
  - [Deutsch](#deutsch)
    - [Beschreibung](#beschreibung)
    - [Lizenz](#lizenz)
    - [Aufsetzen](#aufsetzen)
    - [Starten der Entwicklungsumgebung](#starten-der-entwicklungsumgebung)
    - [Linten der Dateien](#linten-der-dateien)
    - [Formatieren der Dateien](#formatieren-der-dateien)
    - [Erstellen Sie die Anwendung für die Produktion](#erstellen-sie-die-anwendung-für-die-produktion)
    - [Ursprüngliche Anforderungen](#ursprüngliche-anforderungen)
  - [English](#english)
    - [Description](#description)
    - [License](#license)
    - [Installation](#installation)
    - [Start the development environment](#start-the-development-environment)
    - [linking the files](#linking-the-files)
    - [Format the files](#format-the-files)
    - [Build the application for production](#build-the-application-for-production)
    - [Original requirements](#original-requirements)

## Deutsch

### Beschreibung

Ein Software Tool für Sommer und Winter. Durch abfrage der Wetterdaten von [OpenWeatherMap](https://openweathermap.org/) wird die aktuelle Temperatur abgefragt und entschieden,
ob es warm genug für ein Eis im Sommer oder klar genug für einen Glühwein/Punsch im Winter ist.

### Lizenz

[MIT](https://choosealicense.com/licenses/mit/)

### Aufsetzen

```bash
yarn
# oder
npm install
```

### Starten der Entwicklungsumgebung

```bash
npm run dev

# oder

quasar dev
```

### Linten der Dateien

```bash
yarn lint

# oder

npm run lint
```

### Formatieren der Dateien

```bash
yarn format

# oder

npm run format
```

### Erstellen Sie die Anwendung für die Produktion

```bash
npm run build

# oder

quasar build
```

### Ursprüngliche Anforderungen

Wenn die Temperatur über 30 Grad Celsius steigt, dann gibt es ein Eis für alle.
Ich brauche also eine Webapp, die mir die aktuelle Temperatur anzeigt. Diese wird von einer API abgerufen. Dazu hätte ich gerne eine adäquate Benachrichtigung, wenn die Temperatur über 30 Grad steigt. Ich möchte die Benachrichtigung schließen können (hab ja jetzt ein Eis) und möchte nicht noch einmal am selben Tag erinnert werden (gibt nur einmal welches). Gerne darf dann auch die Anzeige der Temperatur anders ausschauen oder so.
Details:

- Völlig frei in der Wahl des Frameworks, von mir aus auch ohne.
- Eine vom Betriebssystem unabhängige Lösung.
- Völlig frei in der Wahl des Designs.
- Temperatur von z. B. <https://openweathermap.org/api> abrufen.
- Es gibt nur ein Eis am Tag, steigt die Temperatur zweimal auf über 30 Grad, gibt es nicht noch eins!
- Die Art und Weise der Benachrichtigung ist frei zu wählen und es darf gerne geil integrierbar sein.
Kür:
- Gerne hätte ich eine kurze Erläuterung zu den von dir gewählten Detaillösungen dazu. Also warum hast du das so und so gemacht etc.
- Einen Unit Test für die Kernfunktionen

---

## English

### Description

A software tool for summer and winter. By querying the weather data from [OpenWeatherMap](https://openweathermap.org/) the current temperature is queried and decided,
whether it is warm enough for an ice cream in summer or cold enough for a mulled wine/punch in winter.

### License

[MIT](https://choosealicense.com/licenses/mit/)

### Installation

```bash
yarn

# or

npm install

```

### Start the development environment

```bash
npm run dev

# or

quasar dev
```

### linking the files

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

### Build the application for production

```bash
npm run build

# or

quasar build

```

### Original requirements

When the temperature goes above 30 degrees Celsius, then there is an ice cream for everyone.
So I need a webapp that shows me the current temperature. This is retrieved from an API. For this I would like to have an adequate notification when the temperature rises above 30 degrees. I would like to be able to close the notification (have an ice cream now) and not be reminded again on the same day (there is only once which). Gladly then also the display of the temperature may look different or so.
Details:

- Completely free in the choice of the framework, from me also without.
- A solution independent of the operating system.
- Completely free in the choice of the design.
- Get temperature from e.g. <https://openweathermap.org/api>.
- There is only one ice cream a day, if the temperature rises above 30 degrees twice, there is not another one!
- The way of notification is to be chosen freely and it may be gladly geil integrable.
Freestyle:
- I would like to have a brief explanation of the detail solutions you have chosen for this. So why did you do it this way and that way etc.?
- A unit test for the core functions
