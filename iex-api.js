const https = require('https')

var token = 'sk_9d82d1cf33c04c72b14c3d1adc113441'
var url = 'https://cloud.iexapis.com/stable/stock/aapl/book?token='

https.get(url+token, (response) => {
    let data = '';

    response.on('data', (chunk) =>{
        data += chunk;
    })


response.on('end', () => {
    data = JSON.parse(data)
    var keys = []
    for(var key in data){ keys.push(key) }
    for(key in keys){
        console.log(keys[key])
    }
    console.log(data[keys[0]])
});

})
.on("error", (err) => {
    console.log("Error: " + err.message);
});