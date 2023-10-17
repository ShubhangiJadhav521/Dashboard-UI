import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';

const lightColor = "rgba(255, 255, 255, 0.7)";

function Header(props) {
  const { onDrawerToggle } = props;

  return (
    <React.Fragment>
      <div style={{ backgroundColor: '#eaeff1' }}>
        <Grid container spacing={1} alignItems="center" style={{ padding: '10px' }}>
          <Grid sx={{ display: { sm: 'none', xs: 'block' } }} item>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={onDrawerToggle}
              edge="start"
            >
              <MenuIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Grid container alignItems="center" style={{ display: 'flex', justifyContent: "space-between", alignContent: "center", padding: '30px' }}>
          <Grid item>
            <Typography>Hello Shaharukh 👋</Typography>
          </Grid>
          <Grid style={{ display: "flex", alignItems: "center", backgroundColor: '#fff', boxShadow: "2px", marginTop: '2px' }}>
            <Grid item>
              <SearchIcon color="inherit" sx={{ display: "block" }} />
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
        </Grid>
      </div>
    </React.Fragment>
  );
}

Header.propTypes = {
  onDrawerToggle: PropTypes.func.isRequired,
};

export default Header;
