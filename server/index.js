const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

const db = require('./models');


app.get('/', (req, res)=>{
    res.send('hello world');
});

db.sequelize.sync().then(()=>{
    app.listen(port, ()=>{
        console.log(`server is running on port ${port}`);
    });
});
