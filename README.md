## Compatible platforms

- Shrtfly: [https://shrtfly.com/](https://shrtfly.com/ref/marcuthdev)
- Exe.io: [https://exe.io/](https://exe.io/ref/marcuth)
- ClicksFly: [https://clicksfly.com/](https://shrtfly.com/ref/marcuthdev) <!-- (https://clicksfly.com/ref/112583547307263051109) -->
- EncurtaNet: [https://encurtanet.com/](https://shrtfly.com/ref/marcuthdev) <!-- (https://encurta.net/ref/112583547307263051109) -->
- ShrinkMe: [https://shrinkme.io/](https://shrtfly.com/ref/marcuthdev) <!-- (https://shrinkme.io/ref/112583547307263051109) -->
- ShrinkEarn: [https://shrinkearn.com/](https://shrinkearn.com/ref/marcuth)
- ClkSh: [https://clk.sh/](https://clk.sh/ref/marcuth)
- ShrtBr: [https://shrtbr.com/](https://shrtfly.com/ref/marcuthdev)  <!-- (https://shrtbr.com/ref/112583547307263051109) -->
- LinkMonetizado: [https://linkmonetizado.com/](https://shrtfly.com/ref/marcuthdev) <!-- (https://linkmonetizado.com/ref/112583547307263051109) -->
- LinkAds: [https://linkads.net/](https://shrtfly.com/ref/marcuthdev) <!-- (https://linkads.net/ref/112583547307263051109) -->

## Install

```
npm i adlinkfly
```

## Simple use example

```js
import { AdLinkFly } from "adlinkfly"

(async () => {
    const shortener = new AdLinkFly({
        apiToken: "YOUR_API_TOKEN_HERE",
        baseUrl: "PLATFORM_BASE_URL_HERE" // Some may require a "/" at the end, for example: https://encurtanet.com/api/
    })

    const urlInfo = await shortener.shorten({
        url: "https://marcuth.github.io/", // Your url
        alias: "url-alias", // Alias of the url
        isTextFormat: false, // If response is text format
        adsType: 0 // Ads type, check the types in the documentation of the chosen platform
    })

    const shortenedUrl = urlInfo.shortedUrl

    console.log(shortenedUrl)
})()

```