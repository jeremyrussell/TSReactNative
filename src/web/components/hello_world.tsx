import * as React from "react"
import { setDisplayStringAction } from "../../common/state/actions"
import { HelloWorldProperties } from "../../common/state/types"

export default class HelloWorld extends React.Component<HelloWorldProperties, any> {
	componentDidMount() {
		setTimeout(() => {
			this.props.setDisplayStringAction("hello world!")
		}, 1000)
	}
	render() {
		const displayString = this.props.displayString || "Waiting ..."
		return (
			<span>{displayString}</span>
		)
	}
}
