import React,{Component} from "react";
import "./home.less";
import {Tabs} from "antd-mobile";
import LazyLoad from "react-lazyload";
import Header from "./header/header";
import Recommend from "./recommend/recommend";
import PlayList from "./playlist/playlist";
import Rank from "./rank/rank";
const tabs=[
    {title:"个性推荐"},
    {title:"歌单"},
    {title:"排行榜"},
];
export default class App extends Component{
    render(){
        return(
            <div>
                <Header/>
                <Tabs
                    defaultActiveKey="1"
                    swipeable={false}
                    tabs={tabs}
                >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
                        <Recommend></Recommend>
                    </div>
                    <div>
                        <PlayList></PlayList>
                    </div>
                    <div>
                        <Rank></Rank>
                    </div>
                </Tabs>

            </div>
        )
    }
}