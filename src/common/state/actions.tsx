import { SET_DISPLAY_STRING } from "./types"

export interface SetDisplayString {
	type: SET_DISPLAY_STRING
	displayString: string
}
// export type SetDisplayStringAction = SetDisplayString

export function setDisplayStringAction(displayString: string): SetDisplayString {
	return {
		type: SET_DISPLAY_STRING,
		displayString: displayString
	}
}
