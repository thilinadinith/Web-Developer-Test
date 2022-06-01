

  'use strict';
/*eslint no-process-env:0*/

// Production specific configuration
// =================================
module.exports = {
  // Server IP
  port: process.env.PORT || 8080,

  // Server IP
  ip: process.env.IP || '0.0.0.0',
}