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

<ul class="downloads">
  <li>
    <div class="image-icon">
      <a class="piwik_download" href="https://github.com/martignoni/moodlebox/releases/download/v2.1.0/moodlebox-2.1.0.img.gz"><img class="alignnone wp-image-329 size-full" src="https://moodlebox.net/en/wp-content/uploads/sites/3/2017/01/MoodleBox-SD-150x150-orange.png" width="150" height="150" /></a>
    </div>

    <div class="image-info">
      <div class="image-description">
        MoodleBox disk image for microSD card
      </div>

      <div class="image-details">
        Version: <strong>2.1</strong>
      </div>

      <div class="image-details">
        Moodle version : <strong>3.4+ (Build: 20171123)</strong>
      </div>

      <div class="image-details">
        Size: <strong>585 MB</strong>
      </div>

      <div class="image-details">
        Date: <strong>2 January 2018</strong>
      </div>

      <div class="image-details">
        Release notes: <strong><a href="https://github.com/martignoni/moodlebox/blob/master/CHANGELOG.md" target="_blank" rel="noopener noreferrer">on Github</a></strong>
      </div>

      <div class="image-download-links">
        <a class="btn dl-zip piwik_download" href="https://github.com/martignoni/moodlebox/releases/download/v2.1.0/moodlebox-2.1.0.img.gz">Download</a>
      </div>
    </div>
  </li>
</ul>

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
