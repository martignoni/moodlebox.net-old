---
title: "Comment copier l'image-disque sur une carte SD"
author: Nicolas Martignoni
type: kb
date: 2017-04-17T19:20:59+00:00
slug: copier-limage-disque-sur-une-carte-sd
weight: 4
categories:
  - Premiers pas

---
Commencez par [télécharger Etcher][2], puis suivez les instructions dans Etcher pour copier sur votre carte microSD le fichier __{{< ghrelease user="martignoni" repo="moodlebox" data="file_name" >}}__ que [vous avez téléchargé][1].

{{< figure link="/img/media/etcher-copy.png" caption="Copie avec Etcher" caption-position="bottom" caption-effect="appear" width="800px" >}}

### Pour les geeks

Si vous préférez utiliser la ligne de commande pour copier l'image-disque sur votre carte, décompressez le fichier __{{< ghrelease user="martignoni" repo="moodlebox" data="file_name" >}}__ que [vous avez téléchargé][1] et suivez les [instructions][3] pour copier l'image-disque __moodlebox-{{< ghrelease user="martignoni" repo="moodlebox" data="version" >}}.img__ sur la carte microSD.

  * [Instructions pour Mac OS][4]
  * [Instructions pour Windows][5]
  * [Instructions pour Linux][6]

 [1]: {{< relref "download-the-disk-image.fr.md" >}}
 [2]: https://etcher.io/
 [3]: https://www.raspberrypi.org/documentation/installation/installing-images/README.md
 [4]: https://www.raspberrypi.org/documentation/installation/installing-images/mac.md
 [5]: https://www.raspberrypi.org/documentation/installation/installing-images/windows.md
 [6]: https://www.raspberrypi.org/documentation/installation/installing-images/linux.md
