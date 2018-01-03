---
title: "Comment accéder à l'interface en ligne de commande ?"
author:
  - Nicolas Martignoni
type: kb
date: 2017-04-17T19:12:14+00:00
slug: connexion-ssh-en-ligne-de-commande
permalink:
  - /help/connexion-ssh-en-ligne-de-commande/
categories:
  - Maintenance
  - Utilisation

---
En tant qu’utilisateur, il n'est en principe pas nécessaire de vous connecter en ligne de commande à la MoodleBox. Cependant, vous pouvez y accéder au besoin via SSH en utilisant l’adresse **moodlebox.home**, avec les informations d’authentification par défaut :

  * nom d’utilisateur : **moodlebox**
  * mot de passe : **Moodlebox4$**

### Avec PuTTY (sous Windows)

Ouvrir une nouvelle connexion, saisissez l'adresse **moodlebox.home** dans le champ adéquat (_host name)_. Cliquer sur _Open_ et saisissez le mot de passe **Moodlebox4$**.

<img class="alignnone size-full wp-image-444" src="https://moodlebox.net/fr/wp-content/uploads/sites/4/2017/04/PuTTY-moodlebox.png" alt="" width="516" height="498" />

### Dans une interface de terminal classique

Dans votre interface de terminal préférée, tapez

`ssh moodlebox@moodlebox.home`

et saisissez le mot de passe **Moodlebox4$**.
