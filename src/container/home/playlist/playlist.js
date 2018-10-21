import React, { Component } from 'react'
import './playList.less'
import {Flex} from "antd-mobile";


class PlayList extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return(
            <div className="palylist">
                <a href='#' className='banner'>
                    <img src={require('../../../public/imgs/song_cover8.jpg')}/>
                    <div>
                        <div className='title'>精品歌单 &gt;</div>
                        <p className='sub-title'>古典优美的声乐曲集</p>
                        <p className='description'>古典音乐不只有"纯音"哦~</p>
                    </div>
                </a>
                <div className='playlists-classify'>
                    <a className='all-playlists' href='#'>全部歌单 &gt;</a>
                    <div className='classify'>
                        <Flex>
                            <Flex.Item>欧美</Flex.Item>
                            <Flex.Item>摇滚</Flex.Item>
                            <Flex.Item>民谣</Flex.Item>
                        </Flex>
                    </div>
                </div>
                {
                    [1,2,3,4].map((item, index) => {
                        return (
                            <div className='playlists-content' key={index}>
                                <div>
                                    <img src={require(`../../../public/imgs/play_song_cover.jpg`)}/>
                                </div>
                                <div className='song-describition'>献给台湾的过去现在和未来</div>
                                <div className='creator'>by 罗大佑</div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}


export default PlayList