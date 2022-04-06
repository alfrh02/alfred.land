let height = window.innerHeight
let width = window.innerWidth

function test() {
	if (width < 618) {
		document.getElementById("main").style.width = "100%"
		document.getElementById("list").style.width = "100%"
	}
	console.log(height)
}

let boxSize = 1
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 33, width / height, 0.1, 100 );
				
const renderer = new THREE.WebGLRenderer();
if (width < 618) {
	renderer.setSize(width, width * 2)
	document.getElementById("canvasDiv").style.left = "-10px"
	document.getElementById("canvasDiv").style.top = "500px"
	boxSize = 0.5
} else {
	renderer.setSize(width * 0.33, window.innerHeight / 2.81);
}
renderer.setClearColor(0xffffff,0)
document.querySelector("#canvasDiv").appendChild( renderer.domElement );
                
const geometry = new THREE.BoxGeometry();
const wireframe = new THREE.WireframeGeometry(geometry)
const line = new THREE.LineSegments(wireframe)
const line2 = new THREE.LineSegments(wireframe)

line2.material.color = new THREE.Color(0x51dd8e)
line2.scale.set(0.5 * boxSize,0.5 * boxSize,0.5 * boxSize)
line.material.color = new THREE.Color(0x51dd8e)
line.scale.set(boxSize,boxSize,boxSize)
				
scene.add(line)
scene.add(line2)
                        	
line.position.y = 0.3
line2.position.y = 0.3
camera.position.z = 5                  
function animate() {
	requestAnimationFrame(animate)

	line2.rotation.y += 0.01
	line2.rotation.x -= 0.005

	line.rotation.x += 0.005
	line.rotation.y += 0.01
	renderer.render(scene, camera)
}
animate()