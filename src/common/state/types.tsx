export const SET_DISPLAY_STRING = "SET_DISPLAY_STRING"
export type SET_DISPLAY_STRING = typeof SET_DISPLAY_STRING

export interface HelloWorldStateProperties {
	displayString: string
}

export interface HelloWorldDispatchProperties {
	setDisplayStringAction: any
}

export interface HelloWorldProperties extends HelloWorldStateProperties, HelloWorldDispatchProperties {}
