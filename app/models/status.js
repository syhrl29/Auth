'use strict';
const {
  Model
} = require('sequelize');
const { UUID } = require('sequelize/lib/data-types');
const dataTypes = require('sequelize/lib/dialects/postgres/data-types');
module.exports = (sequelize, DataTypes) => {
  class Status extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Status.init({
    id: DataTypes.STRING,
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    user_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Status',
  });
  return Status;
};