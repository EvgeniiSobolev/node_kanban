const bodyParser = require("body-parser");

function parse(app) {
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())
}

module.exports = parse;