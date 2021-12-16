import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <HomeOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BookOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Course" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Specifications" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Performance" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ShoppingCartOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Cart" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SettingsOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Settings" />
    </ListItem>
  </div>
);
