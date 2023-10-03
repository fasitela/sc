let store = {
	en: {
		move_walls: "Перетащите стены в редактор",
		move_windows: "Поеретащите окна",
		move_door: "Завершите построение дверью",
		build_done: "Выберите стиль для вашей комнаты",

		minimalism: "Минимализм",
		loft: "Лофт",
		scand: "Скандинавский",
		choose_style: "Выберите стиль",

		preview: "Расположение мебели в комнате",
		look_at_furnitured: "Посмотреть варианты с мебелью",

		wall_color: "Цвет стен",
		floor: "Пол",
		bed: "Кровать",
		chair: "Кресло",
		cf: "Выберите оформление",

		next: "Далее"
	}
	//en: {
	//	move_walls: "Drag walls into editor area",
	//	move_windows: "Now drag windows",
	//	move_door: "Finish it by dragging the door!",
	//	build_done: "Wonderful! Now let's choose a style for your room",

	//	minimalism: "Minimalism",
	//	loft: "Loft",
	//	scand: "Scandinavian",
	//	choose_style: "Choose a style for your room",

	//	preview: "The arrangement of furniture in your room",
	//	look_at_furnitured: "View previews with furniture from shops",

	//	wall_color: "Walls color",
	//	floor: "Floor",
	//	bed: "Bed",
	//	chair: "Armchair",
	//	choose_furniture: "Choose a design",

	//	next: "Next"
	//}
}

export function translate(key) {
	return store.en[key]
}

