import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'
export default class ShopTitle extends Component {
	static propTypes = {
		tittle:PropTypes.string.isRequired,
		more:PropTypes.string,
	}
  render() {
    return (
      <div>
        <div className="brandTitle">
          <span>{this.props.tittle}</span>
          <span>{this.props.more}</span>
        </div>
      </div>
    )
  }
}
