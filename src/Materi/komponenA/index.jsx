import React from "react";
import ClassComponent from "./pembahasan/ClassComponent";
import FunctionalComponent from "./pembahasan/FunctionalComponent";

export default class komponenA extends React.Component {
 
	render() {
		return (
			<div>
			<ClassComponent />
			<FunctionalComponent />
			</div>
		)
	} 
}