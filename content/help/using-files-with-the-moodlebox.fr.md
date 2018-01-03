---
title: Comment mettre à disposition des fichiers ?
author:
  - Nicolas Martignoni
type: kb
date: 2017-04-17T19:57:11+00:00
slug: utilisation-de-fichiers-avec-la-moodlebox
categories:
  - Utilisation

---
### Fichiers sur une clef USB

Quand une clef USB est insérée dans l'un des ports USB de la MoodleBox, tous les fichiers sur la clef sont automatiquement disponibles pour les administrateurs et les enseignants définis dans Moodle, au moyen du sélecteur de fichiers, via un dépôt dont le nom est __Clef USB__.

<img class="alignnone size-full wp-image-474" src="https://moodlebox.net/fr/wp-content/uploads/sites/4/2017/04/ClefUSB.png" alt="" width="907" height="586" srcset="https://moodlebox.net/fr/wp-content/uploads/sites/4/2017/04/ClefUSB.png 907w, https://moodlebox.net/fr/wp-content/uploads/sites/4/2017/04/ClefUSB-300x194.png 300w, https://moodlebox.net/fr/wp-content/uploads/sites/4/2017/04/ClefUSB-768x496.png 768w" sizes="(max-width: 907px) 100vw, 907px" />

Si plusieurs clefs USB sont insérées dans la MoodleBox, seuls les fichiers de la première à avoir été insérée sont disponibles.

### Fichiers via SFTP

Les fichiers déposés dans la MoodleBox par SFTP, dans le dossier dénommé __files__, sont aussi disponibles les administrateurs et les enseignants définis dans Moodle, au moyen du sélecteur de fichiers, via un dépôt dont le nom est __Fichiers SFTP__.

<img class="alignnone size-full wp-image-476" src="https://moodlebox.net/fr/wp-content/uploads/sites/4/2017/04/FichiersSFTP.png" alt="" width="908" height="587" />

Pour déposer des fichiers, utiliser un logiciel comme [FileZilla][1], [Cyberduck][2] ou [WinSCP][3], avec les informations suivantes d'authentification :

  * nom d'utilisateur : __moodlebox__
  * mot de passe : __Moodlebox4$__

__Attention !__ Il ne s'agit pas de FTP, mais bien de SFTP (Secure FTP, port 22).

 [1]: https://filezilla-project.org/
 [2]: https://cyberduck.io/
 [3]: http://winscp.net/
