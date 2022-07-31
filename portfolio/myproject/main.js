
//import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.117.1/build/three.module.js';
//import orbit control to make scene more interactive by using user mouse
//import { OrbitControls } from "https://threejs.org/examples/jsm/controls/OrbitControls.js";
//import * as THREE from "https://threejs.org/build/three.module.js";import * as THREE from "https://threejs.org/build/three.module.js";
//import { OrbitControls } from "https://threejs.org/examples/jsm/controls/OrbitControls.js";
//scene==container holds all the objects
const scene = new THREE.Scene();
//perspective camera designed to mimic what human eye balls would see
//first arg is field of view,which is amount of the world that is visible based on 360dg
//second arg is aspect ratio  based on user's browser window
//last two arg is to control view frustrum, control which objexts are visible relative to camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
//visualize graphic
const renderer= new THREE.WebGLRenderer({
  canvas:document.querySelector('#bg'),
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement );
//by default camera positioned in the middle of the scene, so we move it towards Z axis
camera.position.setZ(30);
//render method==draw
renderer.render(scene, camera);
//add object
 //geometery the {x,y,z} points make up a shape
const geometry= new THREE.TorusGeometry(10,3,16,100);
 //material to give color and texture(wrapping paper for geometry)
 const material=new THREE.MeshBasicMaterial({color:0xe31919,wireframe:true});
 //MESH combining geometry and material
 const torus=new THREE.Mesh(geometry,material);
  scene.add(torus)
  //positioning
  torus.position.z=30;
  torus.position.setX(-10);
  //LIGHT to object
  const pointLight= new THREE.PointLight(0xffffff);
  //move light away from center
  pointLight.position.set(5,5,5);
  scene.add(pointLight)
  renderer.render(scene,camera);
  //listen to dom events on the mouse and update the camera position accordingly
  const controls=new THREE.OrbitControls(camera, renderer.domElement);
  //add random stars
  function getRandomFloat(min, max, decimals) {
    const str = (Math.random() * (max - min) + min).toFixed(decimals);
  
    return parseFloat(str);
  }
  function addStar(){
    const geometry = new THREE.SphereGeometry(0.25);
    const material =new THREE.MeshStandardMaterial({color:0xafc9ff});
    const star =new THREE.Mesh(geometry,material);
    const[x,y,z]=Array(3).fill().map(()=>getRandomFloat(-100,100,100));
    star.position.set(x,y,z);
    scene.add(star);
}
Array(300).fill().forEach(addStar);
//avatar
const meTexture=new THREE.TextureLoader().load('../images/me.jpg');
const me= new THREE.Mesh(
  new THREE.BoxGeometry(10,10,10),
  new THREE.MeshBasicMaterial({map:meTexture})
  
);
scene.add(me);
me.position.set(11,2,0);
//add background
const spaceTexture=new THREE.TextureLoader().load('../images/net.jpg');
scene.background=spaceTexture;
  //game animation loop,
  function animate(){
    requestAnimationFrame(animate);
    //animation has properties:rotation,position,scale
    torus.rotation.x +=0.01;
    torus.rotation.y += 0.005;
    torus.rotation.z += 0.01;
    controls.update();
    renderer.render(scene,camera);
  }
  animate()
  //move on scroll
  function moveCamera(){
  //calculate where the user is currently scroll to
  //getbound.. give dimensions of viewport and 
  //top property shows how far we are  from the webpage
    const t=document.body.getBoundingClientRect().top;
  torus.rotation.x +=0.05;
  torus.rotation.y +=0.075;
  torus.rotation.z +=0.05;
  torus.position.set(-12,10,0);

  me.position.set(20,10,-30);
  me.rotation.y += 0.01;
  me.rotation.z +=0.01;

 
  camera.position.z=t*-0.01; 
  camera.rotation.y += t*-0.0002;
  camera.rotation.x += t*-0.0002;

 
  }
  document.body.onscroll=moveCamera