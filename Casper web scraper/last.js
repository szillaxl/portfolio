var casper = require('casper').create();

var x = require('casper').selectXPath;

casper.userAgent('Mozilla/7.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36')

casper.start('https://www.google.ca/maps/search/bakeries+in+brampton');
//casper.start('https://www.google.ca/search?q=bakeries+in+brampton&rflfq=1&rlha=0&rllag=43696255,-79752098,2735&tbm=lcl&tbs=lrf:!2m1!1e2!2m1!1e3!3sEAE,lf:1,lf_ui:9');

casper.viewport(1024, 768, function() {
    // new view port is effective
});

casper.on('remote.message', function(msg) {
    this.echo(msg);
})

casper.then(function(){
    this.evaluate(function(){
        document.getElementsByClassName('section-result')[0].click();
    });
    this.wait(3000, function(){
        this.echo("<Business>")
        this.capture('0.png');
        this.echo(this.getTitle());
        this.evaluate(function(){
            var info = document.getElementsByClassName('section-info-line'); 
            for(var j = 0; j < info.length; j++) {
                console.log(info[j].innerText)
            }
        });
        this.echo("</Business>")
        this.clearCache();
    });
});

casper.thenOpen('https://www.google.ca/maps/search/bakeries+in+brampton');

casper.then(function(){
    this.evaluate(function(){
        document.getElementsByClassName('section-result')[1].click();
    });
    this.wait(3000, function(){
        this.echo("<Business>")
        this.echo(this.getTitle());
        this.evaluate(function(){
            var info = document.getElementsByClassName('section-info-line'); 
            for(var j = 0; j < info.length; j++) {
                console.log(info[j].innerText)
            }
        });
        this.echo("</Business>")
        this.clearCache();
    });
});

casper.run();