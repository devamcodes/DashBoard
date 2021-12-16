import React, { useMemo } from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { mainListItems } from "./listItems";
import CourseInDemand from "./CourseInDemand";
import { Avatar } from "@mui/material";
import RoundChart from "./Pie";
import Search from "./Search";
import ToggleSwitch from "./ToggleSwitch";
import Graphics from "./Bars";
import { dataBase } from "./DataBase";
import Stats from "./Stats";
const columns = [
  {
    dataIndex: "Clientes",
    fill: "blue",
  },
  {
    dataIndex: "Funcionários",
    fill: "#03BFFF",
  },
];

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const mdTheme = createTheme();

function DashboardContent() {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const menuId = "primary-search-account-menu";

  const newData = useMemo(() => {
    return dataBase.map((value) => ({
      id: value.id,
      Clientes: value.clients,
      Funcionários: value.employees,
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataBase]);
  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="absolute"
          open={open}
          style={{ backgroundColor: "#fff", color: "#0073cf" }}
        >
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>

            <Search />
            <Box sx={{ flexGrow: 1 }} />

            <IconButton color="inherit">
              <NotificationsIcon />
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              color="inherit"
              style={{ justifyContent: "space-between" }}
            >
              {/* User Profile pic */}
              <Avatar alt="user" src="./components/Image1.jpg" />

              <Typography
                style={{
                  fontWeight: 400,
                  marginLeft: 6,
                  fontSize: "20px",
                  fontFamily: "monospace",
                }}
              >
                User-Name
              </Typography>
            </IconButton>
          </Toolbar>
        </AppBar>
        {/* Drawer */}
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <Typography style={{ fontWeight: 600, fontFamily: "cursive" }}>
              Site_Logo
            </Typography>
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List>{mainListItems}</List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "auto",
            overflow: "auto",
          }}
        >
          <Toolbar />
          {/* Greeting section */}
          <Grid container>
            <Grid item>
              <Paper
                sx={{
                  p: 2,
                  m: 2,
                  width: "160vh",
                  height: 70,
                }}
              >
                Hello, User
              </Paper>
            </Grid>
            <Grid item>
              <Paper
                sx={{
                  p: 2,
                  m: 2,
                  width: "20vh",
                  height: 70,
                }}
              >
                DownLoad
              </Paper>
            </Grid>
          </Grid>

          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 0,
                    display: "flex",
                    flexDirection: "column",
                    height: 240,
                  }}
                >
                  <Typography
                    style={{ fontWeight: 600, fontFamily: "sans-serif" }}
                  >
                    Course
                  </Typography>
                  <RoundChart />
                </Paper>
              </Grid>
              {/* stats */}
              <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 240,
                  }}
                >
                  <Grid
                    container
                    direction="row"
                    justifyContent={"space-between"}
                  >
                    <Grid item>
                      <Typography
                        style={{ fontWeight: 600, fontFamily: "sans-serif" }}
                      >
                        Statistics
                      </Typography>
                      <Typography
                        style={{
                          fontWeight: 500,
                          fontFamily: "sans-serif",
                          fontSize: "14px",
                        }}
                      >
                        OverView
                      </Typography>
                    </Grid>
                    <Grid item>
                      <ToggleSwitch />
                    </Grid>
                  </Grid>
                  <Stats />
                </Paper>
              </Grid>

              {/* Courses */}
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 0,
                    display: "block",
                    height: 240,
                  }}
                >
                  <Grid item xs={12}>
                    <Typography
                      style={{ fontWeight: 600, fontFamily: "sans-serif" }}
                    >
                      Course in Demand
                    </Typography>

                    <Paper
                      sx={{ p: 2, display: "flex", flexDirection: "column" }}
                    >
                      <CourseInDemand />
                    </Paper>
                  </Grid>
                </Paper>
              </Grid>
              {/* Graph */}
              <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 340,
                  }}
                >
                  <Graphics dataBar={newData} columnsBar={columns} />
                </Paper>
              </Grid>
            </Grid>
            {/* Announcements */}
            <Grid container spacing={8} direction="row">
              <Grid item xs={16} md={6} lg={3.5}>
                <Paper
                  sx={{
                    p: 2,
                    mt: 2,
                    mr: 2,
                    display: "flex",
                    // flexDirection: "column",
                    height: 240,
                  }}
                >
                  <Typography
                    style={{ fontWeight: 600, fontFamily: "sans-serif" }}
                  >
                    Announcements
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={16} md={6} lg={3.5}>
                <Paper
                  sx={{
                    p: 2,
                    mt: 2,
                    mr: 2,
                    display: "flex",
                    // flexDirection: "column",
                    height: 240,
                  }}
                >
                  <Typography
                    style={{ fontWeight: 600, fontFamily: "sans-serif" }}
                  >
                    Recent Activity
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={16} md={6} lg={3.5}>
                <Paper
                  sx={{
                    p: 2,
                    mt: 2,
                    mr: 2,
                    display: "flex",
                    // flexDirection: "column",
                    height: 240,
                  }}
                >
                  <Typography
                    style={{ fontWeight: 600, fontFamily: "sans-serif" }}
                  >
                    Recent Activity
                  </Typography>
                </Paper>
              </Grid>
            </Grid>

            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
