import React, { useState, useEffect } from "react";
import { Box, Button, IconButton, Typography } from "@mui/material";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nft3DCanvas from "./Nft3DCanvas";

const NftCard = ({ path }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
          height: "100vh",
          backgroundColor: "black",
          position: "relative",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "250px",
            height: "305px",
            backgroundColor: "cyan",
            alignItems: "center",
            position: "relative",
            borderRadius: "3%",
          }}
        >
          <Nft3DCanvas path = {path}/>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "230px",
              height:"calc(100% - 240px)",
              marginBottom: "7px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography sx={{ fontSize: "16px", fontWeight:"500"}}>{path.split("/")[path.split("/").length-1]}</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default NftCard;
