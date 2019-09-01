import React, { Component } from 'react'
import AccountsPage from '../../modules/Accounts'
import './style.css'

class Burger extends Component {
	render() {
		return <div className="burger">

			<div className="sidebar">

				<div className="option">
					Accounts
				</div>
				<div className="option">
					Inventory
				</div>
				<div className="option">
					Stats
				</div>
			</div>
			<div className="header">
			</div>
			<div className="body">
				<div className="page">
					<AccountsPage/>
				</div>
			</div>

			
		</div>
	}
}

export default Burger
