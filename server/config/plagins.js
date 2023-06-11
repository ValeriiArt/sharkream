module.exports = ({ env }) => ({
 "vercel-deploy": {
  enabled: true,
 },
 "cloudflare-pages": {
  enabled: true,
  config: {
   instances: [
    {
     name: "production website",
     hook_url: "*",
    },
    {
     name: "preview website",
     hook_url: "*",
    },
   ],
  },
 },
 seo: {
  enabled: true,
 },
});
