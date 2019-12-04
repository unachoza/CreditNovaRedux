import React, { Component } from 'react';
import logo from '../logo.svg';
import SimpleTable from './SimpleTable'
import '../App.css';
import {fetchReports} from '../redux/actions/CreditNovaReports'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

class App extends Component {
	componentDidMount() {
		console.log(this.props.store)
		const cursor = "2014-11-12T02:18:22.094Z";
		const count = 5;
		this.props.fetchReports(count, cursor)
		setTimeout(() => console.log(this.props.reports.reports), 2000)	


	}
	render() {
		const { reports } = this.props.reports
	
		return (
			
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to Nova's code challenge!</h1>
					{/* {reports.map(report => <h1>{report.id}</h1>)} */}
				</header>
				<h1>hello Nova Credit</h1>
				{/* <SimpleTable reports={reports}/> */}
				{reports ? reports.map(report => <h1>{report.firstName}</h1>)
				:<h1>loading</h1>}
			</div>
		);
	}
}

const mapStateToProps = state => ({
	reports: state.reports
})
const mapDispatchToProps = dispatch => bindActionCreators({
	fetchReports, 
}, dispatch
)
export default connect(mapStateToProps, mapDispatchToProps)(App);
