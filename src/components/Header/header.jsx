import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" component="div" sx={{ flexGrow: 4 }}>
            News
          </Typography>
          <input
            style={{
              padding: "10px",
            }}
            type="text"
            placeholder="search..."
          />
          <Button color="inherit">Login</Button>
          <Typography variant="h6">
            <h3>adahan</h3>
            <p>elmir</p>

            {/* <p style={{
                width:'90px'
            }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In laboriosam mollitia saepe iure deleniti voluptates earum molestiae distinctio reprehenderit tempora architecto quam, illum aut doloremque tempore ipsam assumenda, exercitationem deserunt tenetur maxime culpa sequi non? Ipsam nesciunt mollitia autem impedit.</p> */}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
