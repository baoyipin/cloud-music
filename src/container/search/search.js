import React, { Component } from 'react'

import FontAwesome from 'react-fontawesome';
import './search.less'

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchRecords:[],
        }
    }
    handleSearch(){window.history.go(-1)}
    searchSongs(){
        const value=this.search.value;
        const localItem=JSON.parse(window.localStorage.getItem('searchRecord'))||[];
        window.localStorage.setItem('searchRecord',JSON.stringify([...localItem,value]))
    }
    searchItem(item){
        this.search.value = item;
        this.changeState()
    }
    changeState() {
        //获取值
        let searchRecord = JSON.parse(window.localStorage.getItem('searchRecord'))||[];
        console.log(this.state.searchRecords);
        this.setState({
            searchRecords:[...this.state.searchRecords,...searchRecord]
        })
    }
    deleteRecord(item){
        let searchRecord = JSON.parse(window.localStorage.getItem('searchRecord'));
        //给数组对象添加一个方法(根据元素的值删除指定元素)
       /* Array.prototype.removeByValue = function(val) {
            for(let i=0; i<this.length; i++) {
                if(this[i] == val) {
                    this.splice(i, 1);
                    break;
                }
            }
        }*/
       searchRecord=searchRecord.filter((i,index)=>{
           return i!==item;
       })
        //searchRecord.removeByValue(item);
        this.setState({
            searchRecords:searchRecord
        })
        //改变localStorage key为searchRecord的值
        window.localStorage.setItem('searchRecord',JSON.stringify(searchRecord));
    }

    componentDidMount() {
        this.changeState();
    }
    render() {
        const topSearch = [
            '谢天笑',
            '风去云不回',
            'GAI爷',
            '你坐最后一排，我坐讲台旁边',
            'China-U',
            '薛之谦',
            '林俊杰',
            '未来的进击',
            'alan walker'
        ];
        const { searchRecords } = this.state;
        console.log(searchRecords);
        return(
            <div className='search login'>
                <div className='login-title'>
                    <a onClick={()=>this.handleSearch()}>
                        <FontAwesome name='arrow-left' key='arrow-left'></FontAwesome>
                    </a>
                    <div className="search-input-container">
                        <input
                            className='search-input'
                            placeholder="搜索音乐、歌手、歌词、用户"
                            ref = {(ref) => this.search = ref}
                            onBlur= {()=>this.searchSongs()}
                        />
                    </div>
                </div>
                <div className='search-content'>
                    <p>热门搜索</p>
                    <div className='search-label'>
                        {
                            topSearch.map((item, index) => {
                                return (
                                    <a onClick={()=>this.searchItem(item)} key={index}>{item}</a>
                                )
                            })
                        }
                    </div>
                    <ul className='search-record'>
                        {
                            searchRecords && searchRecords.map((item, index) => {
                                return (
                                    <li key={index} className='record-item'>
                                        <FontAwesome name='clock-o' className='record-left'></FontAwesome>
                                        <span onClick={()=>this.searchItem(item)}>{item}</span>
                                        <FontAwesome name='times-circle' className='record-right' onClick={()=>this.deleteRecord(item)}></FontAwesome>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}


export default Search