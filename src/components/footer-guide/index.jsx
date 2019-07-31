import React, { Component } from 'react'
import { Switch, Route, Redirect, NavLink, withRouter } from 'react-router-dom'
import Main from '../../pages/main/index'
import Personal from '../../pages/personal/index'
import ShopCart from '../../pages/shop-cart/index'
import Topic from '../../pages/topic/index'
import Category from '../../pages/category/index'
import './index.css'
class FooterGuide extends Component {
  render() {
    const { pathname } = this.props.location
    console.log(pathname)
    let isShow =( pathname === '/personal' || pathname ==='/shopcart') ? true : false
    console.log(isShow)
    console.log(pathname)
    return (
      <div>
        <Switch>
          <Route path="/main" component={Main} />
          <Route path="/category" component={Category} />
          <Route path="/topic" component={Topic} />
          <Route path="/shopcart" component={ShopCart} />
          <Route path="/personal" component={Personal} />
          <Redirect to="/main" />
        </Switch>
        <ul
          className="footerList"
          style={{ visibility: isShow ? 'hidden' : 'visible' }}
        >
          <li className="footerItem">
            <NavLink
              to="/main"
              className="guideItem"
              activeStyle={{ color: '#f00' }}
            >
              <span>
                <i className="iconfont icon-home" />
              </span>
              <span>首页</span>
            </NavLink>
            <NavLink
              to="/category"
              className="guideItem"
              activeStyle={{ color: '#f00' }}
            >
              <span>
                <i className="iconfont icon-category" />
              </span>
              <span>分类</span>
            </NavLink>
            <NavLink
              to="/topic"
              className="guideItem"
              activeStyle={{ color: '#f00' }}
            >
              <span>
                <i className="iconfont icon-category" />
              </span>
              <span>识物</span>
            </NavLink>
            <NavLink
              to="/shopcart"
              className="guideItem"
              activeStyle={{ color: '#f00' }}
            >
              <span>
                <i className="iconfont icon-shopCart" />
              </span>
              <span>购物车</span>
            </NavLink>
            <NavLink
              to="/personal"
              className="guideItem"
              activeStyle={{ color: '#f00' }}
            >
              <span>
                <i className="iconfont icon-personal" />
              </span>
              <span>个人</span>
            </NavLink>
          </li>
        </ul>
      </div>
    )
  }
}
export default withRouter(FooterGuide)
