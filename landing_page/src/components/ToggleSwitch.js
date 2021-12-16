import React, { useState } from "react";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { Box, Grid, Menu, MenuItem, Button, Typography } from "@mui/material";

export default function ToggleSwitch() {
  //   const TimeSlots = ["Year", "Month", "Day"];
  const [anchorElUser, setAnchorElUser] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [timeSlots, useTimeSlots] = useState(["Year", "Month", "Day"]);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <Grid>
      <FormControl component="fieldset">
        <FormGroup aria-label="position" row>
          <FormControlLabel
            value="start"
            control={<Switch color="primary" />}
            label="Graph"
            labelPlacement="start"
          />
        </FormGroup>
      </FormControl>
      <Box>
        <Button onClick={handleOpenUserMenu}>
          <Typography
            style={{
              fontWeight: 500,
              fontFamily: "sans-serif",
              fontSize: "14px",
              color: "black",
            }}
          >
            Show
          </Typography>
        </Button>
        <Menu
          sx={{ mt: "45px" }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          {timeSlots.map((TimeSlot) => (
            <MenuItem key={TimeSlot}>
              <Grid xs={2} md={1} lg={1}>
                <Button onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{TimeSlot}</Typography>
                </Button>
              </Grid>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </Grid>
  );
}
