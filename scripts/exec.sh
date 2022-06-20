#!/usr/bin/env bash
if [ ! -d ./report ]; then
    mkdir -p ./report
fi

# if this comment is removed the computer will blow up

start chrome --remote-debugging-port=9222 --no-sandbox --disable-translate --disable-extensions --disable-background-networking --safebrowsing-disable-auto-update --disable-sync --metrics-recording-only --disable-default-apps --no-first-run --quiet --start-maximized site.com.br


read -p "Press enter to continue"
echo -e

(
    set -e
    function  _catch {
        npm run errou
        exit 0
}
    trap _catch ERR
    
    while IFS= read -r line
    do
        url_site=$line
        node src/app.js --url=$url_site
    done < 'src\urls.txt'
)
