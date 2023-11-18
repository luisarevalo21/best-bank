import React, { useEffect, useState } from "react";
import { fetchStockData } from "../utilities/api";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

//to do fetch data from data base
//find out where i want to fetch from
/// next have a catch incase an error occurs
//if fetching to much occurs. add a messgaing saying wait 1 minute to fetch.

//fetch two stocks instead of jsut one figure out to fetch using an array of fetches
const Stocks = () => {
  const [stock, setStock] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    async function fetchData() {
      fetchStockData()
        .then(data => setStock(data))
        .catch(err => setError(err));
    }
    fetchData();
  }, []);

  const data = stock.map(row => (
    <TableRow key={row.name}>
      <TableCell component="th" scope="row">
        {row.T}
      </TableCell>
      <TableCell align="center">{row.c}</TableCell>
      <TableCell align="center">{row.h}</TableCell>
      <TableCell align="center">{row.l}</TableCell>
      <TableCell align="center">{row.o}</TableCell>
      <TableCell align="center">{row.v}</TableCell>
      <TableCell align="center">{row.vw}</TableCell>
    </TableRow>
  ));

  //
  console.log("STOCK", stock);
  return (
    <div>
      <h3>Notable stocks for : insert data here </h3>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="center">Closing Price</TableCell>
              <TableCell align="center">Highest Sold Price on insert date</TableCell>
              <TableCell align="center">Lowest Sold Price on insert date</TableCell>
              <TableCell align="center">Open price on insert date </TableCell>
              <TableCell align="center">The trading volume of the symbol</TableCell>
              <TableCell align="center">Volume weighted average price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {error ? (
              <TableCell align="center" colSpan="7">
                <h1 style={{ textAlign: "center" }}>{error.error}</h1>
              </TableCell>
            ) : (
              data
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Stocks;
