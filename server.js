const bp=require('body-parser');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

const baseUrl = '/calculator'

app.use(express.json());
app.use(bp.urlencoded({extended:true}));

const baseRouter = express.Router();

baseRouter.get('/greeting', (req, res) => {
    return res.send('hello world!');
});

baseRouter.post('/add', (req, res) => {
    const g=(parseInt(req.body.first)+parseInt(req.body.second));
    res.json({ "result": g });
});


baseRouter.post('/subtract', (req, res) => {
    const f=(parseInt(req.body.first)-parseInt(req.body.second));
    res.json({ "result": f });
});



app.use(baseUrl, baseRouter);
app.listen(PORT, () => {
    console.log("Server running at PORT", PORT);
});