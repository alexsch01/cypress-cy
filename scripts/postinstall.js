const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')

const inputPathSH = path.resolve(__dirname, '..', 'bin', 'cy')
const inputPathCMD = path.resolve(__dirname, '..', 'bin', 'cy.cmd')
const inputPathPS1 = path.resolve(__dirname, '..', 'bin', 'cy.ps1')

if(process.platform == 'win32') {
  const outputPathSH = path.resolve(__dirname, '..', '..', '..', 'cy')
  const outputPathCMD = path.resolve(__dirname, '..', '..', '..', 'cy.cmd')
  const outputPathPS1 = path.resolve(__dirname, '..', '..', '..', 'cy.ps1')
  
  fs.writeFileSync(outputPathSH, fs.readFileSync(inputPathSH))
  fs.writeFileSync(outputPathCMD, fs.readFileSync(inputPathCMD))
  fs.writeFileSync(outputPathPS1, fs.readFileSync(inputPathPS1))
} else {
  const outputPathSH = path.resolve(__dirname, '..', '..', '..', '..', 'bin', 'cy')

  if(!fs.existsSync(path.resolve(outputPathSH, '..'))) {
    fs.mkdirSync(path.resolve(outputPathSH, '..'))
  }

  fs.writeFileSync(outputPathSH, fs.readFileSync(inputPathSH))
  execSync(`chmod +x ${outputPathSH}`)
}
