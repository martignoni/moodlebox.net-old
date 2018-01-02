---
title: What’s the default Moodle configuration?
author: Nicolas Martignoni
type: kb
date: 2017-04-20T19:41:38+00:00
slug: moodle-configuration
categories:
  - Maintenance

---
The Moodle environment on the MoodleBox doesn&#8217;t have any special configuration. Only the following settings were changed to facilitate its use or to enhance its performance.

Mobile App
:   The mobile service for the official <a href="https://download.moodle.org/mobile/" target="_blank" rel="noopener">Moodle Mobile app</a> is enabled. The Moodle Mobile app can be download at <a href="https://download.moodle.org/mobile/" target="_blank" rel="noopener">https://download.moodle.org/mobile/</a>.

File upload size
:   The maximal file upload size is set to **50MB** (via the PHP settings _post\_max\_size_ and _upload\_max\_filesize_).

Cron
:   The _cron_ is configured to be run **every 3 minutes**. Some scheduled tasks need an Internet access. It&#8217;s recommended to connect the MoodleBox to the Internet with an Ethernet cable.

Multi-language filter
:   The Multi-Language Content filter is enabled.

Cache
:   The cache of Moodle is configured to **optimize the reactivity** of the MoodleBox.

MoodleBox Plugin
:   The <a href="https://moodle.org/plugins/tool_moodlebox" target="_blank" rel="noopener">MoodleBox Administration plugin</a> for Moodle is installed. This plugin enables a Moodle administrator to restart and shutdown, to set the date, to change some other settings and to monitor the hardware of the MoodleBox using a GUI.

MathJax library
:   As of version 2.0 and later, the MathJax library is installed locally, enabling the MathJax filter to work correctly even when the MoodleBox is not connected to Internet.