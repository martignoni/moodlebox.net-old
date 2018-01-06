---
title: How to start-up, shutdown and restart the MoodleBox
author: Nicolas Martignoni
type: kb
date: 2017-04-20T19:03:11+00:00
slug: startup-shutdown-restart
categories:
  - Maintenance
  - Usage

---
### Startup

Insert your microSD card into the Raspberry Pi 3 slot, power it up and connect it to the network via an Ethernet cable. The red LED lights up, and after a few seconds the green LED lights up intermittently.

There is no other manipulation to do: after the boot, your MoodleBox ready and totally functional.

If possible, it is recommended to connect the MoodleBox via Ethernet to the network at each startup. Thus, the maintenance tasks requiring an Internet connection (for example the synchronization of the internal clock) will be successfully done.

### Shutdown

In order to minimize the risk of data corruption on the microSD card, it is not recommended to unplug the power supply without care to shutdown the MoodleBox. It is preferable to manually control its shutdown beforehand.

Log in the Moodle instance of the MoodleBox and visit [Site administration > Server > MoodleBox][1] in the administration interface.

<img class="alignnone size-full wp-image-440" src="https://moodlebox.net/en/wp-content/uploads/sites/3/2017/04/restart-shutdown-en.png" alt="" width="722" height="111" srcset="https://moodlebox.net/en/wp-content/uploads/sites/3/2017/04/restart-shutdown-en.png 722w, https://moodlebox.net/en/wp-content/uploads/sites/3/2017/04/restart-shutdown-en-300x46.png 300w" sizes="(max-width: 722px) 100vw, 722px" />

In the section __Restart and shutdown__, the interface displays two buttons allowing to restart and shutdown the MoodleBox. Click on the button __Shutdown MoodleBox__, wait a few seconds and check that the green LED doesn't lights up any more. You may now safely unplug the power supply.

### Restart

Log in the Moodle instance of the MoodleBox and visit [Site administration > Server > MoodleBox][1] in the administration interface.

Click on the button __Restart MoodleBox__. Wait a few seconds and the MoodleBox will be available again.

 [1]: http://moodlebox.home/admin/tool/moodlebox/index.php
