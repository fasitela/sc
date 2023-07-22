let activeStyle: string | null

export function saveActiveStyle(style: string) {
	activeStyle = style
}

export function readActiveStyle(): string {
	return activeStyle!
}
