let cube, textMesh;

document.addEventListener('DOMContentLoaded', function() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer({ alpha: true }); // Setting alpha to true for transparent background
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.style.margin = '0'; 
    document.body.appendChild(renderer.domElement); // Append the renderer to the body

    // Cube
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x008200, wireframe: true });
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    // Text
    // const loader = new THREE.FontLoader();
    // loader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', function (font) {
    //     const textGeometry = new THREE.TextGeometry('MNI', {
    //         font: font,
    //         size: 0.5,
    //         height: 0.1,
    //         curveSegments: 2,
    //         // bevelEnabled: true,
    //         // bevelThickness: 0.03,
    //         // bevelSize: 0.02,
    //         // bevelOffset: 0,
    //         // bevelSegments: 5
    //     });

    //     textGeometry.computeBoundingBox();
    //     const offset = textGeometry.boundingBox.getCenter(new THREE.Vector3()).negate();
    //     textGeometry.translate(offset.x, offset.y, offset.z);

    //     const textMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    //     const textGeometry2 = new THREE.TextGeometry('Full-Stack', {
    //         font: font,
    //         size: 0.5,
    //         height: 0.1,
    //         curveSegments: 2,
    //         // bevelEnabled: true,
    //         // bevelThickness: 0.03,
    //         // bevelSize: 0.02,
    //         // bevelOffset: 0,
    //         // bevelSegments: 2
    //     });
        
    //     textGeometry2.computeBoundingBox();
    //     const offset2 = textGeometry2.boundingBox.getCenter(new THREE.Vector3()).negate();
    //     textGeometry2.translate(offset2.x, offset2.y, offset2.z);

    //     const textMaterial2 = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    //     textMesh = new THREE.Mesh(textGeometry, textMaterial);
    //     textMesh2 = new THREE.Mesh(textGeometry2, textMaterial2);
    //     textMesh.position.set(0, 0, 0); // Adjust this to position your text
    //     scene.add(textMesh);
    //     textMesh2.position.set(0, -1, 0); // Adjust this to position your text
    //     scene.add(textMesh2);
    // });

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);

        // Spin the cube
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        // // Spin the text if it's loaded
        // if (textMesh) {
        //     // textMesh.rotation.x -= 0.01;
        //     textMesh.rotation.y -= 0.005;
        // }

        // if (textMesh2) {
        //     // textMesh2.rotation.x -= 0.01;
        //     textMesh2.rotation.y += 0.005;
        // }

        renderer.render(scene, camera);
    }

    animate();

    // Adjust the canvas size when the window is resized
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
});


$(document).ready(function () {
    $('#menuIcon').click(function () {
        $('#navbar').slideToggle();
        // $('#nameEmblem').toggleClass('hidden');
    });
});
