const express = require('express');
const router = express();

router.get('/',(req,res)=>{
    res.render('index',{
        title:'Riibig5 Inc',
        message:'Node Express MySQL App',
        statement:'Thanks!'
    });
});

module.exports=router;