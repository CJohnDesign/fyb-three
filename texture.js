import * as THREE from 'three';
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
      roughness: 0.95,
      normalMap: marbleNormalMap,
      bumpMap: marbleHeightMap,
      // castShadow: true,
      // receiveShadow: true,
  }
);

var awnTexture = new THREE.MeshStandardMaterial(
  {
      map: marbleBaseColor,
      color: 0xA0CCF2,
      roughness: 0.95,
      normalMap: marbleNormalMap,
      bumpMap: marbleHeightMap,
      // castShadow: true,
      // receiveShadow: true,
  }
);

var buiTexture = new THREE.MeshStandardMaterial(
  {
      map: marbleBaseColor,
      color: 0xF2C9D4,
      roughness: 0.92,
      // castShadow: true,
      // receiveShadow: true,
  }
);

var dooTexture = new THREE.MeshStandardMaterial(
  {
      map: marbleBaseColor,
      color: 0xA0CCF2,
      roughness: 0.95,
      normalMap: marbleNormalMap,
      bumpMap: marbleHeightMap,
      // castShadow: true,
      // receiveShadow: true,
  }
);

var flaTexture = new THREE.MeshStandardMaterial(
  {
      map: marbleBaseColor,
      color: 0xA0CCF2,
      roughness: 0.95,
      normalMap: marbleNormalMap,
      bumpMap: marbleHeightMap,
      // castShadow: true,
      // receiveShadow: true,
  }
);

var winTexture = new THREE.MeshStandardMaterial(
  {
      map: marbleBaseColor,
      color: 0xA0CCF2,
      roughness: 0.95,
      normalMap: marbleNormalMap,
      bumpMap: marbleHeightMap,
      // castShadow: true,
      // receiveShadow: true,
  }
);
