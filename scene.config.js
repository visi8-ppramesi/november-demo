// Bells Society :
// - product 1 : (position :  0 2 8 & scale : 3 3 3)
// - product 2 : (position :  0 2 8 & scale : 3 3 3)
// - product 3 : (position :  0 2 8 & scale : 3 3 3)
// Biomagg :
// - Product 1 : (position : -8 3 8 & scale : 3 3 3)
// - Product 2 : (position : -5 3 8 & scale : 3 3 3)
// - Product 3 : (position :  3 3 8 & scale : 3 3 3)
// - Product 4 : (position :  3 3 8 & scale : 3 3 3)
// - Product 5 : (position :  7 1 8 & scale : 3 3 3)
// - Product 6 : (position :  9 2 8 & scale : 3 3 3)
// - Product 7 : (position :  5 2 8 & scale : 3 3 3)
// Bluesville :
// - product 1 : (position :  0 2 8 & scale : 3 3 3)
// - product 2 : (position :  0 2 8 & scale : 3 3 3)
// - product 3 : (position :  0 2 8 & scale : 3 3 3)
// - product 4 : (position :  0 2 8 & scale : 3 3 3)
// - product 5 : (position :  0 2 8 & scale : 3 3 3)

exports.config = {
    defaultEntityScale: [2, 2, 2],
    defaultCameraPosition: [0, 2, 2],
    defaultBaseUrl: 'https://visi8-november-demo.s3.ap-southeast-1.amazonaws.com',
    items: {
        bellssociety: {
            models: [
                {
                    name: 'product1',
                    entityScale: [3, 3, 3],
                    cameraPosition: [0, 2, 2],
                }, 
                {
                    name: 'product2',
                    entityScale: [3, 3, 3],
                    cameraPosition: [0, 2, 2],
                }, 
                {
                    name: 'product3',
                    entityScale: [3, 3, 3],
                    cameraPosition: [0, 2, 2],
                }
            ]
        },
        biomagg: {
            models: [
                {
                    name: 'product2',
                    entityScale: [3, 3, 3],
                    cameraPosition: [-8, 3, 2],
                }, 
                {
                    name: 'product3',
                    entityScale: [3, 3, 3],
                    cameraPosition: [-5, 3, 2],
                }, 
                {
                    name: 'product4',
                    entityScale: [3, 3, 3],
                    cameraPosition: [3, 3, 2],
                }, 
                {
                    name: 'product5',
                    entityScale: [3, 3, 3],
                    cameraPosition: [3, 3, 2],
                }
            ]
        },
        bluesville: {
            models: [
                {
                    name: 'product2',
                    entityScale: [3, 3, 3],
                    cameraPosition: [0, 2, 2],
                }, 
                {
                    name: 'product3',
                    entityScale: [3, 3, 3],
                    cameraPosition: [0, 2, 2],
                }, 
                {
                    name: 'product4',
                    entityScale: [3, 3, 3],
                    cameraPosition: [0, 2, 2],
                }, 
                {
                    name: 'product5',
                    entityScale: [3, 3, 3],
                    cameraPosition: [0, 2, 2],
                }
            ]
        },
        fabelio: {
            models: [
                {
                    name: 'product1',
                    entityScale: [3, 3, 3],
                    cameraPosition: [0, 2, 2],
                }, 
                {
                    name: 'product2',
                    entityScale: [3, 3, 3],
                    cameraPosition: [0, 2, 2],
                }, 
                {
                    name: 'product3',
                    entityScale: [3, 3, 3],
                    cameraPosition: [0, 2, 2],
                }, 
                {
                    name: 'product4',
                    entityScale: [3, 3, 3],
                    cameraPosition: [0, 2, 2],
                }, 
                {
                    name: 'product5',
                    entityScale: [3, 3, 3],
                    cameraPosition: [0, 2, 2],
                }
            ]
        },
        senormal: {
            models: [
                {
                    name: 'product2',
                    entityScale: [3, 3, 3],
                    cameraPosition: [0, 2, 2],
                }, 
                {
                    name: 'product3',
                    entityScale: [3, 3, 3],
                    cameraPosition: [0, 2, 2],
                }, 
                {
                    name: 'product4',
                    entityScale: [3, 3, 3],
                    cameraPosition: [0, 2, 2],
                }
            ]
        }
    }
}