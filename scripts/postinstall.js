const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')

const inputPathSH = path.resolve(__dirname, '..', 'bin', 'cy')
const inputPathCMD = path.resolve(__dirname, '..', 'bin', 'cy.cmd')

if(process.platform == 'win32') {
  const outputPathSH = path.resolve(__dirname, '..', '..', '..', 'cy')
  const outputPathCMD = path.resolve(__dirname, '..', '..', '..', 'cy.cmd')
  
  fs.writeFileSync(outputPathSH, fs.readFileSync(inputPathSH))
  fs.writeFileSync(outputPathCMD, fs.readFileSync(inputPathCMD))
} else {
  let outputPathSH
  if(!process.env.npm_config_global) {
    outputPathSH = path.resolve(__dirname, '..', '..', '..', 'cy')
  } else {
    outputPathSH = path.resolve(__dirname, '..', '..', '..', '..', 'bin', 'cy')
  }

  if(!fs.existsSync(outputPathSH)) {
    fs.mkdirSync(outputPathSH)
  }

  fs.writeFileSync(outputPathSH, fs.readFileSync(inputPathSH))
  execSync(`chmod +x ${outputPathSH}`)
}
