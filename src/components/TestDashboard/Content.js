import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Barchart from "./barchart";
import "./content.css";
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import NorthOutlinedIcon from '@mui/icons-material/NorthOutlined';
import TableBottom from './TableBottom';
import PieChart from "./PieChart";
export default function Content() {
  return (
    <div >

      <Grid container spacing={2} >
        <Grid item xs={12} sm={6} md={3} xl={3} >
          <Paper elevation={0} className="paper" >
            <div className="Circle" style={{ backgroundColor: '#dcffeb' }}>
              <CurrencyExchangeIcon style={{ fontSize: '50px', color: '#00ab4d' }} />
            </div>
            <div style={{ textAlign: 'left', marginTop: '20px' }}>
              <Typography style={{ fontSize: '10px', color: '#a7a8aa' }}>Earning</Typography>
              <Typography style={{ fontSize: '20px', fontWeight: 'bold' }}>$198k</Typography>
              <Typography style={{ fontSize: '10px' }}><span style={{ color: '#00ab4d' }}><NorthOutlinedIcon style={{ fontSize: '10px' }} />37.8% </span>this month</Typography>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3} xl={3}>
          <Paper elevation={0} className="paper">
            <div className="Circle" style={{ backgroundColor: '#e7dbff' }}>
              <ArticleOutlinedIcon style={{ fontSize: '50px', color: '#bc50ff' }} />
            </div>
            <div style={{ textAlign: 'left', marginTop: '20px' }}>
              <Typography style={{ fontSize: '10px', color: '#a7a8aa' }}>Order</Typography>
              <Typography style={{ fontSize: '20px', fontWeight: 'bold' }}>$2.4k</Typography>
              <Typography style={{ fontSize: '10px' }}><span style={{ color: '#d7010e' }}><NorthOutlinedIcon style={{ fontSize: '10px' }} />2% </span>this month</Typography>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3} xl={3}>
          <Paper elevation={0} className="paper">
            <div className="Circle" style={{ backgroundColor: '#ccf2ff' }}>
              < AccountBalanceOutlinedIcon style={{ fontSize: '50px', color: '#2872c9' }} />
            </div>
            <div style={{ textAlign: 'left', marginTop: '20px' }}>
              <Typography style={{ fontSize: '10px', color: '#a7a8aa' }}>Balance</Typography>
              <Typography style={{ fontSize: '20px', fontWeight: 'bold' }}>$2.4k</Typography>
              <Typography style={{ fontSize: '10px' }}><span style={{ color: '#d7010e' }}><NorthOutlinedIcon style={{ fontSize: '10px' }} />2% </span>this month</Typography>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3} xl={3}>
          <Paper elevation={0} className="paper">
            <div className="Circle" style={{ backgroundColor: '#ffaed7' }}>
              <WorkOutlineOutlinedIcon style={{ fontSize: '50px', color: '#d7010e' }} />
            </div>
            <div style={{ textAlign: 'left', marginTop: '20px' }}>
              <Typography style={{ fontSize: '10px', color: '#a7a8aa' }}>Total Sales</Typography>
              <Typography style={{ fontSize: '20px', fontWeight: 'bold' }}>$89k</Typography>
              <Typography style={{ fontSize: '10px' }}><span style={{ color: '#00ab4d' }}><NorthOutlinedIcon style={{ fontSize: '10px' }} />11% </span>this month</Typography>
            </div>
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={2} className="Grid2" style={{ marginTop: '10px' }} >
        <Grid item xs={12} sm={6} md={7} xl={7} >
          <Paper elevation={0} >
            <Barchart />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={5} xl={5}>
          <Paper elevation={0}>
            <PieChart />
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={2} style={{ marginTop: '10px' }}>
        <Grid item xs={12}>
          <Paper elevation={0}>
            <TableBottom />
          </Paper>

        </Grid>

      </Grid>

    </div>
  );
}
