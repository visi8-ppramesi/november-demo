import {
    DeviceOrientationControlMethod
} from "./deviceOrientation.js";
import Marzipano from 'marzipano'
import Swal from 'sweetalert2'


function createMarzipano(element, templateUrl) {
    function requestPermissionForIOS() {
        Swal.fire({
            title: 'Device orientation permission',
            text: 'This web app requires your permission to use your phone\'s gyroscope for device orientation.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Give permission'
        }).then((result) => {
            if (result.isConfirmed) {
                window.DeviceOrientationEvent.requestPermission()
                    .then(response => {
                        if (response === 'granted') {
                            enableDeviceOrientation()
                        }
                    }).catch((e) => {
                        console.error(e)
                    })
            }
        })
    }
    
    function enableDeviceOrientation() {
        deviceOrientationControlMethod.getPitch(function(err, pitch) {
            if (!err) {
                view.setPitch(pitch);
            }
        });
        controls.enableMethod('deviceOrientation');
    }
    
    function enable() {
        if (window.DeviceOrientationEvent) {
            if (typeof(window.DeviceOrientationEvent.requestPermission) == 'function') {
                requestPermissionForIOS()
            } else {
                enableDeviceOrientation()
            }
        }
    }
    // Create viewer.
    var viewer = new Marzipano.Viewer(element);

    // Register the custom control method.
    var deviceOrientationControlMethod = new DeviceOrientationControlMethod();
    var controls = viewer.controls();
    controls.registerMethod('deviceOrientation', deviceOrientationControlMethod);

    // Create source.
    var source = Marzipano.ImageUrlSource.fromString(
        templateUrl
    );

    // Create geometry.
    // var geometry = new Marzipano.CubeGeometry([{
    //     tileSize: 1024,
    //     size: 1024
    // }]);
    var geometry = new Marzipano.EquirectGeometry([{ width: 3040 }]);

    // Create view.
    var limiter = Marzipano.RectilinearView.limit.traditional(1024, 100 * Math.PI / 180);
    var view = new Marzipano.RectilinearView(null, limiter);

    // Create scene.
    var scene = viewer.createScene({
        source: source,
        geometry: geometry,
        view: view,
        pinFirstLevel: true
    });

    // Display scene.
    scene.switchTo();
    enable();

    return { scene, view, viewer };
}

export default createMarzipano