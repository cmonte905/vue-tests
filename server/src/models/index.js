const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const config = require('../config/config');
const db = {}

const sequelize = new Sequelize(
  config.db.database,
  config.db.user,
  config.db.password,
  config.db.options
)

// Gives back all database models within this directory
// More for me, but since models folder is going to get imported and
// there are going more than one model, this file gets all the
// names of said models and returns them
fs
  .readdirSync(__dirname)
  // Excludes this index js since this file is only giving back the models in
  // this directory
  .filter((file) =>
    file !== 'index.js'
  )
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file))
    db[model.name] = model
  })

// Gives access to both sequelize objects when this is exported
db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
