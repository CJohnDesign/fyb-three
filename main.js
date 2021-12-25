import './style.css';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import TWEEN from '@tweenjs/tween.js';

// Setup

// if ( WEBGL.isWebGLAvailable() ) {

var
  camera,
  model;

var mouse = {
  x: 0,
  y: 0
}

const scene = new THREE.Scene();

var screenWidth = window.innerWidth,
    screenHeight = window.innerHeight,
    viewAngle = 100,
    nearDistance = 0.1,
    farDistance = 1000;

  camera = new THREE.PerspectiveCamera(viewAngle, screenWidth / screenHeight, nearDistance, farDistance);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

renderer.render(scene, camera);

const repeatFunction = function(texture) {texture.wrapS = texture.wrapT = THREE.RepeatWrapping;}

const textureLoader = new THREE.TextureLoader();

const marbleBaseColor = textureLoader.load("./tex/Marble_White_007_basecolor.jpg", repeatFunction);
const marbleNormalMap = textureLoader.load("./tex/Marble_White_007_normal.jpg", repeatFunction);
const marbleHeightMap = textureLoader.load("./tex/Marble_White_007_height.png", repeatFunction);
// const marbleRoughness = textureLoader.load("./tex/Marble_White_007_roughness.jpg", repeatFunction);
// const marbleAmbientOcclusion = textureLoader.load("./tex/Marble_White_007_ambientocclusion.jpg", repeatFunction);

// const textureMap = new THREE.MeshStandardMaterial({ 
//   map: marbleBaseColor,
//   map: marbleNormalMap,
//   map: marbleHeightMap,
//   map: marbleRoughness,
//   map: marbleAmbientOcclusion
// })

var ybTexture = new THREE.MeshStandardMaterial(
  {
      map: marbleBaseColor,
      color: 0xF2C9D4,
      roughness: 0.85,
      normalMap: marbleNormalMap,
      bumpMap: marbleHeightMap,
      // cast shadows
  }
);

var awnTexture = new THREE.MeshStandardMaterial(
  {
      map: marbleBaseColor,
      color: 0xF2C9D4,
      roughness: 0.85,
      normalMap: marbleNormalMap,
      bumpMap: marbleHeightMap,
      // cast shadows
  }
);

var buiTexture = new THREE.MeshStandardMaterial(
  {
      map: marbleBaseColor,
      color: 0xF2C9D4,
      roughness: 0.85,
      normalMap: marbleNormalMap,
      bumpMap: marbleHeightMap,
      // cast shadows
  }
);

var dooTexture = new THREE.MeshStandardMaterial(
  {
      map: marbleBaseColor,
      color: 0xF2C9D4,
      roughness: 0.85,
      normalMap: marbleNormalMap,
      bumpMap: marbleHeightMap,
      // cast shadows
  }
);

var flaTexture = new THREE.MeshStandardMaterial(
  {
      map: marbleBaseColor,
      color: 0xF2C9D4,
      roughness: 0.85,
      normalMap: marbleNormalMap,
      bumpMap: marbleHeightMap,
      // cast shadows
  }
);

var winTexture = new THREE.MeshStandardMaterial(
  {
      map: marbleBaseColor,
      color: 0xF2C9D4,
      roughness: 0.85,
      normalMap: marbleNormalMap,
      bumpMap: marbleHeightMap,
      // cast shadows
  }
);

// Model data
const loader = new GLTFLoader();

loader.load( '/3d/cresprin.glb', function ( gltf ) {
  model = gltf.scene
  console.log("Model: ");
  console.log(model);
  console.log("Texture: ")
  console.log(ybTexture)
  model.scale.multiplyScalar(12);
	scene.add( model );
  model.position.set(1,3,5)
  model.traverse((o) => {
    if (o.isMesh) {
      o.material = ybTexture;
    } 
    if (o.name.substring(0, 2) = awn) {
      o.material = ybTexture;
    }
    if (o.name.substring(0, 2) = bui) {
      o.material = ybTexture;
    }
    if (o.name.substring(0, 2) = doo) {
      o.material = ybTexture;
    }
    if (o.name.substring(0, 2) = fla) {
      o.material = ybTexture;
    }
    if (o.name.substring(0, 2) = win) {
      o.material = ybTexture;
    }
    // console.log(o);
  });
  

}, undefined, function ( error ) {

	console.error( error );

} );



// Torus

//const geometry = new THREE.TorusGeometry(20, 3, 200, 1000);
//const material = new THREE.MeshStandardMaterial({ color: 0xff6347 });
//const torus = new THREE.Mesh(geometry, material);

//scene.add(torus);

// Lights

const pointLight = new THREE.PointLight(0xffffff, .68);
pointLight.position.set(0, 250, 175);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.62);
scene.add(pointLight, ambientLight); 

const sphereSize = 1;
const pointLightHelper = new THREE.PointLightHelper( pointLight, sphereSize );
scene.add( pointLightHelper );


// Helpers

// const lightHelper = new THREE.PointLightHelper(pointLight)
// const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(lightHelper, gridHelper)

// const controls = new OrbitControls(camera, renderer.domElement);

// function addStar() {
//   const geometry = new THREE.SphereGeometry(0.25, 24, 24);
//   const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
//   const star = new THREE.Mesh(geometry, material);

//   const [x, y, z] = Array(3)
//     .fill()
//     .map(() => THREE.MathUtils.randFloatSpread(100));

//   star.position.set(x, y, z);
//   scene.add(star);
// }

// Array(200).fill().forEach(addStar);

// Background

const spaceTexture = new THREE.TextureLoader().load('./beach.png');
scene.background = spaceTexture;

// Scroll Animation

function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  // console.log(camera)
  camera.position.z = t * -.05 + 21;
  camera.position.x = -3;
  camera.position.y = 16;
  camera.lookAt(-2,14,0)
  // pointLight.position.x = t * 0.21 + 10;
}

document.body.onscroll = moveCamera;
moveCamera();

// Animation Loop

function animate() {
  requestAnimationFrame(animate);

  // controls.update();

  renderer.render(scene, camera);
}

animate();
document.addEventListener('mousemove', onMouseMove, false);

// Follows the mouse event
function onMouseMove(event) {

  // Update the mouse variable
  event.preventDefault();
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  // Make the sphere follow the mouse
  var vector = new THREE.Vector3(mouse.x, mouse.y, 10.5);
  vector.unproject(camera);
  var dir = vector.sub(camera.position).normalize();
  var distance = -camera.position.z / dir.z;
  var pos = camera.position.clone().add(dir.multiplyScalar(distance));
  //mouseMesh.position.copy(pos);

  pointLight.position.copy(new THREE.Vector3(pos.x * 8, pos.y + 15, pos.z + 275));
  camera.position.x = pos.x * 0.05 - 1;
  // camera.position.y = camera.position.y (pos.y/2)
  camera.lookAt(-2,14,0)
};


// } else {

// 	const warning = WEBGL.getWebGLErrorMessage();
// 	document.getElementById( 'bg' ).appendChild( warning );

// }