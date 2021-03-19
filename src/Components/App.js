import axios from "axios";
import React, { Component } from "react";
import "../Styles/App.css";
import Menu from "./Menu";
import List from "./List";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			menu: [],
			list: [],
			currentList: "",
			currentSN: "",
		};
	}
	componentDidMount() {
		axios
			.get("http://stream-restaurant-menu-svc.herokuapp.com/category")
			.then((res) => {
				this.setState({ menu: [...res.data] });
			})
			.catch((err) => {
				console.log(err);
			});
	}
	handleClick(name, sn) {
		axios
			.get(
				`http://stream-restaurant-menu-svc.herokuapp.com/item?category=${sn}`
			)
			.then((res) => {
				console.log(res);
				this.setState({
					list: [...res.data],
					currentList: name,
					currentSN: sn,
				});
			})
			.catch((err) => {
				console.log(err);
			});
	}
	render() {
		return (
			<div className="main-container">
				<h1>Menu Categories</h1>
				<div className="list-and-detail">
					<div className="categories-container">
						{this.state.menu.map((item) => (
							<Menu
								key={item.id}
								name={`${item.name} - ${item.short_name}`}
								handleClick={this.handleClick.bind(this)}
								sn={item.short_name}
							/>
						))}
					</div>
					{this.state.currentList ? (
						<div className="list-container">
							<h2>Item in Category: ({this.state.currentSN})</h2>
							<table>
								<thead>
									<tr>
										<th>Name</th>
										<th>Description</th>
									</tr>
								</thead>
								<tbody>
									{this.state.list.map((item) => (
										<List
											name={item.name}
											description={item.description}
											key={item.id}
										/>
									))}
								</tbody>
							</table>
						</div>
					) : (
						<></>
					)}
				</div>
			</div>
		);
	}
}
export default App;
