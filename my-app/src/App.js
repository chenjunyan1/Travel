import { StrictMode, lazy, Suspense, Component } from 'react';

import './App.css';
import ReactDOM from 'react-dom';
import Data from './data.json';
import Avatar from '@material-ui/core/Avatar';

import { useScrollTrigger, Zoom, Typography, Box, ButtonGroup, Button } from '@mui/material';

function num_img(data, num) {
  let arr = [];
  for (let m = 1; m <= num; m++) {
    arr.push("ShenZhen/img/" + data + "/ShenZhen (" + m + ").jpg");
  }
  return arr;
}

// let scrollTop;


export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      num: "null",
      loading: false,
      // Audio: "true"
      // scrollTop_1: 0

    }

  }
  // axios.get('./img')
  gitImg(src) {
    // axios.get(src).then((date)=>{
    //   this.setState({
    //     loading:true
    //   })
    // })
  }

  // 生命周期开始
  componentDidMount() {
    // this.frequency();

    // this.timerID = setInterval(
    //   () => this.frequency(),
    //   1000
    // );
    // setInterval(this.frequency(), 10000);  

    // this.scrollTop = window.onscroll = function () {
    //   //为了保证兼容性，这里取两个值，哪个有值取哪一个
    //   //scrollTop就是触发滚轮事件时滚轮的高度
    //   scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    //   if (scrollTop > 500) {
    //     console.log("滚动距离" + scrollTop);
    //     // this.setState({
    //     //   scrollTop_1: [scrollTop]
    //     // })hg
    //   }
    // }
  }
  // 生命周期结束
  componentWillUnmount() {
    // clearInterval(this.timerID);
  }

  frequency() {
    this.setState({
      Audio: "autoplay"
    })
    console.log("转换");
  }
  handclick(num) {
    this.setState({
      num: [num],
    })
  }

  topping() {
    let anchorElement = document.getElementById('root');
    if (anchorElement) {
      anchorElement.scrollIntoView({ behavior: "smooth", });
    }
  }


  // ScrollTop(props) {
  //   const { children, window } = props;
  //   // Note that you normally won't need to set the window ref as useScrollTrigger
  //   // will default to window.
  //   // This is only being set here because the demo is in an iframe.
  //   const trigger = useScrollTrigger({
  //     target: window ? window() : undefined,
  //     disableHysteresis: true,
  //     threshold: 100,
  //   });

  //   const handleClick = (event) => {
  //     const anchor = (event.target.ownerDocument || document).querySelector(
  //       '#back-to-top-anchor',
  //     );

  //     if (anchor) {
  //       anchor.scrollIntoView({
  //         behavior: 'smooth',
  //         block: 'center',
  //       });
  //     }
  //   };

  //   return (
  //     <Zoom in={trigger}>
  //       <Box
  //         onClick={handleClick}
  //         role="presentation"
  //         sx={{ position: 'fixed', bottom: 16, right: 16 }}
  //       >
  //         {children}
  //       </Box>
  //     </Zoom>
  //   );
  // }

  render() {
    const { num } = this.state;
    return (
      <div>
        {/* 页面1 */}
        <div className="page_1">
          <div>
            <div className="title">
              ShenZhen_Travel
            </div>
            <div className="we">
              <Avatar
                alt="陈"
                src={"Character/we/chenjunyan.jpg"}
                sx={{ width: 110, height: 110 }}
              />
              <Avatar
                alt="李"
                src={"Character/we/lixiaojuan.png"}
                sx={{ width: 110, height: 110 }}
              />
            </div>

            <div>
              <Typography
                component="div"
                variant="body1"
                style={{
                  height: 100,
                  width: '100%',
                  position: 'relative',
                }}
              >
                <Box
                  sx={{
                    bgcolor: '#177cb0',
                    color: 'white',
                    p: 2,
                    position: 'absolute',
                    top: 40,
                    left: '40%',
                    zIndex: 'tooltip',
                  }}
                >
                  LiXiaoJuan
                </Box>
                <Box
                  sx={{
                    bgcolor: 'cadetblue',
                    color: 'text.primary',
                    p: 2,
                    position: 'absolute',
                    top: 0,
                    left: '43%',
                    zIndex: 'modal',
                  }}
                >
                  ChenJunYan &amp;
                </Box>
              </Typography>
            </div>
          </div>
        </div>
        <div className='yinpin'>
          <audio controlsList="nodownload" oncontextmenu="return false" id="vd" loop src="xiaojiuwo.mp3"  controls="controls"></audio>
        </div>
        {/* button 日期 */}
        <div className="page_2">
          <div className="riqi">
            <ButtonGroup disableElevation
              variant="contained"
              fullWidth={true}
            >
              <Button
                onClick={this.handclick.bind(this, 1)}
              >2021.10.22</Button>
              <Button
                onClick={this.handclick.bind(this, 2)}
              >2021.10.23</Button>
            </ButtonGroup>
            <ButtonGroup disableElevation
              variant="contained"
              fullWidth={true}
              color="warning"
            >
              <Button
                onClick={this.handclick.bind(this, 3)}
              >2021.10.24</Button>
              <Button
                onClick={this.handclick.bind(this, 4)}
              >2021.10.25</Button>
            </ButtonGroup>
          </div>
        </div>
        {/* 10_22 */}
        <div className="img_all">
          {(num == 1) ? (
            <div>
              {num_img("10_22", 6).map((item, index) => {
                console.log(num == 1)
                return (
                  <div key={index}>
                    {(Data[22][index] != "") ? (<div><div>{Data[22][index]}</div></div>) : null}
                    <img src={item} alt="照片正在路上" />
                  </div>
                )
              })
              }
            </div>) : null}
          {/* 10_23 */}
          {(num == 2) ? (
            <div>
              {num_img("10_23", 21).map((item, index) => {
                console.log(num == 2)
                return (
                  <div key={index}>
                    {(Data[23][index] != "") ? (<div><div>{Data[23][index]}</div></div>) : null}
                    <img src={item} alt="照片正在路上" />
                  </div>
                )
              })
              }
            </div>) : null}
          {/* 10_24 */}
          {(num == 3) ? (
            <div>
              <div>
                <img src="ShenZhen/Chen_junyan.jpg" alt="照片正在路上" />
              </div>
              {num_img("10_24", 61).map((item, index) => {
                console.log(num == 3)
                return (
                  <div key={index}>
                    <img src={item} alt="照片正在路上" />
                    <div><div>俊雁同学参加2021界学生开源年会</div></div>
                  </div>
                )
              })
              }
            </div>) : null}
          {/* 10_25 */}
          {(num == 4) ? (
            <div>
              {num_img("10_25", 77).map((item, index) => {
                console.log(num == 4)
                return (
                  <div key={index}>
                    <img src={item} alt="照片正在路上" />
                    <div><div>在深圳的最后一天[海边]</div></div>
                  </div>
                )
              })
              }
            </div>) : null}
        </div>
        {/* 作者声明 */}
        <div className="page_end">
          Wonderland © Website 2021
        </div>
        {
          // (scrollTop > 500) ? (
          <div className="zhiding">
            <img onClick={this.topping.bind(this)} src="Character/置顶.svg" />
          </div>
          // ) : null
        }
      </div >

    )
  }
}
