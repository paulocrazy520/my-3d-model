import NftCard from "./NftCard";
import { Box } from "@mui/material";

export default function App() {
  return (
    <Box
      className="App"
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <NftCard path="/assets/man.glb" />
      <NftCard path="/assets/ship_bear.glb" />
      <NftCard path="/assets/1.glb" />
    </Box>
  );
}
