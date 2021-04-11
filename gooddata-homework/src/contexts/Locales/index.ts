import * as React from "react";

export interface LocalesState {
	locales: Locales;
}

export interface Locales {
	[key: string]: string | number;
}

export function createLocalesState(locales: Locales = {}): LocalesState {
	return {
		locales
	}
}

export const LocalesContext = React.createContext<LocalesState>(createLocalesState());

export function t(state: LocalesState, key: string, ...args: Array<string | number>): string {
	let text = (state.locales[key] || key).toString();

	args.forEach((value, index) => {
		text = text.replace(new RegExp(`\\$${index}`, "gi"), value.toString());
	});

	return text;
}