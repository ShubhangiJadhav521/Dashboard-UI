import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import Grid from "@mui/material/Grid";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Img1 from "./Images/img1.jpg";
import Img2 from "./Images/img2.jpg";
import "./content.css";
function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),


    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
                <div>
                    <Typography style={{ fontWeight: 'bold' }}>Product Sell</Typography>
                </div>
                <div style={{ display: "flex", gap: '10px' }}>
                    <Grid style={{ display: "flex", alignItems: "center", backgroundColor: '#fafbff', boxShadow: "2px", }}>
                        <Grid item>
                            <SearchIcon color="inherit" sx={{ display: "block", fontSize: '15px' }} />
                        </Grid>
                        <Grid item xs>
                            <TextField
                                fullWidth
                                placeholder="Search "
                                InputProps={{
                                    disableUnderline: true,
                                    sx: { fontSize: "default" },
                                }}
                                variant="standard"
                            />

                        </Grid>
                    </Grid>
                    <Accordion style={{ width: '120px', height: '40px', alignItems: 'center', backgroundColor: '#fafbff', boxShadow: 'none', height: '20px' }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography style={{ color: '#a7a8aa', fontSize: '12px' }}>Quarterly</Typography>
                        </AccordionSummary>
                    </Accordion>

                </div>
            </div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow >
                            <TableCell style={{ color: '#a7a8aa' }}>Product Name</TableCell>

                            <TableCell align="right" style={{ color: '#a7a8aa' }}>Stock</TableCell>
                            <TableCell align="right" style={{ color: '#a7a8aa' }}>Price</TableCell>
                            <TableCell align="right" style={{ color: '#a7a8aa' }}>Total Sales</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row" style={{ display: 'flex' }}>
                                <img src={Img1} alt='img1' height={40} width={50} />
                                <div>
                                    Abstract 3D<br />
                                    <span style={{ color: '#a7a8aa' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                                </div>


                            </TableCell>

                            <TableCell align="right"> 32 in stock</TableCell>
                            <TableCell align="right">$45.99</TableCell>
                            <TableCell align="right">20</TableCell>
                        </TableRow>
                        <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >

                            <TableCell component="th" scope="row" style={{ display: 'flex' }}>
                                <img src={Img2} alt='img1' height={40} width={50} />
                                <div>
                                    Sarphens lllustration<br />
                                    <span style={{ color: '#a7a8aa' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                                </div>


                            </TableCell>

                            <TableCell align="right"> 32 in stock</TableCell>
                            <TableCell align="right">$45.99</TableCell>
                            <TableCell align="right">20</TableCell>
                        </TableRow>

                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}