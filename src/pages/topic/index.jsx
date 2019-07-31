import React, { Component } from 'react'
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'
import tabsDetail from '../../components/tabsDetail/'
import BScroll from 'better-scroll'
import './index.css'
export default class Topic extends Component {
  state = {
    navTabs: [
      { id: 1, title: '盛夏特别版' },
      { id: 2, title: '推荐' },
      { id: 3, title: '好货内部价' },
      { id: 4, title: '回购榜' },
      { id: 5, title: '晒单' },
      { id: 6, title: '开发者日记' },
      { id: 7, title: '达人' },
      { id: 8, title: 'HOME' }
    ]
  }
  componentDidMount = () => {
    this.tabs = new BScroll('.tab', {
      scrollX: true,
      click: true
    })
  }
  render() {
    return (
      <div>
        <div className="tContainer">
          <header className="tMainHeader">
            <div className="tmhHome">
              <a href="javascript:;">
                <i
                  className="iconfont icon-home"
                  style={{ fontSize: '22px' }}
                />
              </a>
            </div>
            <div className="tmhFind">
              <span className="find">发现</span>
              <span>甄选家</span>
            </div>
            <div className="tmhSearchCar">
              <a href="javascript:;">
                <i
                  className="iconfont icon-search "
                  style={{ fontSize: '22px',marginRight: '10px' }}
                />
                <i
                  className="iconfont icon-shopCart "
                  style={{ fontSize: '22px', marginRight: '10px' }}
                />
              </a>
            </div>
          </header>
          <div className="tab">
            <ul className="tabLists">
              {this.state.navTabs.map((tab, index) => (
                <li className="tabItem" key={index}>
									<NavLink
                    to={`/topic/tabsDetail/${tab.id}`}
                    activeStyle={{ color: 'red' }}
                  >
                    {tab.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
					{/* tabs显示的具体内容 */}
					<section className="tabContent">
						<Switch>
							<Route
								path="/topic/tabsDetail/:id"
								component={tabsDetail}
							/>
							<Redirect
								to="/topic/tabsDetail/2"
								component={tabsDetail}
							/>
						</Switch>
					</section>
				</div>
      </div>
    )
  }
}
