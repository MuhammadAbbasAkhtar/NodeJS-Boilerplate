require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const helper = require('./helpers/common')

const PORT = parseInt(process.env.PORT)
//=== 1 - CREATE APP
const app = express();

//=== 2 - CONFIGURE ROUTES
require('./routes/index')(app);

//=== 3 - START SERVER
app.listen(PORT, () => {
    helper.prettyLog(`Server running on http://localhost:${PORT}/`)
})