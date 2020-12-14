'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Employees', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      companyId:{
        type:Sequelize.INTEGER,
        onDelete:'CASCADE',
        references:{
          model:'companies',
          key:'id',
          as:'companyId'
        }
      },
      designation: {
        type: Sequelize.STRING
      },
      salary: {
        type: Sequelize.DECIMAL
      },
      createdAt: {
        allowNull:false,
        type:Sequelize.DATE,
        defaultValue:Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull:false,
        type: Sequelize.DATE,
        defaultValue:Sequelize.literal(
          'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'
        )
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Employees');
  }
};