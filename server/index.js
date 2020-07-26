const app = require('./app.js');
const port = process.env.PORT || 3003;

app.listen(port, () => console.log(`listening at http://localhost:${port}`));
