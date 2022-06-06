import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import SettingsRemoteIcon from "@material-ui/icons/SettingsRemote";
import PrintIcon from "@material-ui/icons/Print";
import BookIcon from "@material-ui/icons/Book";
import BatteryChargingFullIcon from "@material-ui/icons/BatteryChargingFull";
import React from "react";

const MenuItem = ({ text, index }) => {
  return (
    <ListItem button key={text}>
      <ListItemIcon>
        {index === 0 && <VideocamIcon />}.
        {index === 1 && <SettingsRemoteIcon />}
        {index === 2 && <BatteryChargingFullIcon />}
        {index === 3 && <BookIcon />}
        {index === 4 && <PrintIcon />}
      </ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  );
};

export default MenuItem;
