import React, { Component } from 'react'

import '../style.css'

interface S {

}

interface P {

}

export default class VoucherPage extends Component<P , S> {
	
	constructor(props: P) {
		super(props)
	
		this.state = {
			 
		}
	}
	
	
	render() {
		return <div className="voucher-page">
			<div className="title"> Voucher </div>
			<div className="section">
				<div className="row">
					<label>Voucher Type</label>
					<select>
						<option> Cash Payment</option>
						<option> Bank Payment</option>
						<option> Cash Receipt</option>
						<option> Bank Receipt</option>
					</select>
				</div>
			</div>
		</div>
	}
}
