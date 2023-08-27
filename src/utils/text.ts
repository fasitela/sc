class I18n {

	private inner: any

	locale: string

	constructor(store: object) {
		this.inner = store
		this.locale = Object.keys(store)[0]
	}

	get(key: string): string {
		const localized = this.inner[this.locale] as any
		return localized[key] as string
	}
}

const store = new I18n({
	ru: {
		move_walls: "Перетащите стены в зону редактора",
		move_windows: "Теперь перетащите окна",
		move_door: "Завершите построение дверью!",
		build_done: "Отлично! Теперь выберите стиль для вашей комнаты",

		minimalism: "Минимализм",
		loft: "Лофт",
		scand: "Скандинавский",
		choose_style: "Выберите стиль комнаты",

		preview: "Расположение мебели в вашей комнате",
		look_at_furnitured: "Посмотреть варианты с мебелью из магазинов",

		wall_color: "Цвет стен",
		floor: "Пол",
		bed: "Кровать",
		chair: "Кресло",
		choose_furniture: "Выберите оформление",

		next: "Далее",
	},
	en: {
		move_walls: "Drag walls into editor area",
		move_windows: "Now drag windows",
		move_door: "Finish it by dragging the door!",
		build_done: "Wonderful! Now let's choose a style for your room",

		minimalism: "Minimalism",
		loft: "Loft",
		scand: "Scandinavian",
		choose_style: "Choose a style for your room",

		preview: "The arrangement of furniture in your room",
		look_at_furnitured: "View previews with furniture from shops",

		wall_color: "Walls color",
		floor: "Floor",
		bed: "Bed",
		chair: "Armchair",
		choose_furniture: "Choose a design",

		next: "Next",
	},
});

store.locale = "en"

export default function get(key: string): string {
	return store.get(key)
}
