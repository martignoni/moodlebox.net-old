---
title: Where to download the disk image
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
    <a class="piwik_download" href="{{< ghrelease user="martignoni" repo="moodlebox" data="download_link" >}}"><img class="alignnone wp-image-308 size-full" src="https://moodlebox.net/fr/wp-content/uploads/sites/4/2016/09/MoodleBox-SD-150x150-orange-1.png" width="150" height="150"></a>
  </div>
  <div class="image-info">
    <div class="image-description">
      MoodleBox disk image for microSD card
    </div>
    <div class="image-details">
      Version: <strong>{{< ghrelease user="martignoni" repo="moodlebox" data="version" >}}</strong>
    </div>
    <div class="image-details">
      Moodle version: <strong>3.4+ (Build: 20171123)</strong>
    </div>
    <div class="image-details">
      Size: <strong>{{< ghrelease user="martignoni" repo="moodlebox" data="file_size" >}} MB</strong>
    </div>
    <div class="image-details">
      Date: <strong>{{< ghrelease user="martignoni" repo="moodlebox" data="file_date" >}}</strong>
    </div>
    <div class="image-details">
      Release notes: <strong><a href="https://github.com/martignoni/moodlebox/blob/master/CHANGELOG.md" target="_blank">sur Github</a></strong>
    </div>
    <div class="image-download-links">
      <a class="btn dl-zip piwik_download" href="{{< ghrelease user="martignoni" repo="moodlebox" data="download_link" >}}">Download</a>
    </div>
 </div>
 </li>
</ul>

After having downloaded the disk image, follow the instructions to [copy it to the microSD card][1] and [set up your MoodleBox][2] for the first use. Read the [installation instructions][5] for more information.

If you wish, you can [support the development of MoodleBox][3] by making an optional donation.

The MoodleBox disk image is built on <a href="https://www.raspberrypi.org/downloads/raspbian/" target="_blank" rel="noopener noreferrer">Raspbian Stretch Lite for Raspberry Pi</a> distribution.

### In case of trouble

If you experience any trouble when downloading the disk image, use your command line interface, for example with this command

```bash
wget -c {{< ghrelease user="martignoni" repo="moodlebox" data="download_link" >}}
```

or this one

```bash
curl -C - {{< ghrelease user="martignoni" repo="moodlebox" data="download_link" >}}
```

 [1]: {{< relref "copy-the-disk-image.en.md" >}}
 [2]: {{< relref "startup-shutdown-restart.en.md" >}}
 [3]: {{< relref "support-the-moodlebox-project.en.md" >}}
 [4]: {{< ghrelease user="martignoni" repo="moodlebox" data="download_link" >}}
 [5]: {{< relref "install-the-moodlebox.en.md" >}}
