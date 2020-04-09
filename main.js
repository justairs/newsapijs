const axios = require('axios');
const ApiKey = "6764c012e0d24111a71f9c0053acbfba";
const Argument = "top-headlines?";
const country = "pt";
 axios.get(`https://newsapi.org/v2/${Argument}country=${country}&apiKey=${ApiKey}`).then(resp => {
    let obj = resp.data.articles;
    console.log(obj);
        
        
});


 