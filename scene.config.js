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
    defaultEntityPosition: [0, 0, 0],
    defaultEntityScale: [2, 2, 2],
    defaultCameraPosition: [0, 2, 2],
    defaultBaseUrl: 'https://visi8-november-demo.s3.ap-southeast-1.amazonaws.com',
    items: {
        bellssociety: {
            models: [
                {
                    name: 'product1',
                    entityScale: [3, 3, 3],
                    cameraPosition: [0, 2, 3],
                }, 
                {
                    name: 'product2',
                    entityScale: [3, 3, 3],
                    cameraPosition: [0, 2, 3],
                }, 
                {
                    name: 'product3',
                    entityScale: [3, 3, 3],
                    cameraPosition: [0, 2, 3],
                }
            ]
        },
        biomagg: {
            models: [
                {
                    name: 'product1',
                    entityScale: [2, 2, 2],
                    cameraPosition: [0, 3, 3],
                }, 
                {
                    name: 'product2',
                    entityScale: [2, 2, 2],
                    cameraPosition: [0, 3, 3],
                }, 
                {
                    name: 'product3',
                    entityScale: [2, 2, 2],
                    cameraPosition: [0, 3, 3],
                }, 
                {
                    name: 'product4',
                    entityScale: [2, 2, 2],
                    cameraPosition: [0, 3, 3],
                }, 
                {
                    name: 'product5',
                    entityScale: [2, 2, 2],
                    cameraPosition: [0, 3, 3],
                },
                {
                    name: 'product6',
                    entityScale: [2, 2, 2],
                    cameraPosition: [0, 3, 3],
                }
            ]
        },
        bluesville: {
            models: [
                {
                    name: 'product2',
                    entityScale: [1, 1, 1],
                    entityPosition: [0, 1, 0],
                    cameraPosition: [0, 2, 4],
                }, 
                {
                    name: 'product3',
                    entityScale: [1, 1, 1],
                    entityPosition: [0, 1, 0],
                    cameraPosition: [0, 2, 4],
                }, 
                {
                    name: 'product4',
                    entityScale: [1, 1, 1],
                    entityPosition: [0, 1, 0],
                    cameraPosition: [0, 2, 4],
                }, 
                {
                    name: 'product5',
                    entityScale: [1, 1, 1],
                    entityPosition: [0, 1, 0],
                    cameraPosition: [0, 2, 4],
                }
            ]
        },
        fabelio: {
            models: [
                {
                    name: 'product1',
                    entityScale: [0.25, 0.25, 0.25],
                    cameraPosition: [0, 2, 3],
                }, 
                {
                    name: 'product2',
                    entityScale: [0.25, 0.25, 0.25],
                    cameraPosition: [0, 2, 3],
                }, 
                {
                    name: 'product3',
                    entityScale: [0.25, 0.25, 0.25],
                    cameraPosition: [0, 2, 3],
                },
            ]
        },
        senormal: {
            models: [
                {
                    name: 'product2',
                    entityScale: [0.25, 0.25, 0.25],
                    cameraPosition: [0, 2, 3],
                }, 
                {
                    name: 'product3',
                    entityScale: [0.25, 0.25, 0.25],
                    cameraPosition: [0, 2, 3],
                }, 
                {
                    name: 'product4',
                    entityScale: [0.25, 0.25, 0.25],
                    cameraPosition: [0, 2, 3],
                }
            ]
        },
        bobobox: {
            models: [
                {
                    name: 'product1',
                    // entityPosition: [0, 3, 0],
                    entityScale: [1, 1, 1],
                    cameraPosition: [0, 6, 12],
                }
            ]
        }
    }
}