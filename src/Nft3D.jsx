import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "@react-three/drei";
import { Suspense, useMemo } from "react";
import * as THREE from 'three'


export default function Nft3DModel({ path }) {
  const { materials, scene, animations } = useLoader(GLTFLoader, path); // load the model


  // Here's the animation part
  // ************************* 
  let mixer
  if (animations.length) {
    console.log(animations);
    mixer = new THREE.AnimationMixer(scene);
    animations.forEach(clip => {
      const action = mixer.clipAction(clip)
      action.play();
    });
  }

  useFrame((state, delta) => {
    mixer?.update(delta);
  })

  useMemo(() => {
    console.log(scene);

    // scene.scale.x = 6;
    scene.position.y = -0.5;
    scene.position.x = 0.0;
    // scene.scale.z = 6;
    for (const material in materials) {
      // iterate the materials
      if (Object.prototype.hasOwnProperty.call(materials, material)) {
        // change the color of all the materials (there's only one in this model)
        materials[material].color.set("#bb6f3e");

        // you can also change the color of a specific material if you know the name of the material
      }
    }
  }, [materials]);

  // useEffect(() => {
  //   animation.actions[animation.names].play()
  // }, [])

  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} />

      <Suspense fallback={null}>
        <primitive object={scene} />
      </Suspense>

      <OrbitControls />
    </>
  );
}

