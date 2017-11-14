/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import * as React from "react"
import {
	Platform,
	StyleSheet,
	Text,
	View
} from "react-native"
import { text } from "../common/text"

export default class App extends React.Component<object, object> {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.instructions}>
					{text.label}
				</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#F5FCFF"
	},
	instructions: {
		textAlign: "center",
		color: "#333333",
		marginBottom: 5
	}
})
