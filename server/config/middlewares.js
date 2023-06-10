module.exports = [
 "strapi::errors",
 "strapi::security",
 "strapi::cors",
 {
  name: "strapi::customCors",
  config: {
   origin: ["*"],
  },
 },
 "strapi::poweredBy",
 "strapi::logger",
 "strapi::query",
 "strapi::body",
 "strapi::session",
 "strapi::favicon",
 "strapi::public",
];
