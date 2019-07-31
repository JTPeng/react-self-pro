import React, { Component } from 'react'
import './index.css'
export default class Personal extends Component {
  state = {
    loginWays: true,
    phoneLogin: false,
    emailLogin: false,
    pwdLogin: false
  }
  phoneLogin = () => {
    this.setState({
      loginWays: false,
			phoneLogin: true,
			emailLogin: false,
    pwdLogin: false
    })
  }
  emailLogin = () => {
    this.setState({
			emailLogin: true,
			loginWays: false,
			pwdLogin: false,
			phoneLogin: false,
    })
  }
  otherWays = () => {
    this.setState({
      loginWays: true,
			phoneLogin: false,
			emailLogin: false,
			pwdLogin: false
    })
  }
  pwdLogin = () => {
    this.setState({
      phoneLogin: false,
      emailLogin: false,
      loginWays: false,
      pwdLogin: true
    })
  }
  render() {
    console.log(this)
    const { loginWays, phoneLogin, emailLogin, pwdLogin } = this.state
    return (
      <div>
        <div className="personalContainer">
          <header className="perHeader">
            <div className="perHome">
              <a href="javascript:;">
                <i
                  className="iconfont icon-home"
                  style={{ fontSize: '22px' }}
                />
              </a>
            </div>
            <div className="perFind">
              <span>网易严选</span>
            </div>
            <div className="perSearchCar">
              <a href="javascript:;">
                <i
                  className="iconfont icon-search "
                  style={{ fontSize: '22px', marginRight: '10px' }}
                />
                <i
                  className="iconfont icon-shopCart "
                  style={{ fontSize: '22px', marginRight: '10px' }}
                />
              </a>
            </div>
          </header>
          <section className="perContent">
            {/* 登录方式 */}
            <div className={loginWays ? 'toggleWays' : 'toggleWays on'}>
              <div className="perBgPic" />
              <div className="loginWays">
                <div className="phoneLogin" onClick={this.phoneLogin}>
                  <i className="iconfont icon-phone" />
                  <span>手机号快速登录</span>
                </div>
                <div className="emailLogin" onClick={this.emailLogin}>
                  <i className="iconfont icon-mail" />
                  <span>邮箱账号登录</span>
                </div>
              </div>
              <ul className="loginList">
                <li className="loginItem" style={{ marginRight: '14px' }}>
                  <i className="iconfont icon-weixin" />
                  <span>微信</span>
                </li>
                <li
                  className="loginItem"
                  style={{
                    borderRight: '1px solid #000',
                    borderLeft: '1px solid #000'
                  }}
                >
                  <i className="iconfont icon-qq" />
                  <span>QQ</span>
                </li>
                <li className="loginItem" style={{ marginLeft: '14px' }}>
                  <i className="iconfont icon-weibo" />
                  <span>微博</span>
                </li>
              </ul>
            </div>
            {/* 手机登录 */}
            <div className={phoneLogin ? 'phoneLogin' : 'phoneLogin on'}>
              <div className="phoneBg" />
              <form className="login">
                <input
                  type="text"
                  placeholder="请输入手机号"
                  className="username"
                />
                <div className="password">
                  <input type="text" placeholder="请输入短信验证码" />
                  <span>获取验证码</span>
                </div>
                <div className="loginText">
                  <span className="loginProblem">遇到问题?</span>
                  <span onClick={this.pwdLogin}>使用密码验证登录</span>
                </div>
                <input type="submit" value="登录" className="loginSub" />
                <div className="check">
                  {/* selected控制是否被选中 */}
                  <span className="checked selected" />
                  <span>
                    我同意<a href="javascript:;">《服务条款》</a>和
                    <a href="javascript">《网易隐私条款》</a>
                  </span>
                </div>
              </form>
              <div className="otherWays" onClick={this.otherWays}>
                其他登录方式 >
              </div>
            </div>
            {/* 邮箱登录 */}
            <div className={emailLogin ? 'emailLogin' : 'emailLogin on'}>
              <div className="emailBg" />
              <form className="login">
                <input
                  type="text"
                  placeholder="邮箱账号"
                  className="emailUsername"
                />
                <input type="text" placeholder="密码" className="password" />
                <div className="loginText">
                  <span>注册账号</span>
                  <span>忘记密码</span>
                </div>
                <input type="submit" value="登录" className="loginSub" />
              </form>
              <div className="otherWays" onClick={this.otherWays}>
                其他登录方式 >
              </div>
            </div>
            {/* 密码登录 */}
            <div className={pwdLogin ? 'pwdLogin' : 'pwdLogin on'}>
              <div className="pwdBg" />
              <form className="login">
                <input
                  type="text"
                  placeholder="请输入账号/手机号"
                  className="pwdUsername"
                />
                <input type="text" placeholder="密码" className="password" />
                <div className="loginText">
                  <span>忘记密码</span>
                  <span className="emailLogin" onClick={this.phoneLogin}>短信快捷登录</span>
                </div>
                <input type="submit" value="登录" className="loginSub" />
              </form>
              <div className="otherWays" onClick={this.otherWays}>
                其他登录方式 >
              </div>
            </div>
          </section>
        </div>
      </div>
    )
  }
}
