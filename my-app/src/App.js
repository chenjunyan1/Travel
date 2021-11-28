import React, { Component } from 'react'
import './App.css'
import ReactDOM from 'react-dom';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Data from './data.json'

function num_img(data, num) {
  let arr = [];
  for (let m = 1; m <= num; m++) {
    arr.push("ShenZhen/img/" + data + "/ShenZhen (" + m + ").jpg");
  }
  return arr;
}

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      num: "null"
    }

  }

  handclick(num) {
    this.setState({
      num: [num]
    })
  }

  render() {
    const { num } = this.state;
    return (
      <div>
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
                  ChenJunYan
                </Box>
              </Typography>
            </div>
          </div>
        </div>

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
                    <img src={item} alt="xxn" />
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
                    <img src={item} alt="xxn" />
                  </div>
                )
              })
              }
            </div>) : null}
          {/* 10_24 */}
          {(num == 3) ? (

            <div>
              <div>
                <img src="ShenZhen/Chen_junyan.jpg" />
              </div>
              {num_img("10_24", 61).map((item, index) => {
                console.log(num == 3)
                return (
                  <div key={index}>
                    <img src={item} alt="xxn" />
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
                    <img src={item} alt="xxn" />
                    <div><div>在深圳的最后一天[海边]</div></div>
                  </div>
                )
              })
              }
            </div>) : null}
        </div>
        <div className="page_end">
          Wonderland © Website 2021
        </div>
      </div >

    )
  }
}
