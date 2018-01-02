---
title: Where can I download the disk image?
author: Nicolas Martignoni
type: kb
date: 2017-04-20T16:32:11+00:00
slug: download-the-disk-image
categories:
  - First steps
aliases:
  - en/dl

---
### MoodleBox Disk Image

{{< ghrelease url="https://api.github.com/repos/martignoni/moodlebox/releases/latest" >}}

After having downloaded the disk image, follow the instructions to [copy it to the microSD card][1] and [set up your MoodleBox][2] for the first use.

If you wish, you can [support the development of MoodleBox][3] by making an optional donation.

The [MoodleBox disk image][4]{.piwik_download} is built on <a href="https://www.raspberrypi.org/downloads/raspbian/" target="_blank" rel="noopener noreferrer">Raspbian Stretch Lite for Raspberry Pi</a> distribution.

### In case of trouble

Some users have experienced troubles when trying to download the image. In this case, you may try to use your command line interface to download the disk-image, for example with this command

`wget -c https://github.com/martignoni/moodlebox/releases/download/v2.1.0/moodlebox-2.1.0.img.gz`

or this one

`curl -C - https://github.com/martignoni/moodlebox/releases/download/v2.1.0/moodlebox-2.1.0.img.gz`

 [1]: https://moodlebox.net/en/help/copy-the-disk-image-on-a-sd-card/
 [2]: https://moodlebox.net/en/help/startup-shutdown-restart/
 [3]: https://moodlebox.net/en/give/
 [4]: https://github.com/martignoni/moodlebox/releases/download/v2.1.0/moodlebox-2.1.0.img.gz
