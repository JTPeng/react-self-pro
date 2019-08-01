import React, { Component } from 'react'
import Split from '../../components/split'
import './index.css'
import { reqSearchContent, reqSearchInput } from '../../api'
export default class Search extends Component {
  state = {
    searchCotent: '', // 文本框搜索内容
    searchCotentLsts: [], // 文本框搜索返回的数据
    hotKeywordVOList: [],
    historys: [
      { title: '100年传世刺绣' },
      { title: 'web app开发' },
      { title: '尚硅谷教学视频' },
      { title: '大数据开发' },
      { title: '云计算' }
    ]
  }
  async componentDidMount() {
    const result = await reqSearchContent('/xhr/search/init.json')
    // console.log(result)
    if (result.code === '200') {
      const { hotKeywordVOList } = result.data
      this.setState({
        hotKeywordVOList
      })
      // console.log(this.state.hotKeywordVOList)
    }
  }
  delHistory = () => {
    this.setState({
      historys: []
    })
  }
  searchInput = async event => {
    const { searchCotent } = this.state
    this.setState({
      searchCotent: event.target.value
    })
    if (searchCotent) {
      const result = await reqSearchInput(
        '/xhr/search/searchAutoComplete.json?',
        searchCotent
      )
      // console.log(result)
      if (result.code === '200') {
        const searchCotentLsts = result.data
        this.setState({
          searchCotentLsts
        })
        console.log(this.state.searchCotentLsts)
      }
		} 
		if(searchCotent === ''){
			console.log(1)
			this.setState({
				searchCotentLsts:[]
			})
		}
  }
  /* 清空文本框内容 */
  clearContent = () => {
    this.setState({
      searchCotent: ''
    })
  }
  render() {
    const { searchCotent, searchCotentLsts } = this.state
    return (
      <div>
        <div className="searchContainer">
          <header className="scHeader">
            <div className="schTop">
              <i
                className="iconfont icon-cha"
                style={{ display: searchCotent ? 'block' : 'none' }}
                onClick={this.clearContent}
              />
              <input
                type="text"
                placeholder="颜值款电蚊拍"
                value={searchCotent}
                onChange={this.searchInput}
              />
              <div
                className="scCancel"
                onClick={() => this.props.history.goBack()}
              >
                取消
              </div>
            </div>
            <div
              className="schBottom"
              style={{ display: this.state.historys.length ? 'block' : 'none' }}
            >
              <div className="scHistory">
                <span>历史记录</span>
                <i className="iconfont icon-del" onClick={this.delHistory} />
              </div>
              <ul className="historyList">
                {this.state.historys.map((history, index) => (
                  <li className="historyItem" key={index}>
                    {history.title}
                  </li>
                ))}
              </ul>
            </div>
            <ul
              className="searchContent"
              style={{
                display:
                  searchCotent && searchCotentLsts.length > 0 ? 'block' : 'none'
              }}
            >
              {searchCotentLsts.map((searchCotent, index) => (
                <li className="contentItem" key={index}>
                  {searchCotent}
                </li>
              ))}
              {/* <li className="contentItem">111</li>
							<li className="contentItem">111</li>
							<li className="contentItem">111</li> */}
            </ul>
          </header>
          <Split />
          <section
            className="hotSearch"
            style={{
              display: searchCotent && searchCotentLsts.length > 0 ? 'none' : 'block'
            }}
          >
            <div className="hsTitle">热门搜索</div>
            <ul className="searchList">
              {this.state.hotKeywordVOList.map((hotKeywordVO, index) => (
                <li className="searchItem" key={index}>
                  {hotKeywordVO.keyword}
                </li>
              ))}
              {/* <li className="searchItem on">七夕礼物</li>
              <li className="searchItem">巴西守信</li>
              <li className="searchItem">七夕礼物</li>
              <li className="searchItem">七夕礼物</li>
              <li className="searchItem">七夕礼物</li> */}
            </ul>
          </section>
        </div>
      </div>
    )
  }
}
