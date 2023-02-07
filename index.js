const express = require('express');
const routes = require("./routes");
const parse = require("./bodyParser");
const app = express();
const PORT = 3000;

routes(app);

parse(app);

app.listen(PORT, () => {
    console.log(`The server is at http://localhost:${PORT}`)
})


