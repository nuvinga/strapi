'use strict';
const overrides = {
  '1.0.0': require('./1.0.0/overrides'),
};

module.exports = ({ strapi }) => {
  console.log('coucou');
  strapi.plugin('documentation').services.override.register(overrides);
};