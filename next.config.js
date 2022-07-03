const { withPlugins } = require('next-compose-plugins');
const { withPlausibleProxy } = require('next-plausible');
const withReactSvg = require('next-react-svg');
const path = require('path');

module.exports = withPlugins([withReactSvg, withPlausibleProxy], {
  include: path.resolve(__dirname, 'public/images'),
  webpack(config) {
    return config;
  },
  experimental: {
    newNextLinkBehavior: true
  }
});
