const db = require("../models");
const Company = db.companies;
const Op = db.Sequelize.Op;
const Joi=require('joi');



exports.create = async (req, res) => {

    const {error}=validateCompany(req.body);
    if(error){return res.status(400).send(error.details[0].message);}
    const company = await Company.create({name: req.body.name})
    res.send(company);
};

exports.findAll = async (req,res)=>{
    const companies= await Company.findAll();
    res.send(companies);
};

exports.findOne = async (req, res) => {
    const id=req.params.id;
    const company = await Company.findByPk(id);
    if(!company)return res.status(404).send(`The company with the given _id:${id} not found`);
    res.send(company);
      
};


exports.update = async (req, res) => {
    const {error}=validateCompany(req.body);    
    if(error){return res.status(400).send(error.details[0].message);}
    const id=req.params.id;
    const num = await Company.update(req.body, {where: { id: id }});
    if(num[0]!==1)return res.status(404).send(`Cannot update company with given _id:${id}. Maybe company was not found`);
    const company = await Company.findByPk(id);
    res.send(company);
     
};


exports.delete = async (req, res) => {
   const id = req.params.id;
   const company = await Company.findByPk(id);
    if(!company)return res.status(404).send(`The company with the given _id:${id} not found. Maybe this company has been deleted`);
   const num= await Company.destroy({where: { id: id }});
    res.send('Company deleted successfully!');
    
};

function validateCompany(param){
    const schema=Joi.object({
        name:Joi.string().min(3).required()
    });
    return schema.validate(param);
};

