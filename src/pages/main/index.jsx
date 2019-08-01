/**
 * Created by JTPeng on 2019-07-29 09:13.
 * Description：
 */
import React, { Component } from 'react'
import { Tabs, Carousel } from 'antd-mobile'

import swiper1 from './images/swiper-01.jpg'
import swiper2 from './images/swiper-02.jpg'
import swiper3 from './images/swiper-03.jpg'

// contentPic
import c1 from './images/contentPic/c1.png'
import c2 from './images/contentPic/c2.png'
import c3 from './images/contentPic/c3.png'
import c4 from './images/contentPic/c4.png'
import c5 from './images/contentPic/c5.png'
import c6 from './images/contentPic/c6.png'
import c7 from './images/contentPic/c7.png'
import c8 from './images/contentPic/c8.png'
import c9 from './images/contentPic/c9.png'
import c10 from './images/contentPic/c10.gif'
// 新人专享图片
import n1 from './images/newPeople/n1.png'
import n2 from './images/newPeople/n2.png'
import n3 from './images/newPeople/n3.png'
// 品牌
import b1 from './images/brand/b1.png'
import b2 from './images/brand/b2.png'
import b3 from './images/brand/b3.png'
import b4 from './images/brand/b4.png'
// 类目热销榜
import l1 from './images/hotSale/l1.png'
import l2 from './images/hotSale/l2.png'
import r1 from './images/hotSale/r1.png'
import r2 from './images/hotSale/r2.png'
import r3 from './images/hotSale/r3.png'
import r4 from './images/hotSale/r4.png'
import r5 from './images/hotSale/r5.png'
import r6 from './images/hotSale/r6.png'
import r7 from './images/hotSale/r7.png'
import r8 from './images/hotSale/r8.png'
// 人气推荐图片
import pt from './images/popular/pt.png'
import p1 from './images/popular/p1.png'
import p2 from './images/popular/p2.png'
import p3 from './images/popular/p3.png'
// 限时购
import lm1 from './images/limit/lm1.png'
import lm2 from './images/limit/lm2.png'
import lm3 from './images/limit/lm3.png'
import lm4 from './images/limit/lm4.png'
import lm5 from './images/limit/lm5.png'
import lm6 from './images/limit/lm6.png'
// 新品首发
import g1 from './images/newGood/g1.png'
import g2 from './images/newGood/g2.png'
import g3 from './images/newGood/g3.jpg'
import g4 from './images/newGood/g4.png'
import g5 from './images/newGood/g5.png'
import g6 from './images/newGood/g6.png'
// 秒杀系列
import k1 from './images/kills/k1.png'
import k2 from './images/kills/k2.png'
import k3 from './images/kills/k3.png'
import k4 from './images/kills/k4.png'
import k5 from './images/kills/k5.png'
import k6 from './images/kills/k6.png'
import k7 from './images/kills/k7.png'
import k8 from './images/kills/k8.png'
// 食品
import ch1 from './images/foods/ch1.png'
import ch2 from './images/foods/ch2.png'
import ch3 from './images/foods/ch3.png'
import ch4 from './images/foods/ch4.png'
import ch5 from './images/foods/ch5.png'
import ch6 from './images/foods/ch6.png'
import ch7 from './images/foods/ch7.png'
import ch8 from './images/foods/ch8.png'
// 恋爱穿搭图片
import lo1 from './images/loves/lo1.png'
import lo2 from './images/loves/lo2.png'
import lo3 from './images/loves/lo3.png'
import lo4 from './images/loves/lo4.png'
import lo5 from './images/loves/lo5.png'
import lo6 from './images/loves/lo6.png'
import lo7 from './images/loves/lo7.png'
// 男士精选
import m1 from './images/mans/m1.png'
import m2 from './images/mans/m2.png'
import m3 from './images/mans/m3.png'
import m4 from './images/mans/m4.png'
import m5 from './images/mans/m5.png'
import m6 from './images/mans/m6.png'
import m7 from './images/mans/m7.png'
import m8 from './images/mans/m8.png'
// 箭头
import arrows from './images/arrow.png'
// 引入分割组件
import Split from '../../components/split'
// 引入分块的头部组件
// import shopTitle from '../../components/shopTitle'
// better-Scroll
import BScroll from 'better-scroll'
import './index.css'
export default class Main extends Component {
  state = {
    data: [],
    tabs: [],
    imgHeight: 176,
    contentListPic: [],
    brands: [],
    hotSales: [],
    populars: [],
    limits: [],
    newGoods: [],
    kills: [],
    foods: [],
    loves: [],
    mans: [],
    show: false,
    isShow: false
  }
  componentDidMount() {
    this.timer = setTimeout(() => {
      this.setState({
        data: [swiper1, swiper2, swiper3, swiper2, swiper1],
        contentListPic: [
          { image: c1, title: '新品首发' },
          { image: c2, title: '居家生活' },
          { image: c3, title: '服饰鞋包' },
          { image: c4, title: '美食酒水' },
          { image: c5, title: '个人清洁' },
          { image: c6, title: '母婴亲子' },
          { image: c7, title: '运动旅行' },
          { image: c8, title: '数码家电' },
          { image: c9, title: '全球特色' },
          { image: c10, title: '超级会员' }
        ],
        brands: [
          { image: b1, title: '海外制造商', price: '9.9元起' },
          { image: b2, title: 'CK制造商', price: '29.9元起' },
          { image: b3, title: '新秀丽制造商', price: '169元起' },
          { image: b4, title: 'Nine West制造商', price: '219元起' }
        ],
        tabs: [
          { title: '推荐' },
          { title: '居家生活' },
          { title: '服饰鞋包' },
          { title: '美食酒水' },
          { title: '个护清洁' },
          { title: '母婴亲子' },
          { title: '运动旅行' },
          { title: '数码家电' },
          { title: '全球特色' }
        ],
        hotSales: [
          { image: r1, title: '居家生活榜' },
          { image: r2, title: '服饰鞋包榜' },
          { image: r3, title: '美食酒水榜' },
          { image: r4, title: '个户清理榜' },
          { image: r5, title: '数码家电榜' },
          { image: r6, title: '运动旅行榜' },
          { image: r7, title: '母婴亲子榜' },
          { image: r8, title: '全球特色榜' }
        ],
        populars: [
          {
            image: p1,
            goods: '特价',
            full: '满赠',
            design: '英国设计',
            text: '英国设计 便携式榨汁机',
            price: '199'
          },
          {
            image: p2,
            goods: '特价',
            full: '',
            design: '',
            text: '无提风味 超即溶糖品咖啡',
            price: '189'
          },
          {
            image: p3,
            goods: '',
            full: '',
            design: '',
            text: '轻便污水折叠床',
            price: '299'
          }
        ],
        limits: [
          { image: lm1, newPrice: '425', oldPrice: '499' },
          { image: lm2, newPrice: '109', oldPrice: '169' },
          { image: lm3, newPrice: '219', oldPrice: '249' },
          { image: lm4, newPrice: '545', oldPrice: '679' },
          { image: lm5, newPrice: '69', oldPrice: '89' },
          { image: lm6, newPrice: '4399', oldPrice: '5499' }
        ],
        newGoods: [
          {
            image: g1,
            title: '时尚按摩筋膜枪',
            price: '1299',
            design: '日本设计'
          },
          { image: g2, title: '是时候回家吃饭了', price: '299', design: '' },
          { image: g3, title: '时尚按摩筋膜枪', price: '1299', design: '' },
          {
            image: g4,
            title: '时尚按摩筋膜枪',
            price: '5299',
            design: '中国制造'
          },
          {
            image: g5,
            title: '时尚按摩筋膜枪',
            price: '199',
            design: '中国制造'
          },
          { image: g6, title: '时尚按摩筋膜枪', price: '129', design: '' }
        ],
        kills: [
          {
            title: '9.9超值专区首发',
            text: '180款爆品新定价',
            image: k1,
            pic: k2
          },
          {
            title: '9.9超值专区首发',
            text: '180款爆品新定价',
            image: k3,
            pic: k4
          },
          {
            title: '9.9超值专区首发',
            text: '180款爆品新定价',
            image: k5,
            pic: k6
          },
          {
            title: '9.9超值专区首发',
            text: '180款爆品新定价',
            image: k7,
            pic: k8
          }
        ],
        foods: [
          {
            image: ch1,
            title: '酸梅汤 350毫升*9瓶',
            newPrice: '38',
            oldPrice: '40',
            design: '永不变味',
            sell: '特价',
            full: '满减'
          },
          {
            image: ch2,
            title: '酸梅汤 350毫升*9瓶',
            newPrice: '38',
            oldPrice: '40',
            design: '',
            sell: '特价',
            full: '满减'
          },
          {
            image: ch3,
            title: '酸梅汤 350毫升*9瓶',
            newPrice: '38',
            oldPrice: '40',
            design: '永不变味',
            sell: '',
            full: '满减'
          },
          {
            image: ch4,
            title: '酸梅汤 350毫升*9瓶',
            newPrice: '38',
            oldPrice: '40',
            design: '',
            sell: '特价',
            full: ''
          },
          {
            image: ch5,
            title: '酸梅汤 350毫升*9瓶',
            newPrice: '38',
            oldPrice: '40',
            design: '永不变味',
            sell: '',
            full: '满减'
          },
          {
            image: ch6,
            title: '酸梅汤 350毫升*9瓶',
            newPrice: '38',
            oldPrice: '40',
            design: '永不变味',
            sell: '特价',
            full: ''
          },
          {
            image: ch7,
            title: '酸梅汤 350毫升*9瓶',
            newPrice: '38',
            oldPrice: '40',
            design: '',
            sell: '',
            full: '满减'
          },
          {
            image: ch8,
            title: '酸梅汤 350毫升*9瓶',
            newPrice: '38',
            oldPrice: '40',
            design: '',
            sell: '特价',
            full: '满减'
          }
        ],
        loves: [
          {
            image: lo1,
            title: '酸梅汤 350毫升*9瓶',
            newPrice: '38',
            oldPrice: '40',
            design: '七色可选',
            sell: '特价',
            full: '满减'
          },
          {
            image: lo2,
            title: '头层牛皮,凉鞋也时髦',
            newPrice: '38',
            oldPrice: '40',
            design: '七色可选',
            sell: '特价',
            full: '满减'
          },
          {
            image: lo3,
            title: '头层牛皮,凉鞋也时髦',
            newPrice: '38',
            oldPrice: '40',
            design: '',
            sell: '特价',
            full: ''
          },
          {
            image: lo4,
            title: '头层牛皮,凉鞋也时髦',
            newPrice: '38',
            oldPrice: '40',
            design: '',
            sell: '',
            full: '满减'
          },
          {
            image: lo5,
            title: '头层牛皮,凉鞋也时髦',
            newPrice: '38',
            oldPrice: '40',
            design: '七色可选',
            sell: '',
            full: '满减'
          },
          {
            image: lo6,
            title: '头层牛皮,凉鞋也时髦',
            newPrice: '38',
            oldPrice: '40',
            design: '',
            sell: '特价',
            full: ''
          },
          {
            image: lo7,
            title: '头层牛皮,凉鞋也时髦',
            newPrice: '38',
            oldPrice: '40',
            design: '七色可选',
            sell: '',
            full: '满减'
          },
          {
            image: lo1,
            title: '头层牛皮,凉鞋也时髦',
            newPrice: '38',
            oldPrice: '40',
            design: '',
            sell: '特价',
            full: '满减'
          }
        ],
        mans: [
          {
            image: m1,
            title: '全球通用转换插座',
            newPrice: '38',
            oldPrice: '40',
            design: '2个规格',
            sell: '',
            full: '满减'
          },
          {
            image: m2,
            title: '全球通用转换插座',
            newPrice: '38',
            oldPrice: '40',
            design: '',
            sell: '',
            full: '满减'
          },
          {
            image: m3,
            title: '全球通用转换插座',
            newPrice: '38',
            oldPrice: '40',
            design: '2个规格',
            sell: '',
            full: '满减'
          },
          {
            image: m4,
            title: '全球通用转换插座',
            newPrice: '38',
            oldPrice: '40',
            design: '2个规格',
            sell: '',
            full: ''
          },
          {
            image: m5,
            title: '全球通用转换插座',
            newPrice: '38',
            oldPrice: '40',
            design: '',
            sell: '',
            full: '满减'
          },
          {
            image: m6,
            title: '全球通用转换插座',
            newPrice: '38',
            oldPrice: '40',
            design: '2个规格',
            sell: '',
            full: '满减'
          },
          {
            image: m7,
            title: '全球通用转换插座',
            newPrice: '38',
            oldPrice: '40',
            design: '',
            sell: '',
            full: ''
          },
          {
            image: m8,
            title: '头层牛皮,凉鞋也时髦',
            newPrice: '38',
            oldPrice: '40',
            design: '2个规格',
            sell: '',
            full: '满减'
          }
        ]
      })
    }, 1000)
    this.foodScroll = new BScroll('.foods', {
      click: true,
      scrollX: true
    })
    this.loveScroll = new BScroll('.loves', {
      click: true,
      scrollX: true
    })
    this.loveScroll = new BScroll('.mans', {
      click: true,
      scrollX: true
    })
  }
  componentWillMount() {
    window.addEventListener('scroll', this.handleScroll, true)
  }
  componentWillUnmount() {
    clearInterval(this.timer)
  }
  // tabs显示隐藏
  allShow = () => {
    this.setState({
      isShow: !this.state.isShow
    })
  }
  handleScroll = () => {
    let scrollTop = document.documentElement.scrollTop
    if (scrollTop > 100) {
      this.setState({
        show: true
      })
    } else {
      this.setState({
        show: false
      })
    }
  }
  toTop = () => {
    document.documentElement.scrollTop = 0
  }
  goToSearch = () => {
    this.props.history.push('/search')
  }
  render() {
    const tabs = [
      { title: '推荐' },
      { title: '居家生活' },
      { title: '服饰鞋包' },
      { title: '美食酒水' },
      { title: '个护清洁' },
      { title: '母婴亲子' },
      { title: '运动旅行' },
      { title: '数码家电' },
      { title: '全球特色' }
    ]
    const { isShow } = this.state
    return (
      <div>
        <div className="gif">
          <i className="iconfont icon-gift" />
        </div>
        <div className="up" onClick={this.toTop}>
          <i className="iconfont icon-up" />
        </div>
        <header className="mainHeader">
          <div className="headerTop">
            <h1 className="logo">网易严选</h1>
						<input
							type="text"
							placeholder="搜索商品,共21622款好物"
							onClick={this.goToSearch}
						/>
            <div className="login">登 陆</div>
          </div>
          <div className="nav">
            <div className="tabs">
              <Tabs
                tabBarActiveTextColor="red"
                tabBarUnderlineStyle={{ borderColor: 'red' }}
                tabBarTextStyle={{ fontSize: '16px' }}
                tabs={tabs}
                renderTabBar={props => (
                  <Tabs.DefaultTabBar {...props} page={4} />
                )}
              />
            </div>
            <div className="tabsListContainer">
              <div className="tabsListHeader">
                <span
                  className="all"
                  style={{ visibility: isShow ? 'visible' : 'hidden' }}
                >
                  全部频道
                </span>
                <img
                  onClick={this.allShow}
                  className="arrows"
                  src={arrows}
                  alt="arr"
                />
              </div>
              <ul
                className="tabsList"
                style={{ visibility: isShow ? 'visible' : 'hidden' }}
              >
                {tabs.map((item, index) => {
                  return (
                    <li key={index} className="tabsItem">
                      <span>{item.title}</span>
                    </li>
                  )
                })}
              </ul>
              <div
                className="mask"
                style={{ display: isShow ? 'block' : 'none' }}
                onClick={this.allShow}
              />
            </div>
          </div>
        </header>
        <section className="content">
          <section>
            <Carousel
              autoplay={true}
              infinite
              dotStyle={{ width: '40px', height: '2px', borderRadius: '2px' }}
              dotActiveStyle={{
                width: '40px',
                height: '2px',
                borderRadius: '2px',
                backgroundColor: 'red'
              }}
            >
              {this.state.data.map(val => (
                <a
                  key={val}
                  href="###"
                  style={{
                    display: 'inline-block',
                    width: '100%',
                    height: this.state.imgHeight
                  }}
                >
                  <img
                    // src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                    src={`${val}`}
                    alt=""
                    style={{ width: '100%', verticalAlign: 'top' }}
                    onLoad={() => {
                      // fire window resize event to change height
                      window.dispatchEvent(new Event('resize'))
                      this.setState({ imgHeight: 'auto' })
                    }}
                  />
                </a>
              ))}
            </Carousel>
          </section>
          <div className="contentTitle">
            <span>
              <i className="iconfont icon-pinpai" />
              网易自营品牌
            </span>
            <span>
              <i className="iconfont icon-protect" />
              30天无忧退货
            </span>
            <span>
              <i className="iconfont icon-money" />
              48小时快速退款
            </span>
          </div>
          <ul className="contentList">
            {this.state.contentListPic.map((pic, index) => (
              <li className="listItem" key={index}>
                <img src={pic.image} alt="" />
                <span>{pic.title}</span>
              </li>
            ))}
          </ul>
          <Split />
          <div className="newPeople">
            <p className="npTitle"> -- 新人专享 --</p>
            <div className="npContent">
              <div className="npLeft">
                <a href="javascript:;">
                  <span className="giftText">新人专享礼包</span>
                  <img src={n1} alt="" />
                </a>
              </div>
              <div className="npRight">
                <div className="rightTop">
                  <a href="javascript:;">
                    <div>
                      <span>福利社</span>
                      <span className="text">今日特价</span>
                    </div>
                    <img src={n3} alt="" />
                  </a>
                </div>
                <div className="rightBottom">
                  <a href="javascript:;">
                    <div>
                      <span>新人拼团</span>
                      <span className="text">一元起包邮</span>
                    </div>
                    <img src={n2} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* 品牌制造商直供 */}
          <Split />
          <div className="brand">
            <div className="brandTitle">
              <span>品牌制造商直供</span>
              <span>更多></span>
            </div>
            {/* <shopTitle title="品牌制造商直供" more="更多>"/> */}
            <ul className="brandList">
              {this.state.brands.map((brand, index) => (
                <li className="brandItem" key={index}>
                  <p className="title">{brand.title}</p>
                  <p className="price">{brand.price}</p>
                  <img src={brand.image} alt="" />
                </li>
              ))}
            </ul>
          </div>
          {/* 类目热销榜 */}
          <Split />
          <div className="hotSale">
            <div className="hsTitle">类目热销榜</div>
            <div className="hsPic">
              <div className="hsPicTop">
                <div className="left">
                  <div className="text">
                    <p>热销榜</p>
                    <p className="line" />
                  </div>
                  <img src={l1} alt="" />
                </div>
                <div className="right">
                  <div className="text">
                    <p>好评榜</p>
                    <p className="line" />
                  </div>
                  <img src={l2} alt="" />
                </div>
              </div>
              <div className="hsPicBottom">
                <ul className="hsPicList">
                  {this.state.hotSales.map((hotSale, index) => (
                    <li className="hsPicItem" key={index}>
                      <a href="javascript:;">
                        <p>{hotSale.title}</p>
                        <img src={hotSale.image} alt="" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* 人气推荐 */}
          <Split />
          <div className="popular">
            <div className="popularTitle">
              <span>人气推荐</span>
              <span>更多></span>
            </div>
            <div className="popularContent">
              <div className="pcTop">
                <img src={pt} alt="" />
                <div className="right">
                  <p className="rTitle">限时购</p>
                  <p className="rText">60s镜眠贡缎四件套</p>
                  <p className="rText1">400根纯棉贡缎,入门奢华享受生活</p>
                  <p className="rPrice">￥375</p>
                </div>
              </div>
              <div className="pcBottom">
                <ul className="pcList">
                  {this.state.populars.map((popular, index) => (
                    <li className="pcItem" key={index}>
                      <a href="javascript:;">
                        <div
                          className="pcPosi"
                          style={{
                            visibility: popular.design ? 'visible' : 'hidden'
                          }}
                        >
                          {popular.design}
                        </div>
                        <img src={popular.image} alt="" />
                        <p className="pcTitle">
                          <span className="pcText">{popular.text}</span>
                          <span className="pcPrice">￥{popular.price}</span>
                        </p>
                        <p className="pcBtn">
                          <span
                            className="pcGoods"
                            style={{
                              visibility: popular.goods ? 'visible' : 'hidden'
                            }}
                          >
                            {popular.goods}
                          </span>
                          <span
                            className="pcFull"
                            style={{
                              visibility: popular.full ? 'visible' : 'hidden'
                            }}
                          >
                            {popular.full}
                          </span>
                        </p>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* 限时购物 */}
          <Split />
          <div className="limit">
            <div className="limitTitle">
              <span>限时购</span>
              <span>更多></span>
            </div>
            <div className="limitContent">
              <ul className="limitList">
                {this.state.limits.map((limit, index) => (
                  <li className="limitItem" key={index}>
                    <div className="limitPic">
                      <img src={limit.image} alt="" />
                    </div>
                    <div className="limitPrice">
                      <span className="newPrice">￥{limit.newPrice}</span>
                      <span className="oldPrice">￥{limit.oldPrice}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* 新品首发 */}
          <Split />
          <div className="newGood">
            <div className="newGoodTitle">
              <span>新品首发</span>
              <span>更多></span>
            </div>
            <div className="newGoodContent">
              <ul className="ngList">
                {this.state.newGoods.map((newGood, index) => (
                  <li className="ngItem" key={index}>
                    <a href="###">
                      <div
                        className="ngPosi"
                        style={{
                          visibility: newGood.design ? 'visible' : 'hidden'
                        }}
                      >
                        {newGood.design}
                      </div>
                      <div className="ngItemPic">
                        <img src={newGood.image} alt="" />
                      </div>
                      <div className="ngText">
                        <span className="title">{newGood.title}</span>
                        <span className="price">￥{newGood.price}</span>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* 秒杀专区 */}
          <Split />
          <div className="kill">
            <ul className="killList">
              {this.state.kills.map((kill, index) => (
                <li className="killItem" key={index}>
                  <a href="javascript:;">
                    <p className="title">{kill.title}</p>
                    <p className="text">{kill.text}</p>
                    <div className="imgTwo">
                      <img src={kill.image} alt="" />
                      <img src={kill.pic} alt="" />
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* 图片 */}
          <Split />
          <div className="bigImg">
            <br />
          </div>
          {/* 食品-横向滑屏 */}
          <Split />
          <div className="foods">
            <ul className="foodsList">
              {this.state.foods.map((food, index) => (
                <li className="foodsItem" key={index}>
                  <a href="javascript:;">
                    <div
                      className="picPosi"
                      style={{ visibility: food.design ? 'visible' : 'hidden' }}
                    >
                      {food.design}
                    </div>
                    <div className="foodsItemPic">
                      <img src={food.image} alt="" />
                    </div>
                    <span className="foodsTitle">{food.title}</span>
                    <p className="price">
                      <span className="newPrice">￥{food.newPrice}</span>
                      <span className="oldPrice">￥{food.oldPrice}</span>
                    </p>
                    <div className="sellBtn">
                      <span
                        className="sell"
                        style={{ visibility: food.sell ? 'visible' : 'hidden' }}
                      >
                        {food.sell}
                      </span>
                      <span
                        className="full"
                        style={{ visibility: food.full ? 'visible' : 'hidden' }}
                      >
                        {food.full}
                      </span>
                    </div>
                  </a>
                </li>
              ))}
              <li className="foodsItem">
                <a href="javascript:;">
                  <div
                    className="foodsItemPic"
                    style={{ marginBottom: '70px' }}
                  >
                    查看更多 >
                  </div>
                </a>
              </li>
              {/* <li className="foodsItem">
                <a href="javascript:;">
                  <div className="picPosi">永不变味</div>
                  <div className="foodsItemPic">
                    <img src={ch1} alt="" />
                  </div>
                  <span className="foodsTitle">小龙虾3-8栈 3斤</span>
                  <p className="price">
                    <span className="newPrice">￥109</span>
                    <span className="oldPrice">￥129</span>
                  </p>
                  <div className="sellBtn">
                    <span className="sell">特价</span>
                    <span className="full">满减</span>
                  </div>
                </a>
              </li> */}
            </ul>
          </div>
          <Split />
          {/* 恋爱季穿搭 */}
          <div className="loveImg">
            <br />
          </div>
          {/* 恋爱穿搭记横向滑屏 */}
          <div className="loves">
            <ul className="lovesList">
              {this.state.loves.map((love, index) => (
                <li className="lovesItem" key={index}>
                  <a href="javascript:;">
                    <div
                      className="picPosi"
                      style={{ visibility: love.design ? 'visible' : 'hidden' }}
                    >
                      {love.design}
                    </div>
                    <div className="lovesItemPic">
                      <img src={love.image} alt="" />
                    </div>
                    <span className="lovesTitle">{love.title}</span>
                    <p className="price">
                      <span className="newPrice">￥{love.newPrice}</span>
                      <span className="oldPrice">￥{love.oldPrice}</span>
                    </p>
                    <div className="sellBtn">
                      <span
                        className="sell"
                        style={{ visibility: love.sell ? 'visible' : 'hidden' }}
                      >
                        {love.sell}
                      </span>
                      <span
                        className="full"
                        style={{ visibility: love.full ? 'visible' : 'hidden' }}
                      >
                        {love.full}
                      </span>
                    </div>
                  </a>
                </li>
              ))}
              <li className="lovesItem">
                <a href="javascript:;">
                  <div
                    className="lovesItemPic"
                    style={{ marginBottom: '70px' }}
                  >
                    查看更多 >
                  </div>
                </a>
              </li>
            </ul>
          </div>
          {/* 男士精选 */}
          <Split />
          <div className="manImg">
            <br />
          </div>
          {/* 男士精选横向滑屏 */}
          <div className="mans">
            <ul className="mansList">
              {this.state.mans.map((man, index) => (
                <li className="mansItem" key={index}>
                  <a href="javascript:;">
                    <div
                      className="picPosi"
                      style={{ visibility: man.design ? 'visible' : 'hidden' }}
                    >
                      {man.design}
                    </div>
                    <div className="mansItemPic">
                      <img src={man.image} alt="" />
                    </div>
                    <span className="mansTitle">{man.title}</span>
                    <p className="price">
                      <span className="newPrice">￥{man.newPrice}</span>
                      <span className="oldPrice">￥{man.oldPrice}</span>
                    </p>
                    <div className="sellBtn">
                      <span
                        className="sell"
                        style={{ visibility: man.sell ? 'visible' : 'hidden' }}
                      >
                        {man.sell}
                      </span>
                      <span
                        className="full"
                        style={{ visibility: man.full ? 'visible' : 'hidden' }}
                      >
                        {man.full}
                      </span>
                    </div>
                  </a>
                </li>
              ))}
              <li className="mansItem">
                <a href="javascript:;">
                  <div className="mansItemPic" style={{ marginBottom: '70px' }}>
                    查看更多 >
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </section>
        {/* 底部 */}
        <footer className="footer">
          <div className="footerBtn">
            <span>下载APP</span>
            <span>电脑版</span>
          </div>
          <div className="footerText">
            <p>网易公司版权所有&copy;1997-2019</p>
            <p>食品经营许可证:JY13301080111719</p>
          </div>
        </footer>
      </div>
    )
  }
}
