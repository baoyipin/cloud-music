import React, { Component } from 'react'
import { Popover,List, Button, Icon } from 'antd-mobile';

import { Link } from 'react-router-dom';
import './footer.less';

const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let maskProps;
if (isIPhone) {
    maskProps = {
        onTouchStart: e => e.preventDefault(),
    };
}

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sel: '',
            visible:false
        }
    }


    renderHeader(){
        return(
            <div>
                <div className="option-area">
                    <div className="select-type">
                    <span className="loop" >
                        <img src="/svgs/list-loop.svg" />列表循环
                    </span>
                        <span className="loop" >
                        <img src="/svgs/random-loop.svg" />随机播放
                    </span>
                        <span className="loop" >
                        <img src="/svgs/single-loop.svg" />单曲循环
                    </span>
                    </div>
                    <div className="delete">
                        <img src="/svgs/delete.png" />清空
                    </div>
                </div>
                <span
                    style={{
                        position: 'absolute', right: 3, top: 7,
                    }}
                    onClick={() => this.onClose('cancel')}
                >
                <Icon type="cross" />
            </span>
            </div>

        )}


    //弹出框隐藏
    onClose(sel) {
        this.setState({ sel ,visible:false});
    }

    //弹出框显示
    showList(e) {
        this.setState({visible:!this.state.visible})

    }



    //暂停播放
    toggleStatus(){
        let myaudio = document.getElementById('audioPlay');
        let btn = document.getElementById("play")
        if (myaudio.paused) {
            myaudio.play();
            btn.className="mini-btn pause"
        } else {
            myaudio.pause();
            btn.className="mini-btn player"
        }
    }

    canPlaySong() {
        let myaudio = document.getElementById('audioPlay');
        myaudio.play();
    }
    handleChange(e){
        console.log(e);
    }
    render() {
        return(

                <div className="footer">
                    <div className="player-mini">
                        <div className="mini-content">
                            <audio
                                src={require("./06 She's a Rainbow (Stereo Full Vers.m4a")}
                                onCanPlay={() => this.canPlaySong()}
                                id="audioPlay"
                                autoPlay={false}
                            >
                            </audio>
                            <div className="music-logo">
                                <Link to='/playing'>
                                    <img src="/imgs/play_song_cover.jpg"/>
                                </Link>
                            </div>
                            <div className="info">
                                <div className="name">身骑白马</div>
                                <div className="artist">徐佳莹</div>
                            </div>
                            <div className="mini-option">
                                <div style={{width:'60px',height:'60px'}}>
                                    <div id="play"className="mini-btn player" onClick={() => this.toggleStatus()}></div>
                                </div>
                                <Popover
                                    visible={this.state.visible}
                                    placement="left"
                                    mask
                                    onclick={(e)=>{this.handleChange(e)}}
                                    overlay={(
                                        <List renderHeader={()=>this.renderHeader()}
                                              className="play-songs-list"
                                              style={{position:"fixed",bottom:"60px",left:"0",width:"100%"}}
                                        >
                                            {["未来的主人翁","鹿港小镇","那是我所不能了解的事"].map((i, index) => (
                                                <List.Item key={index}>{i}</List.Item>
                                            ))}
                                        </List>
                                    )}
                                >
                                <div className="mini-btn player-list" onClick={() => this.showList()}></div>
                                </Popover>
                            </div>
                        </div>
                    </div>
                </div>

        )
    }
}


export default Footer