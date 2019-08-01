import React, { Component } from 'react'
import Split from '../split'
import big from './images/big.jpg'
import BScroll from 'better-scroll'
import { reqComment } from '../../api'
import './index.css'
export default class tabsDetail extends Component {
  state = {
    comments: [
      {
				id: 1,
				hasMore:true,
        result: [{
          look: null,
          topics: [
            {
              avatar:
                'https://yanxuan.nosdn.127.net/adc4c719dca4d6baeaa049a909a588c4.jpg',
              nickname: '网易味央：小周',
              subTitle: '蔬菜风味牛奶面包限时7.4折起',
              title: '有了这款谷蔬面包，早上还能多睡十分钟',
              readCount: 1838,
              picUrl:
                'https://yanxuan.nosdn.127.net/bd73f05a5b8492eaeabca2eafdc3dc4a.jpg'
						},
						{
              avatar:
                'https://yanxuan.nosdn.127.net/adc4c719dca4d6baeaa049a909a588c4.jpg',
              nickname: '网易味央：小周',
              subTitle: '蔬菜风味牛奶面包限时7.4折起',
              title: '有了这款谷蔬面包，早上还能多睡十分钟',
              readCount: 1838,
              picUrl:
                'https://yanxuan.nosdn.127.net/bd73f05a5b8492eaeabca2eafdc3dc4a.jpg'
						},
						{
              avatar:
                'https://yanxuan.nosdn.127.net/adc4c719dca4d6baeaa049a909a588c4.jpg',
              nickname: '网易味央：小周',
              subTitle: '蔬菜风味牛奶面包限时7.4折起',
              title: '有了这款谷蔬面包，早上还能多睡十分钟',
              readCount: 1838,
              picUrl:
                'https://yanxuan.nosdn.127.net/bd73f05a5b8492eaeabca2eafdc3dc4a.jpg'
						},
						{
              avatar:
                'https://yanxuan.nosdn.127.net/adc4c719dca4d6baeaa049a909a588c4.jpg',
              nickname: '网易味央：小周',
              subTitle: '蔬菜风味牛奶面包限时7.4折起',
              title: '有了这款谷蔬面包，早上还能多睡十分钟',
              readCount: 1838,
              picUrl:
                'https://yanxuan.nosdn.127.net/bd73f05a5b8492eaeabca2eafdc3dc4a.jpg'
            }
          ]
        }]
      },
      { id: 2 },
      { id: 3, result: [] },
      { id: 4, result: [] },
      { id: 5, result: [] },
      { id: 6, result: [] },
      { id: 7, result: [] },
      { id: 8, result: [] }
    ]
  }
  async componentDidMount() {
    const res = await reqComment('/topic/v1/find/recAuto.json',1,5)
    if (res.code === '200') {
      this.setState({
        // comments: res.data.result
        comments: [{ ...this.state.comments[1], ...res.data }]
      })
    } else {
      throw new Error('数据获取失败')
    }
    this.scroll = new BScroll('.tdComent', {
      click: true
    })
  }
  render() {
    const { id } = this.props.match.params
    // console.log(id)
    const comments = this.state.comments.find(item => item.id === +id)
    console.log(comments)
    /* const { comments } = this.state
		console.log(comments) */
		if (!comments) return null
		console.log(comments.result)
		if (!comments.result) return null
		
    return comments.result.length ? (
      <div>
        <div className="tdComent">
          {/* <Split />
          <div className="tdComentBigPic">
            <img src={big} alt="" />
          </div>
          <Split />
					<section className="tdComment"> */}
					{/* tdComment存在bug */}
          <section className="tdComment">
            <Split />
            <div className="tdComentBigPic">
              <img src={big} alt="" />
            </div>
            <Split />
            <ul className="commentList">
              {comments.result.map((comment, index) => (
                <li
                  className="commentItem"
                  key={index}
                  style={{ display: comment.look ? 'block' : 'none' }}
                >
                  <div className="selectWomen">
                    <div className="selectTop">
                      <img
                        src={comment.look ? comment.look.avatar : null}
                        alt=""
                        className="selectBigPic"
                      />
                      <span>{comment.look ? comment.look.nickname : null}</span>
                    </div>
                    <p className="selectContent">
                      {comment.look ? comment.look.content : null}
                    </p>
                    <div className="selectBG">
                      <img
                        src={
                          comment.look ? comment.look.lookPics[0].picUrl : null
                        }
                        alt=""
                      />
                    </div>
                    <p className="selectLook">
                      <i className="iconfont icon-eye" />
                      <span>
                        {comment.look ? comment.look.readCount : ''}人看过
                      </span>
                    </p>
                  </div>
                  <Split />
                  <ul className="userComment">
                    {comment.topics.map((topic, index) => (
                      <li key={index}>
                        <Split />
                        <div className="commentLeft">
                          <div className="userPicText">
                            <img src={topic.avatar} alt="" />
                            <span>{topic.nickname}</span>
                          </div>
                          <p className="userContent">{topic.title}</p>
                          <p className="userSuggest">{topic.subTitle}</p>
                          <p className="userLook">
                            <i className="iconfont icon-eye" />
                            <span>{topic.readCount}人看过</span>
                          </p>
                        </div>
                        <div className="commentRight">
                          <img src={topic.picUrl} alt="" />
                        </div>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
              {/*  <li className="commentItem">
                <div className="selectWomen">
                  <div className="selectTop">
                    <img src={select} alt="" className="selectBigPic" />
                    <span className="">选妹</span>
                  </div>
                  <p className="selectContent">
                    恋爱季穿搭圣经，约会前必看参考，限时每满100立减15
                  </p>
                  <div className="selectBG">
                    <img src={clothes} alt="" />
                  </div>
                  <p className="selectLook">
                    <i className="iconfont icon-eye" />
                    <span>20人看过</span>
                  </p>
                </div>
                <Split />
                <div className="userComment">
                  <div className="commentLeft">
                    <div className="userPicText">
                      <img src={user} alt="" />
                      <span>网易游戏后端:波涛</span>
                    </div>
                    <p className="userContent">
                      一年爆卖10万盒空气净化机,好在哪里?
                    </p>
                    <p className="userSuggest">有效吸收甲醛、去除空间异味</p>
                    <p className="userLook">
                      <i className="iconfont icon-eye" />
                      <span>9162人看过</span>
                    </p>
                  </div>
                  <div className="commentRight">
                    <img src={userPic} alt="" />
                  </div>
                </div>
              </li> */}
            </ul>
          </section>
        </div>
      </div>
    ) : (
      <div>111</div>
    )
  }
}
