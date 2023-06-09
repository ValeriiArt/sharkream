const { Telegraf } = require("telegraf");
const bot = new Telegraf(process.env.TELEGRAM_TOKEN);

module.exports = bot;

const handleFormSubmission = async (formData) => {
 const { name, email, tel } = formData;
 try {
  const message = `New message from the user:\n\n Name: ${name} \n Email: ${email}\n Tel: ${tel}`;
  await bot.telegram.sendMessage(process.env.TELEGRAM_CHAT_ID, message);

  const feedbackMessage = "Ваше повідомлення успешно відправлено!";

  return feedbackMessage;
 } catch (error) {
  console.error("Error when processing the form:", error);
  throw new Error("An error occurred while submitting the form.");
 }
};

module.exports = handleFormSubmission;
