import React,{Component} from "react"
import "./container/footer/footer.less"
import {Icon,List,Popover} from "antd-mobile"
export default class Test extends Component{
    constructor(){
        super()
        this.state={
            show:false
        }
    }
    renderHeader(){
        return(
            <div>
                <div className="option-area" style={{ position: 'relative' }}>
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
                        position: 'absolute', right: 3, top: 15,
                    }}
                    onClick={() => this.onClose('cancel')}
                >
                <Icon type="cross" />
            </span>
            </div>

        )}
    showList(){
        this.setState({show:!this.state.show})
    }
    render(){
        return(
            <div>
                <div>
                    <Popover
                        visible={this.state.show}
                        placement="bottom"
                        overlay={(
                            <List renderHeader={()=>this.renderHeader()}
                                  className="play-songs-list"
                            >
                                {["未来的主人翁","鹿港小镇","那是我所不能了解的事"].map((i, index) => (
                                    <List.Item key={index}>{i}</List.Item>
                                ))}
                            </List>
                        )}
                    >
                        <button onClick={()=>{this.showList()}} style={{margin:"0 auto",display:"block"}}>button</button>
                    </Popover>


                </div>
            </div>

        )
    }
}