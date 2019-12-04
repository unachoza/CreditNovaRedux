import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import {fetchReports} from '../redux/actions/CreditNovaReports'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

class App extends Component {
	componentDidMount() {
		const cursor = "2014-11-12T02:18:22.094Z";
		const count = 5;
		// Example get reports request
		console.log('in here')
		this.props.fetchReports(count, cursor)

	}
	render() {

		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to Nova's code challenge!</h1>
				</header>
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
