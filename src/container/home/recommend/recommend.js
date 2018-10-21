
import React, { Component } from 'react'
import './recommend.less'
import FontAwesome from "react-fontawesome";
import {Flex} from "antd-mobile";
import Carousels from "../carousels/carousels";
import "../../../public/imgs/play_song_cover.jpg"
class Recommend extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return(
            <div style={{ width: '100%', }}>
                <Carousels></Carousels>
                <div className='recommend-container'>
                    <Flex>
                        <Flex.Item>
                            <div>
                                <FontAwesome key='address-card-o' name="address-card-o"></FontAwesome>
                            </div>
                            <span>私人FM</span>
                        </Flex.Item>
                        <Flex.Item>
                            <div>
                                <FontAwesome key='calendar' name="calendar"></FontAwesome>
                            </div>
                            <span>每日歌曲推荐</span>
                        </Flex.Item>
                        <Flex.Item>
                            <div>
                                <FontAwesome key='signal' name="signal"></FontAwesome>
                            </div>
                            <span>云音乐热歌榜</span>
                        </Flex.Item>
                    </Flex>
                </div>
                <div className='recommend-songs'>
                    <div className='recommend-title'>推荐歌单 &gt;</div>
                    {
                       [1,2,3,4,5,6].map((item, index) => {
                            return (
                                <div className='recommend-content content' key={index}>
                                    <div className='song-cover'>
                                        <p>
                                            <i className='fa fa-headphones'></i> 666
                                        </p>
                                        <img src={require(`../../../public/imgs/play_song_cover.jpg`)}/>
                                    </div>
                                    <div className='song-describition'>说好一生一起走</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

function select(state){
    return{

    }
}

export default Recommend