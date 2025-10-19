module.exports = { apps : [{ name : 'client', script : './client/src/index.js', env: { PORT: 3000, NODE_ENV: 'development' }, env_production : { NODE_ENV: 'production' } }], };
