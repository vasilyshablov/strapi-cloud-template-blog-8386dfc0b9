'use strict';

/**
 * powerbank service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::powerbank.powerbank');
