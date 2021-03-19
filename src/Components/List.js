import React, { Component } from "react";

class List extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const { name, description } = this.props;
		return (
			<>
				<tr>
					<td>{name}</td>
					<td>{description}</td>
				</tr>
			</>
		);
	}
}
export default List;
