import { Canvas } from "@react-three/fiber";
import { Box } from "@mui/material";
import Nft3DModel from "./Nft3D";


export default function Nft3DCanvas({ path }) {
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
          <Nft3DModel path = {path}/>
        </Canvas>
      </Box>
    </>
  );
}

