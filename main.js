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
  alpha: true,
  antialias: true
});

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.basicShadowMap;

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

renderer.render(scene, camera);

const repeatFunction = function(texture) {texture.wrapS = texture.wrapT = THREE.RepeatWrapping;}

const textureLoader = new THREE.TextureLoader();

const marbleBaseColor = textureLoader.load("./tex/Marble_White_007_basecolor.jpg", repeatFunction);
const marbleNormalMap = textureLoader.load("./tex/Marble_White_007_normal.jpg", repeatFunction);
const marbleHeightMap = textureLoader.load("./tex/Marble_White_007_height.png", repeatFunction);
const marbleRoughnessMap = textureLoader.load("./tex/Marble_White_007_roughness.jpg", repeatFunction);
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
      roughness: 0.95,
      normalMap: marbleNormalMap,
      bumpMap: marbleHeightMap,

  }
);

var awnTexture = new THREE.MeshStandardMaterial(
  {
      map: marbleBaseColor,
      color: 0xA0CCF2,
      roughness: 0.95,
      normalMap: marbleNormalMap,
      bumpMap: marbleHeightMap,

  }
);

var buiTexture = new THREE.MeshStandardMaterial(
  {
      map: marbleBaseColor,
      color: 0xf0ebe4,
      roughness: 0.92,

  }
);

var dooTexture = new THREE.MeshStandardMaterial(
  {
      map: marbleBaseColor,
      color: 0xA0CCF2,
      roughness: 0.95,
      normalMap: marbleNormalMap,
      bumpMap: marbleHeightMap,

  }
);

var flaTexture = new THREE.MeshStandardMaterial(
  {
      map: marbleBaseColor,
      color: 0xA0CCF2,
      roughness: 0.95,
      normalMap: marbleNormalMap,
      bumpMap: marbleHeightMap,

  }
);

var fllTexture = new THREE.MeshStandardMaterial(
  {
      map: marbleBaseColor,
      color: 0xA0CCF2,
      roughness: 0.05,
      emissive: 0xfffeff,
      emissiveMap: marbleRoughnessMap,
  }
);

var winTexture = new THREE.MeshStandardMaterial(
  {
      map: marbleBaseColor,
      color: 0xA0CCF2,
      roughness: 0.95,
      normalMap: marbleNormalMap,
      bumpMap: marbleHeightMap,

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
  model.position.set(1,2,7)
  model.traverse((o) => {
    if (o.isMesh) {
      o.material = ybTexture;
    } 
    console.log(o.name.substring(0, 3))
    if (o.name.substring(0, 3) == "awn") {
      o.material = awnTexture;
      o.castShadow = true;
      o.receiveShadow = true;
    }
    if (o.name.substring(0, 3) == "bui") {
      o.material = buiTexture;
      o.castShadow = true;
      o.receiveShadow = true;
    }
    if (o.name.substring(0, 3) == "doo") {
      o.material = dooTexture;
      o.castShadow = true;
      o.receiveShadow = true;
    }
    if (o.name.substring(0, 3) == "fla") {
      o.material = flaTexture;
      o.castShadow = true;
      o.receiveShadow = true;
    }
    if (o.name.substring(0, 3) == "fll") {
      o.material = fllTexture;
      o.castShadow = true;
      o.receiveShadow = true;
    }
    if (o.name.substring(0, 3) == "win") {
      o.material = winTexture;
      o.castShadow = true;
      o.receiveShadow = true;
    }
    console.log(o);
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

const streetLight1 = new THREE.PointLight(0x000fff, .48);
streetLight1.position.set(0, 250, 175);
streetLight1.castShadow = false // true
scene.add(streetLight1)

const spotLight1 = new THREE.SpotLight(0xffffff, 1);
spotLight1.position.set(0, 0, 5);
spotLight1.castShadow = false // true
scene.add(streetLight1)

const pointLight = new THREE.PointLight(0xff18f7, .88);
pointLight.position.set(0, 250, 175);

pointLight.castShadow = true

const ambientLight = new THREE.AmbientLight(0x202E31, 0.12);
scene.add(pointLight, ambientLight); 

const sphereSize = 1;
const pointLightHelper = new THREE.PointLightHelper( pointLight, sphereSize );
scene.add( pointLightHelper );
// const spotLightHelper = new THREE.SpotLightHelper( spotLight1, sphereSize );
// scene.add( spotLightHelper );

// var shadowCameraHelper = new THREE.CameraHelper(pointLight.shadow.camera);
// scene.add(shadowCameraHelper);

// console.log("pointLight: ")
// console.log(pointLight)

// Helpers

// const lightHelper = new THREE.PointLightHelper(pointLight)
// const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(lightHelper, gridHelper)

// const controls = new OrbitControls(camera, renderer.domElement);

function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(100));

  star.position.set(x, y, z);
  scene.add(star);
}

Array(200).fill().forEach(addStar);

const fogColor = new THREE.Color(0x020F10);
 
scene.fog = new THREE.Fog(fogColor, 18, 60);


// Background

scene.background = new THREE.TextureLoader().load('./img/mia2.jpg');

// Scroll Animation

  camera.position.x = 1;
  camera.position.y = 16;

function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  // console.log(camera)
  camera.position.z = t * -.05 + 21;

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

  pointLight.position.copy(new THREE.Vector3(pos.x * 2.25, pos.y + 20, pos.z + 16));
  camera.position.x = pos.x * 0.45 - 1;
  // camera.position.y = camera.position.y (pos.y/2)
  camera.lookAt(-2,14,0)

  // Hover light finder
  // console.log("x: " + Math.round(pointLight.position.x) + "  y: " + Math.round(pointLight.position.y) + "  z: " + Math.round(pointLight.position.y))
};


// } else {

// 	const warning = WEBGL.getWebGLErrorMessage();
// 	document.getElementById( 'bg' ).appendChild( warning );

// }