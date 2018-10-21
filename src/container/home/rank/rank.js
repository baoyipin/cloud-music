import React, { Component } from 'react'
import './ranking.less'


class Ranking extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return(
            <div style={{ width:'100%', background:'#f5f5f9'}}>
                <div className='rank-title'>官方榜</div>
                {
                    [1,2,3].map((item, index) => {
                        return (
                            <div key={index} className='official-content'>
                                <img src={require(`../../../public/imgs/original.jpg`)}/>
                            </div>
                        )
                    })
                }
                <div className='rank-title'>全球榜</div>
                <div className='global-rank'>
                    {
                        [1,2,3,4,5,6].map((item, index) => {
                            return (
                                <div key={index} className='rank-detail'>
                                    <div className='song-cover'>
                                        <img src={require(`../../../public/imgs/original.jpg`)}/>
                                    </div>
                                    <div className='song-describition'>全球音乐风云榜</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}


export default Ranking;