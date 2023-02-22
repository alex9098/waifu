const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 3000;
const cors=require('cors');



app.use(cors({
  origin:'*',
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200,
  methods:["GET"]

}))
app.use(express.static('public'))

app.get('/pics' , async (req,res)=>{
   
    const data = await fetch('https://api.waifu.pics/sfw/waifu');
    const response = await data.json();
    res.json(response)
    console.log(response);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});