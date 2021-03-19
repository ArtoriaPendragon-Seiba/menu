import axios from "axios";
import React, { Component } from "react";

class Menu extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const { name, sn } = this.props;
		return (
			<div className="menu-list" onClick={() => this.props.handleClick(name,sn)}>
				{name} - ({sn})
			</div>
		);
	}
}

export default Menu;
