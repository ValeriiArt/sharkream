"use strict";

require("dotenv").config();
const formController = require("./api/submit-form/controllers/submit-form.js");
// const bot = require("./extensions/telegram-bot/telegram.js");

module.exports = {
 create: formController.create,
};

module.exports = {
 /**
  * An asynchronous register function that runs before
  * your application is initialized.
  *
  * This gives you an opportunity to extend code.
  */
 register(/*{ strapi }*/) {},

 /**
  * An asynchronous bootstrap function that runs before
  * your application gets started.
  *
  * This gives you an opportunity to set up your data model,
  * run jobs, or perform some special logic.
  */
 bootstrap(/*{ strapi }*/) {},
};
