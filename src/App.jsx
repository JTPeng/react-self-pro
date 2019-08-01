/**
 * Created by JTPeng on 2019-07-29 09:00.
 * Description：
 */
import React, { Component } from 'react'
import './asset/reset.css'
import { Switch,Route,Redirect } from 'react-router-dom'
import FooterGuide from './components/footer-guide'
import Search from './pages/search'
import Main from './pages/main'
import Personal from './pages/personal'
import ShopCart from './pages/shop-cart'
import Topic from './pages/topic'
import Category from './pages/category'
export default class App extends Component {
  render() {
    return (
      <div>
				<Switch>
          <Route path="/main" component={Main} />
          <Route path="/category" component={Category} />
          <Route path="/topic" component={Topic} />
          <Route path="/shopcart" component={ShopCart} />
          <Route path="/personal" component={Personal} />
					<Route path="/search" component={Search}/>
          <Redirect to="/main" />
        </Switch>
				<FooterGuide/>
      </div>
    )
  }
}
