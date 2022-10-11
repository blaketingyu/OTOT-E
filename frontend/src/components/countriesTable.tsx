import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { axiosCountries } from "../utils/axios.utils";
import { CountriesSchema } from "../types/countries.model";

export default function CountriesTable() {
  const [countries, setCountries] = useState([]);
  const getCountries = () => {
    axiosCountries.get("/GetCountries").then((res) => {
      setCountries(res.data);
    });
  };

  useEffect(() => getCountries, []);

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Capital</TableCell>
              <TableCell align="right">Region</TableCell>
              <TableCell align="right">Area</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {countries.map((row: CountriesSchema) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.capital}</TableCell>
                <TableCell align="right">{row.region}</TableCell>
                <TableCell align="right">{row.area}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="py-10 flex justify-center items-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          <input
            type="button"
            value="Refresh Countries List"
            onClick={getCountries}
          />
        </button>
      </div>
    </div>
  );
}
