import React, { Component } from 'react'
import Split from '../../components/split'
import BScroll from 'better-scroll'
import { Switch, Route, NavLink, Redirect } from 'react-router-dom'
import CategoryDetail from '../../components/categoryDetail/'
import './index.css'

export default class Category extends Component {
  state = {   
    navLists: [
      { id: 1, title: '推荐专区' },
      { id: 2, title: '夏凉专区' },
      { id: 3, title: '爆品专区' },
      { id: 4, title: '爆品专区' },
      { id: 5, title: '新品专区' },
      { id: 6, title: '居家生活' },
      { id: 7, title: '服饰鞋包' },
      { id: 8, title: '美食酒水' },
      { id: 9, title: '个户清洁' },
      { id: 10, title: '夏凉专区' },
      { id: 11, title: '母婴亲子' },
      { id: 12, title: '运动旅行' },
      { id: 13, title: '服饰鞋包' },
      { id: 14, title: '美食酒水' },
      { id: 15, title: '个户清洁' }
    ]
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({})
    }, 1000)
    this.navList = new BScroll('.leftNav', {
      click: true,
      scrollY: true
    })
  }
  render() {
    const { navLists } = this.state
    return (
      <div>
        <header className="catHeaderContainer">
          <input
            className="search"
            type="text"
            placeholder="搜索商品,共21594款好物"
          />
        </header>
        <section className="catContent">
          <div className="leftNav">
            <ul className="navList">
              {navLists.map((navList, index) => (
                <li className="navItem" key={index}>
                  <NavLink
                    to={`/category/categoryDetail/${navList.id}`}
                    activeStyle={{ color: 'red', borderLeft: '1px solid red' }}
                  >
                    {navList.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="rightContent">
            <div className="rightWrap">
              <Switch>
                <Route
                  path="/category/categoryDetail/:id"
                  component={CategoryDetail}
                />
                <Redirect
                  to="/category/categoryDetail/1"
                  component={CategoryDetail}
                />
              </Switch>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
