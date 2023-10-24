const fs = require('fs')
const path = require('path')

fs.writeFileSync(path.resolve(__dirname, '..', '..', '..', 'cy'), fs.readFileSync(path.resolve(__dirname, '..', 'bin', 'cy')))
fs.writeFileSync(path.resolve(__dirname, '..', '..', '..', 'cy.cmd'), fs.readFileSync(path.resolve(__dirname, '..', 'bin', 'cy.cmd')))
