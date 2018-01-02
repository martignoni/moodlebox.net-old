#!/usr/bin/env bash

USER=nicolas
HOST=v22017074803151722.ultrasrv.de
DIR=/var/www/moodlebox.net/html/   # might sometimes be empty!

hugo --cleanDestinationDir && rsync -avz --delete --exclude '.*' public/ ${USER}@${HOST}:${DIR}

exit 0
