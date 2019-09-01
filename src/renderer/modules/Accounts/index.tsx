import React, { Component } from 'react'

import './style.css'
class AccountsPage extends Component {
	render() {
		return <div className="AccountsPage">
			<div className="title"> Accounts Page</div>

			<div className="newtable section">
				<div className="newtable-row heading">
					<div>Id</div>
					<div>Date</div>
					<div>Credit</div>
					<div>Debit</div>
					<div>Voucher No</div>
				</div>
				<div className="newtable-row">
					<div>01</div>
					<div>21-12-2019</div>
					<div> 5000</div>
					<div> 0</div>
					<div> 1021</div>
				</div>
				<div className="newtable-row">
					<div>01</div>
					<div>21-12-2019</div>
					<div> 5000</div>
					<div> 0</div>
					<div> 1021</div>
				</div>
				<div className="newtable-row">
					<div>01</div>
					<div>21-12-2019</div>
					<div> 5000</div>
					<div> 0</div>
					<div> 1021</div>
				</div>
				<div className="newtable-row">
					<div>01</div>
					<div>21-12-2019</div>
					<div> 5000</div>
					<div> 0</div>
					<div> 1021</div>
				</div>
				<div className="newtable-row">
					<div>01</div>
					<div>21-12-2019</div>
					<div> 5000</div>
					<div> 0</div>
					<div> 1021</div>
				</div>
				<div className="newtable-row">
					<div>01</div>
					<div>21-12-2019</div>
					<div> 5000</div>
					<div> 0</div>
					<div> 1021</div>
				</div>
				<div className="newtable-row">
					<div>01</div>
					<div>21-12-2019</div>
					<div> 5000</div>
					<div> 0</div>
					<div> 1021</div>
				</div>
				<div className="newtable-row">
					<div>01</div>
					<div>21-12-2019</div>
					<div> 5000</div>
					<div> 0</div>
					<div> 1021</div>
				</div>
				<div className="newtable-row">
					<div>01</div>
					<div>21-12-2019</div>
					<div> 5000</div>
					<div> 0</div>
					<div> 1021</div>
				</div>
				<div className="newtable-row">
					<div>01</div>
					<div>21-12-2019</div>
					<div> 5000</div>
					<div> 0</div>
					<div> 1021</div>
				</div>
				<div className="newtable-row">
					<div>01</div>
					<div>21-12-2019</div>
					<div> 5000</div>
					<div> 0</div>
					<div> 1021</div>
				</div>
				<div className="newtable-row">
					<div>01</div>
					<div>21-12-2019</div>
					<div> 5000</div>
					<div> 0</div>
					<div> 1021</div>
				</div>
				<div className="newtable-row">
					<div>01</div>
					<div>21-12-2019</div>
					<div> 5000</div>
					<div> 0</div>
					<div> 1021</div>
				</div>
				<div className="newtable-row">
					<div>01</div>
					<div>21-12-2019</div>
					<div> 5000</div>
					<div> 0</div>
					<div> 1021</div>
				</div>
			</div>
			<div className="section">
				<div className="row">
					<label>Name</label>
					<input type="text" />
				</div>
				<div className="row">
					<label>Type</label>
					<input type="text" />
				</div>
				<div className="row">
					<label>Credit</label>
					<input type="text" />
				</div>
				<div className="row">
					<label>Debit</label>
					<input type="text" />
				</div>
				<div className="row" style={{
					marginTop: "5px",
					lineHeight: "25px",
					backgroundColor: "grey",
					textAlign: "center",
					paddingTop: "2px",
					paddingBottom: "5px",
					borderRadius: "5px",
					justifyContent: "center"
				}}>Enter</div>
			</div>
		</div>
	}
}

export default AccountsPage
