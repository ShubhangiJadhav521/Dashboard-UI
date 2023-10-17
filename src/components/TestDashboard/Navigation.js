import * as React from 'react';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import DnsRoundedIcon from '@mui/icons-material/DnsRounded';
import PermMediaOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActual';
import PublicIcon from '@mui/icons-material/Public';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';
import TimerIcon from '@mui/icons-material/Timer';
import SettingsIcon from '@mui/icons-material/Settings';
import PhonelinkSetupIcon from '@mui/icons-material/PhonelinkSetup';
import ArrowForward from '@mui/icons-material/ArrowForwardIosOutlined';
import HexagonOutlinedIcon from '@mui/icons-material/HexagonOutlined';
import DashboardIcon from '@mui/icons-material/DashboardOutlined';
import PolicyOutlinedIcon from '@mui/icons-material/PolicyOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOnOutlined';
import BrightnessIcon from '@mui/icons-material/BrightnessHighOutlined';
import HelpIcon from '@mui/icons-material/HelpOutlineOutlined';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Profile from "./Images/girl.jpg"
import "./content.css";

const categories = [

  {
    id: 'Dasboard',
    icon: <DashboardIcon />,
    active: true,
  },
  { id: 'Product', icon: <PolicyOutlinedIcon /> },
  { id: 'Customers', icon: <AccountBoxOutlinedIcon /> },
  { id: 'Income', icon: <MonetizationOnIcon /> },
  { id: 'Promote', icon: <BrightnessIcon /> },
  {
    id: 'Help',
    icon: <HelpIcon />,
  },


];

const item = {
  py: '2px',
  px: 3,
  color: 'rgba(255, 255, 255, 0.7)',
  '&:hover, &:focus': {
    bgcolor: 'rgba(255, 255, 255, 0.08)',
  },
};

const itemCategory = {
  boxShadow: '0 -1px 0 rgb(255,255,255,0.1) inset',
  py: 1.5,
  px: 3,
};

export default function Navigator(props) {
  const { ...other } = props;

  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem sx={{ ...item, ...itemCategory, fontSize: 22, color: '#fff' }}>
          <ListItemIcon><HexagonOutlinedIcon /></ListItemIcon>
          Dashboard
        </ListItem>
        <Box sx={{ padding: '20px 0' }}>
          {categories.map(({ id, icon, active }) => (
            <ListItem disablePadding key={id} style={{ margin: '20px 0' }}>
              <ListItemButton selected={active} sx={item}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText>{id}</ListItemText>
                <Box> <ListItemIcon ><ArrowForward style={{ fontSize: '13px' }} /></ListItemIcon></Box>
              </ListItemButton>
            </ListItem>
          ))}
        </Box>

      </List>
      {/* Accordion at the bottom */}
      <div style={{ position: 'absolute', bottom: 10, left: 0, right: 0, padding: '10px' }}>
        {/* Accordion at the bottom */}
        <Accordion className='accordion' style={{ backgroundColor: '#2d2d69', height: '50px', alignItems: 'center' }} >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: '#a7a8aa' }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <div style={{ display: "flex", alignContent: 'center' }}>
              <img alt="Cindy Baker" src={Profile} height={30} width={30} style={{ borderRadius: '50%', marginTop: '9px', objectFit: 'cover' }} />
              <div style={{ textAlign: 'left', paddingLeft: '7px' }}>
                <Typography variant="caption" style={{ color: '#a7a8aa', fontWeight: 'bold' }}>Evano</Typography><br />
                <Typography variant="caption" style={{ color: '#a7a8aa' }}>Project Manager</Typography>
              </div>
            </div>
          </AccordionSummary>

        </Accordion>
      </div>
    </Drawer>
  );
}