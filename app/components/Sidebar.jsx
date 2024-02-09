import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Slider } from "@mui/material";
import Typography from '@mui/material/Typography';


export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem>
          <Box sx={{width: 250 }}>
            <Typography variant="h6" gutterBottom>
              Heart Rate
              </Typography>
            <Slider
              size="small"
              aria-label="Temperature"
              defaultValue={30}
              valueLabelDisplay="auto"
              step={10}
              marks
              min={60}
              max={120}
            />
          </Box>
        </ListItem>
      </List>
      <Divider />
      <List>
      <ListItem>
          <Box sx={{width: 250 }}>
            <Typography variant="h6" gutterBottom>
              Body Temperature
              </Typography>
            <Slider
              size="small"
              aria-label="Temperature"
              defaultValue={30}
              valueLabelDisplay="auto"
              step={0.5}
              marks
              min={36}
              max={38}
            />
          </Box>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(anchor, true)}
          >
            <MenuIcon />
          </IconButton>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
