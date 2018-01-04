#!/usr/bin/env bash

USER=nicolas
HOST=v22017074803151722.ultrasrv.de
DIR=/var/www/moodlebox.net/html/   # might sometimes be empty!

BASEURL=https://new.moodlebox.net/

hugo -b ${BASEURL} --cleanDestinationDir && rsync -avz --delete --exclude '.*' --iconv=utf-8-mac,utf-8 public/ ${USER}@${HOST}:${DIR}

exit 0
