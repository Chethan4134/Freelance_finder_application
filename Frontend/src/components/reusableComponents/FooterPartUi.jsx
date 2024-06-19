// // Footer.jsx

// import React from 'react';
// import { Box, Typography, IconButton } from '@mui/material';
// import { Instagram, Facebook, Twitter, Email, Android, Apple } from '@mui/icons-material';

// const Footer = () => {
//   return (
//     <Box
//       sx={{
//         backgroundColor: 'rgba(51, 51, 51, 0)', // Transparent background color
//         color: '#fff',
//         padding: '10px',
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//       }}
//     >
//       <Box sx={{ display: 'inline-flex', alignItems: 'center' }}>
//         <IconButton>
//           <Instagram />
//         </IconButton>
//         <Typography variant="body2" sx={{ color: '#1B1A55' }}>Instagram</Typography>
//       </Box><Box sx={{ display: 'inline-flex', alignItems: 'center' }}>
//         <IconButton>
//           <Facebook />
//         </IconButton>
//         <Typography variant="body2" sx={{ color: '#1B1A55' }}>Facebook</Typography>
//       </Box><Box sx={{ display: 'inline-flex', alignItems: 'center' }}>
//         <IconButton>
//           <Twitter />
//         </IconButton>
//         <Typography variant="body2" sx={{ color: '#1B1A55' }}>Twitter</Typography>
//       </Box><Box sx={{ display: 'inline-flex', alignItems: 'center' }}>
//         <IconButton>
//           <Email />
//         </IconButton>
//         <Typography variant="body2" sx={{ color: '#1B1A55' }}>Email</Typography>
//       </Box><Box sx={{ display: 'inline-flex', alignItems: 'center' }}>
//         <IconButton>
//           <Android />
//         </IconButton>
//         <Typography variant="body2" sx={{ color: '#1B1A55' }}>Android</Typography>
//       </Box><Box sx={{ display: 'inline-flex', alignItems: 'center' }}>
//         <IconButton>
//           <Apple />
//         </IconButton>
//         <Typography variant="body2" sx={{ color: '#1B1A55' }}>Apple</Typography>
//       </Box><Box>
//         <Typography variant="body2" sx={{ color: '#1B1A55' }}>Copyright © 2024 Your Company</Typography>
//       </Box>
//     </Box>
//   );
// };

// export default Footer;

import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import {
  Instagram,
  Facebook,
  Twitter,
  Email,
  Android,
  Apple,
} from "@mui/icons-material";

const FooterPartUi = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#636364",
        color: "#fff",
        padding: "20px 10px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        marginTop: "20px",
      }}
    >
      {/* Social media links */}
      <Box sx={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
        <IconButton sx={{ color: "#fff" }}>
          <Instagram />
        </IconButton>
        <Typography variant="body2" sx={{ marginLeft: "5px" }}>
          Instagram
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
        <IconButton sx={{ color: "#fff" }}>
          <Facebook />
        </IconButton>
        <Typography variant="body2" sx={{ marginLeft: "5px" }}>
          Facebook
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
        <IconButton sx={{ color: "#fff" }}>
          <Twitter />
        </IconButton>
        <Typography variant="body2" sx={{ marginLeft: "5px" }}>
          Twitter
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
        <IconButton sx={{ color: "#fff" }}>
          <Email />
        </IconButton>
        <Typography variant="body2" sx={{ marginLeft: "5px" }}>
          Email
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
        <IconButton sx={{ color: "#fff" }}>
          <Android />
        </IconButton>
        <Typography variant="body2" sx={{ marginLeft: "5px" }}>
          Android
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
        <IconButton sx={{ color: "#fff" }}>
          <Apple />
        </IconButton>
        <Typography variant="body2" sx={{ marginLeft: "5px" }}>
          Apple
        </Typography>
      </Box>

      {/* Copyright text */}
      <Typography
        variant="body2"
        sx={{
          color: "#fff",
          textAlign: "center",
          width: "100%",
          marginTop: "10px",
        }}
      >
        © 2024 Your Company. All rights reserved.
      </Typography>
    </Box>
  );
};

export default FooterPartUi;
