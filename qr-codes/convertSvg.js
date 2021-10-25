const sharp = require('sharp')
const path = require('path')
const minimist = require('minimist')
const fs = require('fs')

let args = minimist(process.argv.slice(2))
let fileName = args.filename
let inputFileName = [fileName, 'svg'].join('.')
let outputFileName = [fileName, 'png'].join('.')
let inputFilePath = path.join(path.resolve(), 'qr-codes', 'svg', inputFileName)
let outputFilePath = path.join(path.resolve(), 'qr-codes', 'png', outputFileName)

sharp(inputFilePath)
    // .resize({ width: 360, height: 360 })
    .png()
    .toFile(outputFilePath)