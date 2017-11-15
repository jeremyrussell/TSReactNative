// import { SetDisplayStringAction } from "./actions"
import { StoreState } from "./store"
import { SET_DISPLAY_STRING } from "./types"

export function hello(state: StoreState, action: any): StoreState {
	switch (action.type) {
		case SET_DISPLAY_STRING:
			return { ...state, displayString: action.displayString }
	}
	return state
}
