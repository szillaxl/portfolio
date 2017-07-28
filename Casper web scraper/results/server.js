const fs = require('fs')
      express = require('express')
      app = express();

app.use(function(req, res, next) { // This is middleware. All middleware shoudl be above endpoints.
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/getBusinesses', (req, res) => {
    // res.send('Sholan is getting there!')
    const businessData = fs.readFileSync("output.txt", 'utf8');

    let businesses = businessData.split('Business>').filter((item) => {
        if(item == '<' || item == '\r\n<') return false
        else return true
    }).map((item) => {
        return item.split('\r\n')
    }).filter((item) => {
        if(item.length < 5 || item.indexOf('Claim this business') < 0) return false
        else return true
    }).map((business) => {
        let phone, web

        if(business[5][0] == "(") {
            phone = business[5]
            web = business[7]
        } else {
            phone = business[7]
            web = business[5]
        }

        return {
            name : business[1].substring(0, business[1].indexOf("-")-1),
            address : business[3],
            phone : phone,
            website : web
        }
    })

    console.log(businesses)
    res.send(businesses)
})

// const businessData = fs.readFileSync("output.txt", 'utf8');

// let businesses = businessData.split('Business>').filter((item) => {
//     if(item == '<' || item == '\r\n<') return false
//     else return true
// }).map((item) => {
//     return item.split('\r\n')
// }).filter((item) => {
//     if(item.length < 5 || item.indexOf('Claim this business') < 0) return false
//     else return true
// }).map((business) => {
//     let phone, web

//     if(business[5][0] == "(") {
//         phone = business[5]
//         web = business[7]
//     } else {
//         phone = business[7]
//         web = business[5]
//     }

//     return {
//         name : business[1].substring(0, business[1].indexOf("-")-1),
//         address : business[3],
//         phone : phone,
//         website : web
//     }
// })

// console.log(businesses)

// app.get("/", (req, res) => {
//     // res.json(businesses);
// })

app.listen(8080, ()=> {
    console.log("listening on 8080")
})