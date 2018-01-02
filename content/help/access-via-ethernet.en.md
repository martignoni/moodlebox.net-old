---
title: Is it possible to access the MoodleBox via Ethernet?
author: Nicolas Martignoni
type: kb
date: 2017-12-23T16:20:51+00:00
slug: is-it-possible-to-access-the-moodlebox-via-ethernet
categories:
  - Usage

---
The MoodleBox is not intended to serve client devices over Ethernet. However, it is possible to access it via Ethernet with some extra work.

To achieve this, you should assign to the MoodleBox the fully qualified domain name **moodlebox.home**. This involves having on your Ethernet network a DNS server (e.g. on your router) to assign this domain name to the IP address of your MoodleBox, which is given by the DHCP server of the router (usually something like 192.168.1.143).

This way, client devices can access easily the MoodleBox (without having to remember a numeric IP address), and the Moodle instance on the MoodleBox will answer correctly.

If what you need is only SSH access over the Ethernet to the MoodleBox, you may do it via its numeric IP address, without further configuration.