---
title: How to update Moodle?
author: Nicolas Martignoni
type: kb
date: 2017-04-20T20:03:31+00:00
slug: moodle-version-update
categories:
  - Maintenance

---
In order to allow a simplified update of Moodle, its installation was done using Git. To update Moodle, perform the following operations, using the command line.

Log in the MoodleBox via SSH, with the usual password **Moodlebox4$**.

`ssh moodlebox@moodlebox.home`

### Update to a **minor version**

To update to the next **minor version** of Moodle (3.4.1, 3.4.2, etc.), type the following commands in the terminal:

`cd /var/www/html/`
  
`sudo -u www-data git pull`

Visit then in your browser the URL <http://moodlebox.home/admin>{._blanktarget} and follow the update instructions, like any Moodle installation (see the documentation here: <a class="_blanktarget" href="https://docs.moodle.org/en/Upgrading" target="_blank" rel="noopener noreferrer">https://docs.moodle.org/en/Upgrading</a>).

### Update to a major version

To update to the next **major version** of Moodle (3.5, 3.6, etc.), type the **additional** following commands:

`sudo -u www-data git config remote.origin.fetch "+refs/heads/*:refs/remotes/origin/*"`
  
`sudo -u www-data git fetch origin`
  
`sudo -u www-data git pull`
  
`sudo -u www-data git checkout MOODLE_35_STABLE`

Then visit the URL <http://moodlebox.home/admin>{._blanktarget} and follow the update instructions, just like above.