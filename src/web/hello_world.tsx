import * as React from "react"
import * as ReactDOM from "react-dom"
import { text } from "../common/text"

const seven: number = 7

class App extends React.Component {
	render() {
		return (
			<span>{text.label}</span>
		)
	}
}

ReactDOM.render(
	<App />,
	document.getElementById("root") as HTMLElement
)
