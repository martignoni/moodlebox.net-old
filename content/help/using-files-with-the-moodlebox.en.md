---
title: How to provide files on the Moodlebox
author: Nicolas Martignoni
type: kb
date: 2017-04-20T19:29:08+00:00
slug: using-files-with-the-moodlebox
weight: 7
categories:
  - Usage

---
### Files on a USB stick

When a USB stick is inserted into one of the MoodleBox USB ports, all the files on the stick are automatically available to administrators and teachers in the file picker of Moodle, via a repository called __USB Drive__.

{{< figure src="/img/media/usb-drive.png" alt="USB Drive repository" width="907" height="586" link="/img/media/usb-drive.png" >}}

If several USB sticks are inserted into the MoodleBox, only the files of the first inserted one are available.

### Files via SFTP

Files uploaded to the MoodleBox via SFTP, in the folder called __files__, are also available to administrators and teachers in the file picker of Moodle, via a repository called __SFTP Documents__.

{{< figure src="/img/media/sftp-documents.png" alt="SFTP Documents repository" width="908" height="587" link="/img/media/sftp-documents.png" >}}

To upload the files, use a software such as [FileZilla][1], [Cyberduck][2] or [WinSCP][3] and use the following credentials:

  * username: __moodlebox__
  * password: __Moodlebox4$__

__Warning!__ Pay attention that you can't login via FTP, but only via SFTP (Secure FTP, port 22).

 [1]: https://filezilla-project.org/
 [2]: https://cyberduck.io/
 [3]: http://winscp.net/
