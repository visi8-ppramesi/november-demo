const fs = require('fs')
const path = require('path')
const { config } = require('./scene.config.js')
const { _ } = require('lodash')

const templatePath = path.join(path.resolve(), 'stubs', 'Scene.html.stub')
const scenePath = path.join(path.resolve(), 'src', 'scenes')
const utilPath = path.join(path.resolve(), 'src', 'utils')
const replacerTokens = [
    '%%id%%',
    '%%model_url%%',
    '%%camera_position_x%%',
    '%%camera_position_y%%',
    '%%camera_position_z%%',
    '%%entity_scale_x%%', 
    '%%entity_scale_y%%', 
    '%%entity_scale_z%%',
]
let jsonModelPaths = {}
try {
    if (fs.existsSync(templatePath)) {
        let template = fs.readFileSync(templatePath, 'utf8')
        Object.keys(config.items).forEach((itemName) => {
            config.items[itemName].models.forEach((modelObj) => {
                let myTemplate = '' + template

                let modelId = [itemName, modelObj.name].join('_')
                let modelIdRegex = new RegExp('%%id%%', "g")
                myTemplate = myTemplate.replace(modelIdRegex, _.camelCase(modelId))

                if('entityPosition' in modelObj){
                    ['x', 'y', 'z'].forEach((coord, idx) => {
                        let entityPositionRegex = new RegExp('%%entity_position_' + coord + '%%', "g")
                        myTemplate = myTemplate.replace(entityPositionRegex, modelObj.entityPosition[idx])
                    })
                }else{
                    ['x', 'y', 'z'].forEach((coord, idx) => {
                        let entityPositionRegex = new RegExp('%%entity_position_' + coord + '%%', "g")
                        myTemplate = myTemplate.replace(entityPositionRegex, config.defaultEntityPosition[idx])
                    })
                }

                if('entityScale' in modelObj){
                    ['x', 'y', 'z'].forEach((coord, idx) => {
                        let entityScaleRegex = new RegExp('%%entity_scale_' + coord + '%%', "g")
                        myTemplate = myTemplate.replace(entityScaleRegex, modelObj.entityScale[idx])
                    })
                }else{
                    ['x', 'y', 'z'].forEach((coord, idx) => {
                        let entityScaleRegex = new RegExp('%%entity_scale_' + coord + '%%', "g")
                        myTemplate = myTemplate.replace(entityScaleRegex, config.defaultEntityScale[idx])
                    })
                }
    
                if('cameraPosition' in modelObj){
                    ['x', 'y', 'z'].forEach((coord, idx) => {
                        let cameraPositionRegex = new RegExp('%%camera_position_' + coord + '%%', "g")
                        myTemplate = myTemplate.replace(cameraPositionRegex, modelObj.cameraPosition[idx])
                    })
                }else{
                    ['x', 'y', 'z'].forEach((coord, idx) => {
                        let cameraPositionRegex = new RegExp('%%camera_position_' + coord + '%%', "g")
                        myTemplate = myTemplate.replace(cameraPositionRegex, config.defaultCameraPosition[idx])
                    })
                }
    
                if('baseUrl' in modelObj){
                    let modelUrl = [modelObj.baseUrl, [itemName, modelObj.name].join('-') + '.glb'].join('/')
                    let modelUrlRegex = new RegExp('%%model_url%%', "g")
                    myTemplate = myTemplate.replace(modelUrlRegex, modelUrl)
                    if(jsonModelPaths[itemName]){
                        jsonModelPaths[itemName][modelObj.name] = modelUrl
                    }else{
                        jsonModelPaths[itemName] = { [modelObj.name]: modelUrl }
                    }
                }else{
                    let modelUrl = [config.defaultBaseUrl, [itemName, modelObj.name].join('-') + '.glb'].join('/')
                    let modelUrlRegex = new RegExp('%%model_url%%', "g")
                    myTemplate = myTemplate.replace(modelUrlRegex, modelUrl)
                    if(jsonModelPaths[itemName]){
                        jsonModelPaths[itemName][modelObj.name] = modelUrl
                    }else{
                        jsonModelPaths[itemName] = { [modelObj.name]: modelUrl }
                    }
                }
                let fileName = [itemName, modelObj.name].join('-') + '.html'
                fs.writeFileSync(path.join(scenePath, fileName), myTemplate)
            })
        })
        fs.writeFileSync(path.join(utilPath, 'modelUrls.json'), JSON.stringify(jsonModelPaths))
        console.log('Scenes created!')
    }
} catch(err) {
    console.error(err)
}