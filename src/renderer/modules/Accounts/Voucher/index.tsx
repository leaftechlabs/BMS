import React, { Component } from 'react'

import '../style.css'

type DataRow = {
	id: number
	name: string
	email: string
}
interface S {
	data: DataRow[]
	name: string
	email: string
}
interface P {

}

/**
 * 1) chart of accounts
 * 
 * Cash Payment:
 * 	date, company name 
 * pay to,
 * debit,
 * credit
 * 
 * Bank Payment:
 * date, payto, bank name,
 * chevcck no, check date,
 * debit, credit,
 * 
 */



export default class VoucherPage extends Component<P , S> {
	
	constructor(props: P) {
		super(props)
	
		this.state = {
			data: [],
			name: "",
			email: ""
		}
	}

	componentWillMount() {

		fetch('http://localhost:8080/users')
			.then(resp => {
				console.log("resp", resp)
				return resp.json()
			})
			.then(data => {
				console.log("In data", data)
				this.setState({ data })
			})
			.catch(err => {
				console.log("Error", err)
				window.alert(`Error Fetching User List\n${err}`)
			})
		
		//for putting
		/**
			fetch('https://localhost:8080/users/', {
				method: 'PUT',
				body: JSON.stringify({
					name: '',
					email: ''
				})
			}).then(response => {
				return response.json()
			}).then(json => {
				window.alert("json")
			})
		 */
	}

	adduser = (name: string, email: string) => {
		
		console.log("Blah BLAH",name, email)
		
		fetch('http://localhost:8080/users',
			{
				method: 'POST',
				headers: {
					'Accept': 'applocation/json, text/plain, */*',
					'Content-type': 'application/json'
				},
				body: JSON.stringify({
					name,
					email
				})
			}
		).then(response => {
			//console.log("Post response", response.text())
			return response.text()
		}).then(resp => {
			window.alert(`Response of addUser\n${resp}`)
		})
	}
	
	onAddUserHandler = () => {
		const { name, email } = this.state
		console.log("Name",name,"\nEmail",email)
		
		this.adduser(name,email)
	}
	
	render() {
		console.log("Data", this.state.data)
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
				<div className="row">
					<label>Search Code</label>
					<input type="text" />
				</div>
			</div>

			<div className="section">

				<div className="title">
					Cash Payment
				</div>
				<div className="row">
					<label>Title </label>
					<div> Entertainment </div>
				</div>
				<div className="row">
					<label>Date</label>
					<div>22-22-2020</div>
				</div>
				<div className="row">
					<label>Company Name</label>
					<div>ABC Company</div>
				</div>
				<div className="row">
					<label>Pay To:</label>
					<input type="text" />
				</div>
				<div className="row">
					<label>Debit:</label>
					<input type="number" />
				</div><div className="row">
					<label>Credit:</label>
					<input type="number" />
				</div>
				<div className="button" style={{ backgroundColor: "grey", marginTop: "5px", textAlign:"center", color: "white", borderRadius:"2px" }}> Add </div>
			</div>
			<div className="section">

			<div className="title">
				Bank Payment
			</div>
			<div className="row">
				<label>Title </label>
				<div> Entertainment </div>
			</div>
			<div className="row">
				<label>Date</label>
				<div>22-22-2020</div>
			</div>
			<div className="row">
				<label>Company Name</label>
				<div>ABC Company</div>
			</div>
			<div className="row">
				<label>Pay To:</label>
				<input type="text" />
			</div>
			<div className="row">
				<label>Bank Name</label>
				<input type="text" />
				</div>
				<div className="row">
				<label>Check No</label>
				<input type="text" />
			</div>
			<div className="row">
				<label>Debit:</label>
				<input type="number" />
			</div><div className="row">
				<label>Credit:</label>
				<input type="number" />
			</div>
			<div className="button" style={{ backgroundColor: "grey", marginTop: "5px", textAlign:"center", color: "white", borderRadius:"2px" }}> Add </div>
			</div>


			{/* <div className="section">
				<div className="row">
					<label>Name</label>
					<input type="text" onChange={(e) => this.setState({ name: e.target.value })}/>
				</div>
				<div className="row">
					<label>Email</label>
					<input type="text" onChange={(e) => this.setState({ email: e.target.value })}/>
				</div>
				<div className="button" style={{backgroundColor:"grey", color:"white"}} onClick={() => this.onAddUserHandler()}> Add User</div>
			</div>
			
			{
				Object.values(this.state.data)
					//.filter(i => i.name)
					.map(i => <div key={i.id} className="section">
						<div>{i.id}</div>
						<div className="row">
							<label>Name</label>
							<div>{i.name}</div>
						</div>
						<div className="row">
							<label>Email</label>
							<div>{i.email}</div>
						</div>
					</div>) }*/}
			
		</div>
	}
}
