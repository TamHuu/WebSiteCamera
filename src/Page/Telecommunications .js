import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    cursor: "pointer",

    "&:hover": {
      opacity: "0.5",
    },
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
    cursor: "pointer",
  },
}));

const Tele = [
  {
    id: 1,
    name: "Bộ thu phát Wifi cho Camera",
    img: "https://baophong.vn/wp-content/uploads/2020/07/bo-thu-phat-tin-hieu-trong-thang-may-hikvision-DS-3WF01C-2N.jpg",
    desc: "Sản phẩm camera giám sát KBVISION KB.ONE KN-H41P là một trong những thiết bị camera nổi bật đến từ thương hiệu KBVISION.",
  },

  {
    id: 2,
    name: "Bộ phát wifi không dây iziFi AC Outdoor (AP1200)",
    img: "https://baophong.vn/wp-content/uploads/2019/09/iziFi-AC-Outdoor-768x576.jpg",
    desc: "Với khả năng quay ngang 355°- quay dọc 55°, C6N 2MP sẽ giúp bạn ghi hình lại toàn bộ mọi hoạt động ở bất cứ vị trí nào. Camera 360 độ hứa hẹn sẽ mang đến cho bạn tất cả mọi khoảnh khắc.",
  },
];

export default function Telecom() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            TRUNG KIEN CAMERA
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Bình ắc quy lưu trữ điện
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Camera IP có giá thành hợp lý, mang đến chất lượng sử dụng cao,
              đáp ứng tốt nhu cầu người dùng, giúp người dùng điều khiển từ xa
              tiện lợi.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item></Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {Tele.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    style={{ padding: "118px 0", height: "300px" }}
                    className={classes.cardMedia}
                    image={card.img}
                    title="Image title"
                    name={card.name}
                    desc={card.desc}
                    id={card.id}
                  />

                  <CardContent className={classes.cardContent}>
                    <Typography style={{ color: "red", fontSize: "20px" }}>
                      {card.name}
                    </Typography>
                    <Typography>{card.desc}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="medium" color="primary">
                      xem chi tiết sản phẩm
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h3" align="center" gutterBottom>
          TRUNG KIEN
        </Typography>
        <div className="container-text">
          <Typography
            variant="subtitle1"
            align="center"
            color="textSecondary"
            component="p"
          >
            Địa chỉ:xã Long Thuận,Tây Ninh
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="textSecondary"
            component="p"
          >
            Email:TrungKien@gmail.com
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="textSecondary"
            component="p"
          >
            SDT: 0766540244
          </Typography>
        </div>
      </footer>
    </React.Fragment>
  );
}
