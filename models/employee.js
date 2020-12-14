'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    
    static associate(models) {
      Employee.belongsTo(models.Company,{
        foreignKey:'companyId',
        onDelete:'CASCADE'
      })
    }
  };
  Employee.init({
    name:{
      type:DataTypes.STRING,
      allowNull: false,
    },
    designation:{type:DataTypes.STRING},
    salary:{type:DataTypes.DECIMAL}
  }, {
    sequelize,
    modelName: 'Employee',
  });
  return Employee;
};