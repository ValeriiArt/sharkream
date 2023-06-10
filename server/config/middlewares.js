module.exports = [
 "strapi::errors",
 {
  name: "strapi::security",
  config: {
   contentSecurityPolicy: {
    useDefaults: true,
    directives: {
     "connect-src": ["'self'", "https:"],
     "img-src": [
      "'self'",
      "data:",
      "blob:",
      `${env("DO_SPACE_BUCKET")}.${env("DO_SPACE_ENDPOINT")}`,
     ],
     "media-src": [
      "'self'",
      "data:",
      "blob:",
      `${env("DO_SPACE_BUCKET")}.${env("DO_SPACE_ENDPOINT")}`,
     ],
     upgradeInsecureRequests: null,
    },
   },
  },
 },

 {
  name: "strapi::cors",
  config: {
   origin: "*",
   expose: ["WWW-Authenticate", "Server-Authorization"],
   maxAge: 31536000,
   headers: [
    "Content-Type",
    "Authorization",
    "X-Frame-Options",
    "Origin",
    "Accept",
   ],
   methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS", "HEAD"],
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
