console.log('server.js')
const express = require('express');
const cors = require('cors')
const app = express();
const PORT = 8000;
const db_name = "pets";

app.use(cors())
app.use(express.json())

require('./server/config/mongoose.config')(db_name)
require('./server/routes/pet.routes')(app);

app.listen(PORT, () => {
    console.log(`Server fired up at port: http://localhost:${PORT}`)
})
