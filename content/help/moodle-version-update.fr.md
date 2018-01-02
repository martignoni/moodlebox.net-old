---
title: Comment mettre à jour Moodle ?
author:
  - Nicolas Martignoni
type: kb
date: 2017-04-17T19:33:38+00:00
slug: mise-a-jour-de-la-version-de-moodle
permalink:
  - /help/mise-a-jour-de-la-version-de-moodle/
categories:
  - Maintenance

---
Afin de permettre une mise à jour simplifiée de Moodle, son installation a été faite au moyen de Git. Pour mettre à jour Moodle, on effectuera donc les opérations suivantes, en ligne de commande.

Connexion à la MoodleBox via SSH, avec le mot de passe habituel **Moodlebox4$**.

`ssh moodlebox@moodlebox.home`

### Mise à jour vers une version **mineure**

Pour une mise à jour à une **version mineure** de Moodle (3.4.1, 3.4.2, etc.), on tape les commandes suivantes dans le terminal :

`cd /var/www/html/`
  
`sudo -u www-data git pull`

On charge ensuite dans le navigateur l'URL <http://moodlebox.home/admin>{._blanktarget}, et on suit les instructions de mise à jour, comme avec un Moodle standard (voir la documentation ici : <a class="_blanktarget" href="https://docs.moodle.org/fr/Mise_%C3%A0_jour" target="_blank" rel="noopener noreferrer">https://docs.moodle.org/fr/Mise_à_jour</a>).

### Mise à jour vers une version **majeure**

Pour une mise à jour à une **version majeure** de Moodle (3.5, 3.6, etc.), on tape **en plus** les commandes suivantes :

`sudo -u www-data git config remote.origin.fetch "+refs/heads/*:refs/remotes/origin/*"`
  
`sudo -u www-data git fetch origin`
  
`sudo -u www-data git pull`
  
`sudo -u www-data git checkout MOODLE_35_STABLE`

On charge ensuite dans le navigateur l'URL <http://moodlebox.home/admin>{._blanktarget}, et continue comme ci-dessus.