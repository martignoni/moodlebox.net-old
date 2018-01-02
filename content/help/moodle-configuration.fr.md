---
title: Quelle est la configuration par défaut de Moodle ?
author:
  - Nicolas Martignoni
type: kb
date: 2017-04-17T20:03:51+00:00
slug: configuration-initiale-de-lenvironnement-moodle
permalink:
  - /help/configuration-initiale-de-lenvironnement-moodle/
categories:
  - Maintenance

---
L'environnement Moodle installé sur la MoodleBox n'a aucune configuration particulière, hormis quelques réglages. Les réglages décrits ci-dessous ont été modifiés pour faciliter son utilisation ou améliorer ses performances.

App Mobile
:   Le service mobile permettant l'accès au moyen de l'<a href="https://download.moodle.org/mobile/" target="_blank" rel="noopener">app mobile Moodle</a> officielle est activé. Vous pouvez télécharger l'app mobile Moodle à l'adresse <a href="https://download.moodle.org/mobile/" target="_blank" rel="noopener">https://download.moodle.org/mobile/</a>.

Taille des fichiers déposés
:   La taille maximale des fichiers déposés est fixée à **50 Mo** (au moyen des variables _post\_max\_size_ et _upload\_max\_filesize_ de PHP).

Cron
:   Le _cron_ est configuré de sorte à être lancé **toutes les 3 minutes**. Certaines tâches programmées nécessitent un accès à Internet. Il est recommandé de connecter la MoodleBox à Internet au moyen d'un câble Ethernet.

Filtre multilingue
:   Le filtre Contenu multilingue est activé.

Cache
:   Les mécanismes de cache de Moodle sont configurés pour **optimiser la réactivité** de la MoodleBox.

Plugin MoodleBox
:   Le <a href="https://moodle.org/plugins/tool_moodlebox" target="_blank" rel="noopener">plugin d'administration MoodleBox</a> pour Moodle est installé. Ce plugin permet à un administrateur Moodle de redémarrer et d'arrêter la MoodleBox, de changer ses date et heure, d'en modifier certains paramètres et de surveiller son fonctionnement au moyen d'une interface graphique simple.

Bibliothèque MathJax
:   Dès la version 2.0 et ultérieures, la bibliothèque MathJax est installée en local, permettant au filtre MathJax de fonctionner correctement même is la MoodleBox n'est pas connectée à Internet.