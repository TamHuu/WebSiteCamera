import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import BatteryChargingFullIcon from "@material-ui/icons/BatteryChargingFull";
import Album from "./Album";
import { Avatar } from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import SettingsRemoteIcon from "@material-ui/icons/SettingsRemote";
import PrintIcon from "@material-ui/icons/Print";
import BookIcon from "@material-ui/icons/Book";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function ClippedDrawer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <div
            className="container"
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h6" noWrap>
              Camera IP,Vật Tư Thiết Bị Viễn Thông, Bình Ắc Quy Lưu Trữ Điện.
              UPS, Tủ RACK Và Máy In Pantum
            </Typography>
            <div style={{ display: "flex" }}>
              <Typography style={{ lineHeight: "37px", padding: "0 20px" }}>
                TRUNG KIEN
              </Typography>
              <Avatar src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2022/4/1/photo-1-164880954522951499369.png"></Avatar>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            {[
              "Camera IP",

              "Vật Tư Thiết Bị Viễn Thông",

              "Bình Ắc Quy Lưu Trữ Điện",

              "UPS,Tủ Rack",
              "Máy in",
            ].map((text, index) => (
              <ListItem button key={index}>
                <ListItemIcon>
                  {index === 0 && <VideocamIcon />}
                  {index === 1 && <SettingsRemoteIcon />}
                  {index === 2 && <BatteryChargingFullIcon />}
                  {index === 3 && <BookIcon />}
                  {index === 4 && <PrintIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
        </div>
      </Drawer>
      <main className={classes.content}>
        <Album />
      </main>
    </div>
  );
}
