var request = require("request"),
  cheerio = require("cheerio"),
  url = "https://www.reddit.com/",
  url2 = "https://www.reddit.com/?count=25&after=t3_66abvz",
  url3 = "https://www.reddit.com/?count=50&after=t3_66a2sn";

function getit(url, page) {
  request(url, function (error, response, body) {
    if (!error) {
      console.log('There are no errors.');
      var $ = cheerio.load(body);
      $('[data-event-action="title"]').each(function (i, title) {
       console.log($(this).text());
      });
    } else {
      console.log("We’ve encountered an error: " + error);
    }
  });
}

getit(url, "page1");
getit(url2, "page2");
getit(url3, "page3");