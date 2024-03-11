# rfid-webusb

Simple rfid reader class to interact with a FEIG MR102 HF rfid reader device via web usb.

The original code comes from https://github.com/joostkamphuisnl/feig-driver/blob/main/lib/reader.js but the use of libxml via nodejs is replaced by using the experimantal web usb api:

https://developer.mozilla.org/en-US/docs/Web/API/USB

Draft: https://wicg.github.io/webusb/

Works only on certain browsers: https://developer.mozilla.org/en-US/docs/Web/API/USB#browser_compatibility

# run

The index.html file it needs to be delivered by a web server f.e. via `npx http-server`. Then click on the url diplayed on the output of the command.

A double click on the file will open it via file:/// protocol which can't load external ressources like ISO28560_3.js


# other thoughts

## sockets api
- ip readers: https://wicg.github.io/direct-sockets/
- https://github.com/GoogleChromeLabs/telnet-client?tab=readme-ov-file
- https://github.com/nornagon/ircv?tab=readme-ov-file 12Jahre alt...

