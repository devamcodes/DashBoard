import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";
import { Button, IconButton, Typography } from "@mui/material";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
// Generate Order Data
function createData(id, name) {
  return { id, name };
}

const rows = [
  createData(0, "Elvis Presley"),
  createData(1, "Paul McCartney"),
  createData(2, "Tom Scholz"),
  createData(3, "Michael Jackson"),
  createData(4, "Bruce Springsteen"),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>
                <Button style={{ color: "black" }}>
                  <AutoStoriesOutlinedIcon />
                  <Typography
                    style={{ fontSize: "12px", fontWeight: 500, marginLeft: 8 }}
                  >
                    {row.name}
                  </Typography>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
