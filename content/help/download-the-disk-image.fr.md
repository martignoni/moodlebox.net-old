---
title: Où télécharger l’image-disque ?
author:
  - Nicolas Martignoni
type: kb
date: 2017-04-17T19:19:44+00:00
slug: telecharger-limage-disque
permalink:
  - /help/telecharger-limage-disque/
categories:
  - Premiers pas
aliases:
  - fr/dl

---
### Image disque MoodleBox

{{< ghrelease url="https://api.github.com/repos/martignoni/moodlebox/releases/latest" >}}

Après avoir téléchargé l’image-disque, suivez les [instructions pour la copier sur la carte microSD][1] et [configurez votre MoodleBox][2] pour la première utilisation.

Si vous le souhaitez, vous pouvez [soutenir le développement de la MoodleBox][3] en faisant un don, tout à fait facultatif.

L’[image-disque MoodleBox][4]{.piwik_download} est construite sur la base de la distribution <a href="https://www.raspberrypi.org/downloads/raspbian/" target="_blank" rel="noopener noreferrer">Raspbian Stretch Lite pour Raspberry Pi</a>.

### En cas de difficulté

Quelques utilisateurs ont annoncé des difficultés lors du téléchargement. Dans ce cas, on peut utiliser la ligne de commande pour télécharger l'image-disque, soit au moyen de cette commande

`wget -c https://github.com/martignoni/moodlebox/releases/download/v2.1.0/moodlebox-2.1.0.img.gz`

soit avec celle-ci :

`curl -C - https://github.com/martignoni/moodlebox/releases/download/v2.1.0/moodlebox-2.1.0.img.gz`

 [1]: https://moodlebox.net/fr/help/copier-limage-disque-sur-une-carte-sd/
 [2]: https://moodlebox.net/fr/help/demarrer-arreter-redemarrer/
 [3]: http://moodlebox.net/fr/give/
 [4]: https://github.com/martignoni/moodlebox/releases/download/v2.1.0/moodlebox-2.1.0.img.gz
