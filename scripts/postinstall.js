const fs = require('fs')
const path = require('path')

if(process.platform == 'win32') {
  fs.writeFileSync(path.resolve(__dirname, '..', '..', '..', 'cy'), fs.readFileSync(path.resolve(__dirname, '..', 'bin', 'cy')))
  fs.writeFileSync(path.resolve(__dirname, '..', '..', '..', 'cy.cmd'), fs.readFileSync(path.resolve(__dirname, '..', 'bin', 'cy.cmd')))
} else {
  if(!process.env.npm_config_global) {
    fs.writeFileSync(path.resolve(__dirname, '..', '..', '..', 'cy'), fs.readFileSync(path.resolve(__dirname, '..', 'bin', 'cy')))
  } else {
    fs.writeFileSync(path.resolve(__dirname, '..', '..', '..', '..', 'bin', 'cy'), fs.readFileSync(path.resolve(__dirname, '..', 'bin', 'cy')))
  }
}
