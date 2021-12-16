import {
  Typography,
  Grid,
  Box,
  TextField,
  Paper,
  Chip,
  Divider,
} from "@mui/material";
import React from "react";
import PublicIcon from "@mui/icons-material/Public";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import InsertChartOutlinedTwoToneIcon from "@mui/icons-material/InsertChartOutlinedTwoTone";
import QuizOutlinedIcon from "@mui/icons-material/QuizOutlined";
import AccessAlarmOutlinedIcon from "@mui/icons-material/AccessAlarmOutlined";
function Stats() {
  return (
    <>
      <Grid
        container
        spacing={10}
        direction={"row"}
        justifyContent={"space-evenly"}
      >
        <Grid item>
          <Grid item style={{ marginBottom: "5px" }}>
            {/* <Paper elevation={3} sx={{ p: 2 }}> */}
            {/* <Chip */}
            <Box
              style={{
                // backgroundColor: "lightgreen",
                width: "30px",
                borderRadius: "40%",
                display: "flex",
                flexDirection: "row",
                justifyContents: "center",
                //   marginRight: "10px",
              }}
            >
              <PublicIcon />
              <Typography sx={{ ml: 1 }}>
                207{" "}
                <Typography color="error" style={{ fontSize: "12px" }}>
                  {" "}
                  -27.9%
                </Typography>
              </Typography>
            </Box>
            <Typography style={{ fontSize: "14px", color: "grey" }}>
              Active Users
            </Typography>
            {/* </Paper> */}
          </Grid>
          <Divider style={{ backgroundColor: "black", marginBottom: "5px" }} />
          <Grid item>
            <Box
              style={{
                // backgroundColor: "lightgreen",
                width: "30px",
                borderRadius: "40%",
                display: "flex",
                flexDirection: "row",
                justifyContents: "center",
                //   marginRight: "10px",
              }}
            >
              <PeopleAltOutlinedIcon />
              <Typography sx={{ ml: 1 }}>
                207{" "}
                <Typography color="error" style={{ fontSize: "12px" }}>
                  {" "}
                  -27.9%
                </Typography>
              </Typography>
            </Box>
            <Typography style={{ fontSize: "14px", color: "grey" }}>
              Total Enrolled{" "}
            </Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Grid item style={{ marginBottom: "5px" }}>
            <Box
              style={{
                // backgroundColor: "lightgreen",
                width: "30px",
                borderRadius: "40%",
                display: "flex",
                flexDirection: "row",
                justifyContents: "center",
                //   marginRight: "10px",
              }}
            >
              <ContentPasteIcon />
              <Typography sx={{ ml: 1 }}>
                207{" "}
                <Typography color="error" style={{ fontSize: "12px" }}>
                  {" "}
                  -27.9%
                </Typography>
              </Typography>
            </Box>
            <Typography style={{ fontSize: "14px", color: "grey" }}>
              Average quiz score
            </Typography>
          </Grid>
          <Divider style={{ backgroundColor: "black", marginBottom: "5px" }} />

          <Grid item>
            <Box
              style={{
                // backgroundColor: "lightgreen",
                width: "30px",
                borderRadius: "40%",
                display: "flex",
                flexDirection: "row",
                justifyContents: "center",
                //   marginRight: "10px",
              }}
            >
              <InsertChartOutlinedTwoToneIcon />
              <Typography sx={{ ml: 1 }}>
                207{" "}
                <Typography color="error" style={{ fontSize: "12px" }}>
                  {" "}
                  -27.9%
                </Typography>
              </Typography>
            </Box>
            <Typography style={{ fontSize: "14px", color: "grey" }}>
              Attendence
            </Typography>
          </Grid>
        </Grid>

        <Grid item>
          <Grid item style={{ marginBottom: "5px" }}>
            <Box
              style={{
                // backgroundColor: "lightgreen",
                width: "30px",
                borderRadius: "40%",
                display: "flex",
                flexDirection: "row",
                justifyContents: "center",
                //   marginRight: "10px",
              }}
            >
              <QuizOutlinedIcon />
              <Typography sx={{ ml: 1 }}>
                207{" "}
                <Typography color="error" style={{ fontSize: "12px" }}>
                  {" "}
                  -27.9%
                </Typography>
              </Typography>
            </Box>
            <Typography style={{ fontSize: "14px", color: "grey" }}>
              Total Question resolved
            </Typography>
          </Grid>
          <Divider style={{ backgroundColor: "black", marginBottom: "5px" }} />

          <Grid item>
            <Box
              style={{
                // backgroundColor: "lightgreen",
                width: "30px",
                borderRadius: "40%",
                display: "flex",
                flexDirection: "row",
                justifyContents: "center",
                //   marginRight: "10px",
              }}
            >
              <AccessAlarmOutlinedIcon />
              <Typography sx={{ ml: 1 }}>
                40hr:22min:00sec
                <Typography color="error" style={{ fontSize: "12px" }}>
                  {" "}
                  -27.9%
                </Typography>
              </Typography>
            </Box>
            <Typography style={{ fontSize: "14px", color: "grey" }}>
              Total hours spent
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Stats;
