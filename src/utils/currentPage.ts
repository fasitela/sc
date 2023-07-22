let pages: string[] = []
let lastPageIndex = 0

window.onload = () => {
	const tmp = document.querySelectorAll("section")
	tmp.forEach(e => pages.push(e.id))
}

export function goto(slug: string) {
	lastPageIndex = pages.findIndex(page => page == slug)
	document.getElementById(slug)?.scrollIntoView({
		behavior: "smooth",
	});
}

export function gotoNext() {
	goto(pages[lastPageIndex + 1])
}
