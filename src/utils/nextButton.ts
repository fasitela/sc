export function showNextButton(text: string | null) {
	const button = document.querySelector("#next-button")
	if (button == null) {
		return
	}

	if (text != null) {
		button.innerHTML = text
	} else {
		button.innerHTML = "next"//get("next")
	}
	const timing = {
		duration: 200,
		iterations: 1,
	}
	button?.classList.remove("hidden")
	button?.animate([
		{ transform: "translateY(100%)" },
		{ transform: "translateY(0%)" }
	], timing)
}

export function hideNextButton() {
	const button = document.querySelector("#next-button")
	const timing = {
		duration: 200,
		iterations: 1,
	}
	button?.animate([
		{ transform: "translateY(0%)" },
		{ transform: "translateY(100%)" }
	], timing)
	setTimeout(() => {
		button?.classList.add("hidden")
	}, 200)
}
