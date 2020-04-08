const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('6764c012e0d24111a71f9c0053acbfba');

newsapi.v2.sources({
  language: 'pt'
  
}).then(response => {
  console.log(response);
  
});