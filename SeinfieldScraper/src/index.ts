import puppeteer from 'puppeteer';

(async () => {
    console.log("ee");
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    console.log("eeqqq");
    await page.goto('https://www.seinfeldscripts.com/alpha.html');
    var links = await page.evaluate(_ => {
        var elems = Array.from(document.querySelectorAll("#content table table table td a"));


        return elems.map(e => (e as HTMLLinkElement).href);
    });
    
        
    for (var link of links) {
        await page.goto(link);
        
        console.log(link);
    }
    console.log("eqwecxzs");

    await browser.close();
})();
