
console.log("env : "+process.env.NODE_ENV)
module.exports = require(`./${process.env.NODE_ENV}.js`) || {};