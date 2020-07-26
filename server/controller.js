const axios = require('axios');
module.exports = {
  getAll: (req, res) => {
    var keyword = req.query.keyword;
    axios({
      method: 'GET',
      url:
        'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search',
      headers: {
        'content-type': 'application/octet-stream',
        'x-rapidapi-host':
          'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
        'x-rapidapi-key': 'ebfb20b84cmshb74a4bf64180b4fp1aec99jsn343af72d44fe',
        useQueryString: true,
      },
      params: {
        number: '10',
        offset: '0',
        query: keyword,
      },
    })
      .then((response) => {
        res.status(200).json(response.data);
      })
      .catch((error) => {
        res.status(404).send(error);
      });
  },
};
