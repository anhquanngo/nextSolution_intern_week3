// var request = require('request');
// var cheerio = require('cheerio');

// request('http://engineering.vtvcab.vn/crawl-du-lieu-voi-thu-vien-cheerio-va-nodejs/', function(err, resp, html) {
//         if (!err){
//           const $ = cheerio.load(html);
//           // console.log(html);
//           console.log($("a"));
//       }
// });

// const cheerio = require('cheerio')
// const axios = require('axios')

// axios.get('https://buttercms.com/docs/api/').then((response) => {
//   const $ = cheerio.load(response.data)

//   const urlElems = $('pre.highlight.shell')

//   for (let i = 0; i < urlElems.length; i++) {
//     const urlSpan = $(urlElems[i]).find('span.s1')[0]

//     if (urlSpan) {
//       const urlText = $(urlSpan).text()

//       console.log(urlText)
//     }
//   }
// })

// const axios = require('axios')

// // Use the `get` method of axios with the URL of the ButterCMS documentation page as an argument
// axios.get('http://engineering.vtvcab.vn/crawl-du-lieu-voi-thu-vien-cheerio-va-nodejs/').then((response) => {
//         // `response` is an HTTP response object, whose body is contained in it's `data` attribute
        
//         // This will print the HTML source code to the console
//         console.log(response.data)
// })

const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('https://12bit.vn')

  const results = await page.evaluate(() => {
    let items = document.querySelectorAll('.article__title a')
    let links = []
    items.forEach((item) => {
      links.push({
        title: item.innerText,
        url: item.getAttribute('href'),
      })
    })
    return links;
  });

  console.log(results)

  await browser.close()
})()