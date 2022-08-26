# Projektaufarbeitung

## Navigation

---

- [Projektaufarbeitung](#projektaufarbeitung)
  - [Navigation](#navigation)
  - [Projektplanung](#projektplanung)
    - [Projektbeschreibung](#projektbeschreibung)
    - [Herangehensweise](#herangehensweise)
    - [Technologien](#technologien)
  - [Projektrealisierung](#projektrealisierung)
    - [Projektstruktur](#projektstruktur)
    - [Umsetzung](#umsetzung)
    - [Wichtiger Hinweis](#wichtiger-hinweis)
    - [Test, Bauen und Entwicklung](#test-bauen-und-entwicklung)
  - [Installieren Sie die Abhängigkeiten](#installieren-sie-die-abhängigkeiten)
    - [Starten Sie die Anwendung im Entwicklungsmodus (Nachladen von Hot-Code, Fehlerberichte usw.)](#starten-sie-die-anwendung-im-entwicklungsmodus-nachladen-von-hot-code-fehlerberichte-usw)
    - [Lint die Dateien](#lint-die-dateien)
    - [Formatieren Sie die Dateien](#formatieren-sie-die-dateien)
    - [Bauen Sie die Anwendung für die Produktion](#bauen-sie-die-anwendung-für-die-produktion)
  - [Fazit](#fazit)

---

## Projektplanung

### Projektbeschreibung

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

### Herangehensweise

Ich habe mir wie ich diese, im prinzip sehr einfache App abbilden möchte. Nach sichtung der API, hätte das ganze Projekt
Quick and Dirty mit einem kleinen Script gelöst werden können. Da ich in der glücklichen Situation bin, freie Hand bei der
Architektur und der Entwicklung zu haben, habe ich das Projekt modularisiert, segmentiert und nach Aufgabenbereichen umgesetzt.

### Technologien

- Vue3
- Quasar (aufbauend auf Vue3)
- TypeScript
- Sass
- jest
- (minnimaler Einsatz des Grafik Programms Affinity Designer)

Ich habe mich bei der Auswahl der Technologien darauf focussiert, den Kern meines Kompetenzstacks abzubilden. Die Entscheidung für Quasar als Subframework war basiert auf der
umfassenden Komponentenbibliothek von Quasar. Diese und der Quasar eigene Projekt start, beschleunigen die Entwicklung entscheident.

Die Entscheidung für Sass und TypeScript basiert auf dem Featureset und der Typen sicherheit von TypeScript. Jest als Testframework wurde war eine Bauchentscheidung, es konnten allerdings aufgrund der Art der Controller relativ wenige Tests erstellt werden.

Das Logo wurd in Affinity Designer erstellt, welches ich für die bessere Version
von Adobe Illustrator halte.

![Logo](./public/icons/favicon-128x128.png)

## Projektrealisierung

### Projektstruktur

Ich habe mich neben dem grundsätzlichen MVVM-Pattern von Vue3 auch für Struckturierte TypeScript Controller und Models entschieden. Im Hintergrund der Anwendung ist eine persistente Session implementiert, welche auf die localStorage des Browsers zugreift und
diesen nutzt um eine Sitzungsübergreifende Datenerhaltung zu garantieren. Diese und weitere wichtige Klassen wurden nach dem Singleton Pattern erstellt.
Somit kann gewehrleistet werden, dass eine einzige Instanz des Projektes existiert.

### Umsetzung

Das Projekt wurde an 2 Tagen realisiert, ich habe versucht trotz der kurzen Zeit ein möglichst professionelles Ergebnis zu erzielen.
Ich habe mich bei der Nutzung von Git auf relativ große Commits beschränkt. Im strukturellen Ablauf habe ich mich erst um die Umsetzung der Datenstruktur
und der API connectivität gekümmert und um zweiten Durchgang um die Umsetzung der Seite und Komponenten. Es wurde nebern der bereits erwähnten Session
ein Message System implementiert, über welches Status Nachrichten angezeigt werden können. Selbiges wurde für Warnungen, Fehler, Informationen und Erfolgsnachrichten genutzt,
welche besonders im Kontext der Berechtigungsabfragen wichtig sind.

### Wichtiger Hinweis

- Um das Projekt zu bauen und lauffähig zu machen, muss ein gültiget API Key in der `./src/model/config.ts` eingetragen werden. Ein solcher kann nach der Erstellung eines Accounts bei [OpenWeatherMap.org](https://OpenWeatherMap.org) erhalten werden.

### Test, Bauen und Entwicklung

## Installieren Sie die Abhängigkeiten

```bash
yarn
## oder
npm install
```

### Starten Sie die Anwendung im Entwicklungsmodus (Nachladen von Hot-Code, Fehlerberichte usw.)

```bash
quasar dev
```

### Lint die Dateien

```bash
yarn lint
# oder
npm run lint
```

### Formatieren Sie die Dateien

```bash
yarn format
# oder
npm run format
```

### Bauen Sie die Anwendung für die Produktion

```bash
quasar build
```

## Fazit

Ich habe zwar bereits in der Vergangenheit Projekte in sehr kurzer Zeit geschrieben, dieses
Allerdings war aufgrund meiner Ansprüche an mich selbst eine echte Herausforderung. Ich bin mit dem Ergebnis absolut zufrieden.
