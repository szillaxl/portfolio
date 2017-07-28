
const https = require ('https');
       
       https.get('https://api.darksky.net/forecast/6a692775a8c1bd914acf348ed09c6c1b/43.700,-79.5667', (response) =>  {
       var body = '';
       response.on ('data', (chunk) =>{
       body +=chunk; 
       })
response.on ('end',()=>{
var obj = JSON.parse(body);

    console.log('Current weather in ' +obj.timezone);
    console.log('- temperature ' +obj.currently.temperature +' degrees celcius');
    console.log('- summary ' +obj.currently.summary);
   
})
            });
