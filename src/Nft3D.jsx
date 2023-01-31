import { useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useMemo } from "react";
import { Box } from "@mui/material";

export default function Nft3DModel({ path }) {
  const { materials, scene } = useLoader(GLTFLoader, path); // load the model

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

  return (
    <>
      <Box
        sx={{
          width: "240px",
          height: "240px",
          margin: "5px",
          backgroundColor: "white",
          borderRadius: "3%",
        }}
      >
        <Canvas camera={{ position: [0, 0, 2], fov: 55 }} id="canvasElement">
          <ambientLight intensity={0.6} />
          <pointLight position={[10, 10, 10]} />

          <Suspense fallback={null}>
            <primitive object={scene} />
          </Suspense>

          <OrbitControls />
        </Canvas>
      </Box>
    </>
  );
}

