
// const siteUrl = 'https://www.collinsrollins.com';

/** @type {import('next-sitemap').IConfig} */
const mysiteUrl = 'https://www.collinsrollins.com';

module.exports = {
  siteUrl: process.env.SITE_URL || mysiteUrl,
  generateRobotsTxt: true, // (optional)
  // ...other options
}