---
title: Comment démarrer et arrêter la MoodleBox
author: Nicolas Martignoni
type: kb
date: 2017-04-17T20:09:27+00:00
slug: demarrer-arreter-redemarrer
weight: 1
categories:
  - Maintenance
  - Utilisation

---
### Démarrer la MoodleBox

Insérer dans la Raspberry Pi 3 la carte microSD (sur laquelle l'image-disque a été copiée) et brancher l'alimentation ainsi qu'un câble ethernet pour la connexion au réseau. La diode rouge s'allume, puis, après quelques secondes, la diode verte s'allume de façon intermittente.

Il n'y a pas d'autre manipulation à effectuer : dès la fin de son démarrage, la MoodleBox est prête et fonctionnelle.

Si possible, il est recommandé de brancher la MoodleBox au réseau câblé lors de chaque démarrage. Ainsi, les tâches de maintenance nécessitant une connexion à Internet (par exemple la synchronisation de l'horloge interne) se feront de manière complète.

### Arrêter la MoodleBox

Afin de limiter au maximum les risques de corruption de données sur la carte microSD, pour éteindre la MoodleBox, il n'est pas recommandé de débrancher l'alimentation sans précaution. Il est préférable de commander manuellement son arrêt au préalable.

Pour ce faire, après s'être connecté comme administrateur dans le Moodle de la MoodleBox, on visite [Administration du site > Serveur > MoodleBox][1] dans l'interface d'administration.

{{< figure src="/img/media/restart-shutdown-fr.png" alt="Éteindre et redémarrer" width="722" height="111" link="/img/media/restart-shutdown-fr.png" >}}

Dans la section __Redémarrage et arrêt__, l'interface présente deux boutons, permettant de redémarrer et d'arrêter la MoodleBox. Après avoir cliqué sur le bouton __Arrêter la MoodleBox__, patienter quelques secondes et vérifier que la diode verte ne clignote plus. L'alimentation peut alors être débranchée sans risque.

### Redémarrer la MoodleBox

Après s'être connecté comme administrateur dans le Moodle de la MoodleBox, visiter [Administration du site > Serveur > MoodleBox][1] dans le bloc d'administration.

Cliquer sur le bouton __Redémarrer la MoodleBox__ et patienter quelques secondes, après quoi vous pourrez vous reconnecter à la Moodlebox.

 [1]: http://moodlebox.home/admin/tool/moodlebox/index.php
