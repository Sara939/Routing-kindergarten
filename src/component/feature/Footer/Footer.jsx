import "./Footer.css";
import React from "react";
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import PhoneIphoneRoundedIcon from '@mui/icons-material/PhoneIphoneRounded';
import AttachEmailRoundedIcon from '@mui/icons-material/AttachEmailRounded';
import AccessAlarmRoundedIcon from '@mui/icons-material/AccessAlarmRounded';

export default function Footer() {
  const [value, setValue] = React.useState(0);

  return (
    <Box  sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}  elevation={3}>
      <BottomNavigation
        showLabels
        value={value}
        sty
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction  label="phone" icon={<PhoneIphoneRoundedIcon/>} />
        <BottomNavigationAction label="email" icon={<AttachEmailRoundedIcon/>} />
        <BottomNavigationAction label="time" icon={<AccessAlarmRoundedIcon/>} />
      </BottomNavigation>
    </Box>
  );
}

// function Footer() {
//   return (
//     <div className="footer">
//       <h1>Footer</h1>
//     </div>
//   );
// };

// export default Footer;
