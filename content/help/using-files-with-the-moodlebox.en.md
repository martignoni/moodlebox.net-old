---
title: Using files with the MoodleBox
author: Nicolas Martignoni
type: kb
date: 2017-04-20T19:29:08+00:00
slug: using-files-with-the-moodlebox
categories:
  - Usage

---
### Files on a USB stick

When a USB stick is inserted into one of the MoodleBox USB ports, all the files on the stick are automatically available to administrators and teachers in the file picker of Moodle, via a repository called __Clef USB__.

<img class="alignnone size-full wp-image-474" src="https://moodlebox.net/fr/wp-content/uploads/sites/4/2017/04/ClefUSB.png" alt="" width="907" height="586" />

If several USB sticks are inserted into the MoodleBox, only the files of the first inserted one are available.

### Files via SFTP

Files uploaded to the MoodleBox via SFTP, in the folder called __files__, are also available to administrators and teachers in the file picker of Moodle, via a repository called __Fichiers SFTP__.

<img class="alignnone size-full wp-image-476" src="https://moodlebox.net/fr/wp-content/uploads/sites/4/2017/04/FichiersSFTP.png" alt="" width="908" height="587" />

To upload the files, use a software such as [FileZilla][1], [Cyberduck][2] or [WinSCP][3] and use the following credentials:

  * username: __moodlebox__
  * password: __Moodlebox4$__

__Warning!__ Pay attention that you can't login via FTP, but only via SFTP (Secure FTP, port 22).

 [1]: https://filezilla-project.org/
 [2]: https://cyberduck.io/
 [3]: http://winscp.net/
