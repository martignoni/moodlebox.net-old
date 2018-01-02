---
title: "Est-il possible d'accéder à la MoodleBox par Ethernet ?"
author: Nicolas Martignoni
type: kb
date: 2017-12-23T16:31:15+00:00
slug: est-il-possible-dacceder-a-la-moodlebox-par-ethernet
categories:
  - Utilisation

---
La MoodleBox n'est pas destinée à servir ses appareils clients par Ethernet. Cependant, il est possible de s'y connecter via Ethernet, moyennant quelques travaux.

Pour ce faire, vous devez attribuer à la MoodleBox le nom de domaine **moodlebox.home**. Ceci nécessite de disposer d'un serveur DNS sur votre réseau Ethernet (par exemple sur votre routeur), qui vat attribuer ce nom de domaine à l'adresse de votre MoodleBox, qui est donnée par le serveur DHCP du routeur (habituellement, cette adresse est quelque chose comme 192.168.1.143).

Ainsi, les appareils clients peuvent se connecter facilement à la MoodleBox (sans avoir besoin de retenir son adresse numérique), et l'instance de Moodle de la MoodleBox répondra de manière correcte.

Si vous n'avez besoin d'accéder à la MoodleBox via Ethernet que par SSH, il est possible de le faire au moyen de son adresse IP numérique, sans autre configuration.
