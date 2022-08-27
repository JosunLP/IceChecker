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
    - [Linten der Dateien](#linten-der-dateien)
    - [Formatieren Sie die Dateien](#formatieren-sie-die-dateien)
    - [Bauen Sie die Anwendung für die Produktion](#bauen-sie-die-anwendung-für-die-produktion)
  - [Fazit](#fazit)

---

## Projektplanung

### Projektbeschreibung

Wenn die Temperatur über 30 Grad Celsius steigt, dann gibt es ein Eis für alle.

Ich brauche also eine Webapp, die mir die aktuelle Temperatur anzeigt. Diese wird von einer API abgerufen. Dazu hätte ich gerne eine adäquate Benachrichtigung, wenn die Temperatur über 30 Grad steigt. Ich möchte die Benachrichtigung schließen können (hab ja jetzt ein Eis) und möchte nicht noch einmal am selben Tag erinnert werden (gibt nur einmal welches). Gerne darf dann auch die Anzeige der Temperatur anders ausschauen oder so.

Details:

- Völlig frei in der Wahl das Framework, von mir aus auch ohne.
- Eine vom Betriebssystem unabhängige Lösung.
- Völlig frei in der Wahl des Designs.
- Temperatur von z. B. <https://openweathermap.org/api> abrufen.
- Es gibt nur ein Eis am Tag, steigt die Temperatur zweimal auf über 30 Grad, gibts nicht noch eins!
- Die Art und Weise der Benachrichtigung ist frei zu wählen und es darf gerne geil integrierbar sein.

Kür:

- Gerne hätte ich eine kurze Erläuterung zu den von dir gewählten Detaillösungen dazu. Also warum hast du das so und so gemacht etc.
- Einen Unit-Test für die Kernfunktionen

### Herangehensweise

Ich habe mir wie ich diese, im Prinzip sehr einfache App abbilden möchte. Nach Sichtung der API hätte das ganze Projekt
Quick-and-Dirty mit einem kleinen Script gelöst werden können. Da ich in der glücklichen Situation bin, freie Hand bei der
Architektur und der Entwicklung zu haben, habe ich das Projekt modularisiert, segmentiert und nach Aufgabenbereichen umgesetzt.

### Technologien

- Vue3
- Quasar (aufbauend auf Vue3)
- TypeScript
- Sass
- jest
- (minimaler Einsatz des Grafikprogramms Affinity Designer)

Ich habe mich bei der Auswahl der Technologien darauf fokussiert, den Kern meines Kompetenzstacks abzubilden. Die Entscheidung, für Quasar als Subframework, basiert auf der
umfassenden Komponentenbibliothek von Quasar. Diese und der Quasar eigene Projektstart über die integrierte CLI, beschleunigen die Entwicklung entscheidend.

Die Entscheidung für Sass und TypeScript basiert auf dem Feature Set und der Typensicherheit von TypeScript. Jest als Test Framework, war eine Bauchentscheidung, es konnten allerdings aufgrund der Art der Controller relativ wenige Tests erstellt werden.

Das Logo wurde in Affinity Designer erstellt, welches ich für die bessere Version von Adobe Illustrator halte.

![Logo](./public/icons/favicon-128x128.png)

## Projektrealisierung

### Projektstruktur

Ich habe mich neben dem grundsätzlichen MVVM-Pattern von Vue3 auch für strukturierte TypeScript Controller und Models entschieden. Im Hintergrund der Anwendung ist eine persistente Session implementiert, welche auf die localStorage des Browsers zugreift und
diesen nutzt, um eine sitzungsübergreifende Datenerhaltung zu garantieren. Diese und weitere wichtige Klassen wurden nach dem Singleton Pattern erstellt.
Somit kann gewährleistet werden, dass eine einzige Instanz des Projektes existiert.

### Umsetzung

Das Projekt wurde an 2 Tagen realisiert, ich habe versucht trotz der kurzen Zeit ein möglichst professionelles Ergebnis zu erzielen.
Ich habe mich bei der Nutzung von Git auf relativ große Commits beschränkt. Im strukturellen Ablauf habe ich mich erst um die Umsetzung der Datenstruktur
und der API Konnektivität gekümmert und um zweiten Durchgang um die Umsetzung der Seite und Komponenten. Es wurde neben der bereits erwähnten Session ein Message-System implementiert, über welches Statusnachrichten angezeigt werden können. Selbiges wurde für Warnungen, Fehler, Informationen und Erfolgsnachrichten genutzt, welche besonders im Kontext der Berechtigungsabfragen wichtig sind.

### Wichtiger Hinweis

- Um das Projekt zu bauen und lauffähig zu machen, muss ein gültiger API Key in der `./src/model/config.ts` eingetragen werden. Ein solcher kann nach der Erstellung eines Accounts bei [OpenWeatherMap.org](https://OpenWeatherMap.org) erhalten werden.

### Test, Bauen und Entwicklung

## Installieren Sie die Abhängigkeiten

```bash
yarn
## oder
npm install
```

### Starten Sie die Anwendung im Entwicklungsmodus (Nachladen von Hot-Code, Fehlerberichte usw.)

```bash
npm run dev
# or
quasar dev
```

### Linten der Dateien

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
npm run build
# or
quasar build
```

## Fazit

Ich habe zwar bereits in der Vergangenheit Projekte in sehr kurzer Zeit geschrieben, dieses
Allerdings war aufgrund meiner Ansprüche an mich selbst eine echte Herausforderung. Ich bin mit dem Ergebnis absolut zufrieden.
