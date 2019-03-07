const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack', {
  logging: false,
});
const generateSlug = require('../hooks/generateSlug');

const Users = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    isEmail: true,
  },
});

const Page = db.define('page', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  content: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  status: Sequelize.ENUM('open', 'closed'),
});

Page.beforeCreate(pageInstance => {
  pageInstance.slug = generateSlug(pageInstance.title);
});

module.exports = {
  db,
  Page,
  Users,
};
