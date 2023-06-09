const handleFormSubmission = require("../../../extensions/telegram-bot/telegram.js");

module.exports = {
 async create(ctx) {
  try {
   const formData = ctx.request.body;
   const telRegex = /^[-]?\d+$/.test(formData.tel.slice(4));
   console.log(formData);

   if (
    formData.tel.length !== 13 ||
    formData.tel.indexOf("+380") !== 0 ||
    !telRegex
   ) {
    return ctx.send({
     error: true,
     message: "Please enter a correct phone number (+380xxxxxxxxx)",
    });
   }
   const feedbackMessage = await handleFormSubmission(formData);
   ctx.send({ message: feedbackMessage });
  } catch (error) {
   console.error("Error when processing the form:", error);
   ctx.send({ error: "An error occurred while submitting the form." });
  }
 },
};
