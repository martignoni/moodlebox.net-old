---
title: How to start-up, shutdown and restart the MoodleBox
author: Nicolas Martignoni
type: kb
date: 2017-04-20T19:03:11+00:00
slug: startup-shutdown-restart
weight: 1
categories:
  - Maintenance
  - Usage

---
#### Startup

Insert your microSD card into the Raspberry Pi 3 slot, power it up and connect it to the network via an Ethernet cable. The red LED lights up, and after a few seconds the green LED lights up intermittently.

There is no other manipulation to do: after the boot, your MoodleBox ready and totally functional.

If possible, it is recommended to connect the MoodleBox via Ethernet to the network at each startup. Thus, the maintenance tasks requiring an Internet connection (for example the synchronization of the internal clock) will be successfully done.

#### Shutdown

{{% notice warning %}}
In order to minimize the risk of data corruption on the microSD card, it is not recommended to unplug the power supply without care to shutdown the MoodleBox. It is preferable to manually control its shutdown beforehand.
{{% /notice %}}

The graphical interface of the MoodleBox allows you to safely stop and restart the MoodleBox.

Log in the Moodle instance of the MoodleBox and visit [Site administration > Server > MoodleBox][1] in the administration interface.

{{< figure link="/img/media/restart-shutdown-en.png" caption="Shutdown and restart" caption-position="bottom" caption-effect="appear" width="722px" >}}

In the section __Restart and shutdown__, the interface displays two buttons allowing to restart and shutdown the MoodleBox. Click on the button __Shutdown MoodleBox__, wait a few seconds and check that the green LED doesn't lights up any more. You may now safely unplug the power supply.

#### Restart

Log in the Moodle instance of the MoodleBox and visit [Site administration > Server > MoodleBox][1] in the administration interface.

Click on the button __Restart MoodleBox__. Wait a few seconds and the MoodleBox will be available again.

### Install a hardware startup and shutdown button

It is possible to install a hardware button to shutdown and start the MoodleBox. The [MoodleBox Disk Image][2] allows the use of such a button without any configuration changes.

The installation of a hardware button is very simple: you just have to buy a button, for example [this capacitive button][3], and connect it to the pins of the MoodleBox GPIO port using [jumpers][4] (see the image below, thanks to Laurent Fleron), then restart the MoodleBox.

{{< figure link="/img/media/hardware-button.jpg" thumb="-small" caption="Hardware button" caption-position="bottom" caption-effect="appear" width="400px" >}}

 [1]: http://moodlebox.home/admin/tool/moodlebox/index.php
 [2]: {{< relref "download-the-disk-image.en.md" >}}
 [3]: https://www.aliexpress.com/item/5pcs-TTP223-TTP223B-Jog-digital-touch-sensor-capacitive-touch-touch-switch-modules-Accessories/32694092023.html
 [4]: https://www.aliexpress.com/item/40pcs-lot-10cm-2-54mm-1pin-feMale-to-feMale-jumper-wire-Dupont-cable/32800215149.html
