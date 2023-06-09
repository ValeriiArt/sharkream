module.exports = {
 routes: [
  {
   method: "POST",
   path: "/submit-form",
   handler: "submit-form.create",
   config: {
    policies: [],
    middlewares: [],
   },
  },
 ],
};
