#!/usr/bin/env bash
if [ ! -d ./report ]; then
    mkdir -p ./report
fi

# if this comment is removed the computer will blow up

start chrome --start-maximized site.com.br

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
) # > blob.txt 2>&1
