module.exports = [
 "strapi::errors",
 "strapi::security",

 {
  name: "strapi::cors",
  config: {
   credentials: false,
   //    origin: "*",
   //    expose: ["WWW-Authenticate", "Server-Authorization"],
   //    maxAge: 31536000,
   //    headers: [
   //     "Content-Type",
   //     "Authorization",
   //     "X-Frame-Options",
   //     "Origin",
   //     "Accept",
   //    ],
   //    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS", "HEAD"],
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
