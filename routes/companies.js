
const companies = require("../controllers/companies");
const express = require('express');
const router = express();
  

router.post('/', companies.create);
router.get('/',companies.findAll);
router.get('/:id',companies.findOne);
router.put('/:id',companies.update);
router.delete('/:id',companies.delete);

 
 module.exports= router;