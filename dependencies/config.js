// Please rename this file config.js

module.exports = {
  db: {
    user: 'marc', // Provide db's user
    password: 'marc', // Provide db's password
    host: 'ds133981.mlab.com', // Provide db's host
    port: '33981', // Provide db's host port, by default i's 27017
    name: 'bars-db' // Provide db's name
  },
  jwtSecret: 'Je-suis-connecter', // Provide secret passphrase of JWT
  server: {
    host: 'http://localhost', // Provide host server
    port: '4211' // Provide server's port
  }
}
