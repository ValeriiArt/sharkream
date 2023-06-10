module.exports = [
 "strapi::errors",
 {
  name: "strapi::security",
  config: {
   contentSecurityPolicy: {
    useDefaults: true,
    directives: {
     "connect-src": ["'self'", "https:"],
     "img-src": ["'self'", "data:", "blob:"],
     "media-src": ["'self'", "data:", "blob:"],
     upgradeInsecureRequests: null,
    },
   },
  },
 },

 {
  name: "strapi::cors",
  config: {
   origin: ["*"],
   headers: [
    "Content-Type",
    "Authorization",
    "X-Frame-Options",
    "User-Agent",
    "Origin",
    "X-Requested-With",
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
