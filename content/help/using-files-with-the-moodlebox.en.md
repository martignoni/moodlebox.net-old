---
title: Using files with the MoodleBox
author: Nicolas Martignoni
type: kb
date: 2017-04-20T19:29:08+00:00
slug: using-files-with-the-moodlebox
categories:
  - Usage

---
### <span id="Files_on_a_USB_stick">Files on a USB stick</span>

When a USB stick is inserted into one of the MoodleBox USB ports, all the files on the stick are automatically available to administrators and teachers in the file picker of Moodle, via a repository called **Clef USB**.

<img class="alignnone size-full wp-image-474" src="https://moodlebox.net/fr/wp-content/uploads/sites/4/2017/04/ClefUSB.png" alt="" width="907" height="586" />

If several USB sticks are inserted into the MoodleBox, only the files of the first inserted one are available.

### <span id="Files_via_SFTP">Files via SFTP</span>

Files uploaded to the MoodleBox via SFTP, in the folder called **files**, are also available to administrators and teachers in the file picker of Moodle, via a repository called **Fichiers SFTP**.

<img class="alignnone size-full wp-image-476" src="https://moodlebox.net/fr/wp-content/uploads/sites/4/2017/04/FichiersSFTP.png" alt="" width="908" height="587" />

To upload the files, use a software such as  <a href="https://filezilla-project.org/" target="_blank">FileZilla</a>, <a href="https://cyberduck.io/" target="_blank">Cyberduck</a> ou <a href="http://winscp.net/" target="_blank">WinSCP</a> and use the following credentials:

  * username: **moodlebox**
  * password: **Moodlebox4$**

**Warning!** Pay attention that you can&#8217;t login via FTP, but only via SFTP (Secure FTP, port 22).