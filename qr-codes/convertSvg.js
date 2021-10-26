const sharp = require('sharp')
const path = require('path')
const minimist = require('minimist')
const fs = require('fs')
const _ = require('lodash')

let args = minimist(process.argv.slice(2))
let fileName = args.filename
if(_.isNull(fileName) || _.isUndefined(fileName)){
    console.error('no file name? need file name?!')
}else if(fileName == 'all'){
    let dirPath = path.join(path.resolve(), 'qr-codes', 'svg')
    let svgFiles = fs.readdirSync(dirPath)
    svgFiles.forEach((singularFileName) => {
        if(singularFileName.includes('.svg')){
            let outputFileName = singularFileName.replace('.svg', '.png')
            let outputFilePath = path.join(path.resolve(), 'qr-codes', 'png', outputFileName)
            let inputFilePath = path.join(path.resolve(), 'qr-codes', 'svg', singularFileName)
            sharp(inputFilePath)
                .png()
                .toFile(outputFilePath)
        }
    })
}else{
    let inputFileName = [fileName, 'svg'].join('.')
    let outputFileName = [fileName, 'png'].join('.')
    let inputFilePath = path.join(path.resolve(), 'qr-codes', 'svg', inputFileName)
    let outputFilePath = path.join(path.resolve(), 'qr-codes', 'png', outputFileName)
    
    sharp(inputFilePath)
        // .resize({ width: 360, height: 360 })
        .png()
        .toFile(outputFilePath)
}