import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CameraIcon from "@material-ui/icons/PhotoCamera";
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
import SignInSide from "./SignInSide";
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
  },
}));

const cards = [
  {
    id: 1,
    name: "KN-H21PA",
    img: "https://scontent.fsgn8-1.fna.fbcdn.net/v/t39.30808-6/285280888_5463033740414948_4545125452146121791_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=0debeb&_nc_ohc=NO4F9mez4VEAX-9OcDl&_nc_ht=scontent.fsgn8-1.fna&oh=00_AT9ouCaGnAUhbH0OVnUtz1P7h0XLqM_dgu0nGOBFBndrDw&oe=629C9527",
    desc: "Sản phẩm camera giám sát KBVISION KB.ONE KN-H41P là một trong những thiết bị camera nổi bật đến từ thương hiệu KBVISION.",
  },

  {
    id: 2,
    name: "Ezviz C6N 1080P",
    img: "https://scontent.fsgn3-1.fna.fbcdn.net/v/t39.30808-6/285237108_5463034443748211_8788695431355048861_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=0debeb&_nc_ohc=K0BfG2l5NHQAX_dKFxG&_nc_ht=scontent.fsgn3-1.fna&oh=00_AT_y2bCqkx_hBCp_HY7fBhZZjqL5vMPHbjpIixDUhV9YJA&oe=629D06AC",
    desc: "Với khả năng quay ngang 355°- quay dọc 55°, C6N 2MP sẽ giúp bạn ghi hình lại toàn bộ mọi hoạt động ở bất cứ vị trí nào. Camera 360 độ hứa hẹn sẽ mang đến cho bạn tất cả mọi khoảnh khắc.",
  },
  {
    name: " Hikvision DS-2CD1123G0E-I",
    id: 3,
    img: "https://scontent.fsgn8-1.fna.fbcdn.net/v/t39.30808-6/285222220_5463034220414900_6895965939539074484_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=0debeb&_nc_ohc=C4aAuo8YnmoAX-PiO8c&_nc_ht=scontent.fsgn8-1.fna&oh=00_AT-LyZYeFnNBnJtw4gbpDyMZcqX-P-oHWB-KIkX8q9WrGg&oe=629DD7A8",
    desc: "Chế độ hồng ngoại tầm nhìn 10m Hai đèn LED hồng ngoại có trên Camera C6N 2MP mang đến những thước phim quay vào ban đêm chi tiết hơn.",
  },
  {
    name: " Ezviz C3WN",
    id: 4,
    img: "https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/285295831_5463034300414892_361538297667109952_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=0debeb&_nc_ohc=Ou1hjC7s8fMAX-RusMB&tn=zfXWngEsrQZ0x8Kk&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT92_jiT7eE3ICh_c8aOlt2hvp4R0ad6JFhVaPTIv25O2A&oe=629C2060",
    desc: "Nhờ tính năng đàm thoại 2 chiều trên camera trong nhà C6N 2.0 megapixel, người dùng có thể trò chuyện từ xa với người thân bạn bè ngay trên ứng dụng Ezviz tiện lợi.",
  },
  {
    name: "Hikvision DS-2CD1123G0E-I",
    id: 5,
    img: "https://cdn.tgdd.vn/Files/2021/08/02/1372539/camera-ip-la-gi-uu-nhuoc-diem-va-phan-loai-camer-4.jpg",
    desc: "Với sản phẩm camera không dây C6N 1080P, chúng ta có thể lựa chọn lắp đặt cho bất cứ vị trí nào như treo tường, gắn trần, để bàn,....",
  },
  {
    name: "VDTECH VDT-450TVI",
    id: 6,
    img: "https://gotechcamera.com/wp-content/uploads/2018/04/yeu-cau-ky-thuat-he-thong-camera-ip.jpg",
    desc: "Khi có chuyển động đi qua, camera giám sát sẽ chủ động ghi hình và thông báo về điện thoại kèm theo đó là hình ảnh kèm theo để bạn chủ động xử lý tình huống ",
  },
  {
    name: "Camera Ezviz C2C",
    id: 7,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9VjsSbGK4pW5XiK-gnVQAsjlLNH3EEOPBPw&usqp=CAU",
    desc: "Khi bạn vào app Ezviz bật chức năng này lên thì đồng nghĩa camera sẽ dừng quay hình và ẩn ống kính về phía sau, phù hợp mỗi khi bạn ở nhà mà không có muốn bị làm phiền bởi camera.",
  },
  {
    name: "IMOU IPC-A22EP-IMOU",
    id: 8,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdx4n1gvdASViHXF5WkTFDYekPb4e8yguQTg&usqp=CAU",
    desc: "Camera Ezviz C6N 1080P có khả năng kết nối bằng cả wifi và mạng LAN, sử dụng cổng kết nối USB thông dụng.",
  },
  {
    name: " Ezviz C1C",
    id: 9,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStxjKq-NLgyr2IcvxxVzDNTNPwbSL3zKCnuQ&usqp=CAU",
    desc: "dòng sản phẩm camera quan sát không dây trong nhà mới nhất của hãng HiLook. Camera IP Wifi HiLook được thiết kế với kiểu dáng và màu sắc hiện đại phù hợp cho những ngôi nhà thế hệ mới.",
  },
];

export default function Album() {
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
              Camera IP
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
                <Grid item>
                  <Button variant="contained" color="primary">
                    Các sản phẩm khác
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Hỗ trợ khách hàng
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    style={{ padding: "118px 0" }}
                    className={classes.cardMedia}
                    image={card.img}
                    title="Image title"
                    name={card.name}
                    desc={card.desc}
                    id={card.id}
                  />

                  <CardContent className={classes.cardContent}>
                    <Typography>{card.name}</Typography>
                    <Typography>{card.desc}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
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
          TRUNG KIEN CAMERA
        </Typography>
        <Typography
          style={{ marginLeft: "20px" }}
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
          style={{ marginLeft: "-81px" }}
        >
          SDT: 0766540244
        </Typography>
      </footer>
    </React.Fragment>
  );
}
