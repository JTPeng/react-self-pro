import React, { Component } from 'react'
import './index.css'
export default class ShopCart extends Component {
  render() {
    return (
      <div>
        <div className="shopCartContainer">
          <header className="scHeader">
            <div className="headerTop">
              <div>购物车</div>
              <a href="javascript:;">领券</a>
            </div>
            <div className="headerBottom">
              <ul className="hbList">
                <li className="hbItem">
                  <a href="javascript:;">30天无忧退货</a>
                </li>
                <li className="hbItem">
                  <a href="javascript:;">4小时快速退款</a>
                </li>
                <li className="hbItem">
                  <a href="javascript:;">满88元免邮费</a>
                </li>
              </ul>
            </div>
          </header>
          <section className="scContent">
						<div className="bcBtn">
							<div className="bcImg" />
							<div className="scButton">登录</div>
						</div>
          </section>
        </div>
      </div>
    )
  }
}
