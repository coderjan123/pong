import React from 'react';
import {
  Table, TableBody, TableCell, tableCellClasses,
  TableContainer, TableHead, TableRow, Paper, styled
} from '@mui/material';
import { FontDownloadRounded } from '@mui/icons-material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    fontSize: 'clamp(1rem, 3vw, 3rem)',
    
    backgroundColor: 'black',
    color: 'white',
    minHeight: "500px",
     maxWidth: '400px',          
    overflow: 'hidden',          
    textOverflow: 'ellipsis',  
    transition: 'background-color 0.3s ease',  
    '&:hover': {
      backgroundColor: 'rgb(24, 24, 24)',}
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 'clamp(1rem, 2vw, 3rem)',
    transition: 'background-color 0.3s ease',

    backgroundColor: 'rgb(60, 60, 60)',
    '&:hover': {
      backgroundColor: 'rgb(99, 99, 99)',},
    color: 'white',
    minHeight: "500px",
     maxWidth: '400px',          
    overflow: 'hidden',          
    textOverflow: 'ellipsis',    
    
  },
}));

export default function BasicTable() {
  return (
    <TableContainer component={Paper} sx={{
    width: '100%',
    overflowX: 'hidden',
    overflowY: 'hidden',
    maxWidth: "1455px",
    className: "Table_Basic",
    marginLeft: "3px",
    marginTop: "8px"
  }}
>
      <Table sx={{ '&:last-child td, &:last-child th': { border: '1px solid white' } }}>
        <TableHead>
          <TableRow>
            <StyledTableCell>Gut Gelaufen</StyledTableCell>
            <StyledTableCell>Schlecht Gelaufen</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <StyledTableCell>Internet blieb Intakt</StyledTableCell>
            <StyledTableCell>20 Jahre lang Legos suchen</StyledTableCell>
          </TableRow>
          <TableRow>
            <StyledTableCell>Keine Physischen Schäden</StyledTableCell>
            <StyledTableCell>signifikante mentale Belastung</StyledTableCell>
          </TableRow>
          <TableRow>
            <StyledTableCell>
              Die grüne Flagge wurde als zentraler Steuermechanismus erkannt
            </StyledTableCell>
            <StyledTableCell>
              2 Tasten Gleichzeitig zu registrieren waren zu viel für Scratch ):
            </StyledTableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
