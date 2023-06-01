class Product {
	constructor(title, picture, description, tag, category) {
		this.title = title;
		this.picture = picture;
		this.description = description;
		this.tag = tag;
		this.category = category;
	}
}

products = [
	new Product(
		"Постер 'Cyberpunk'",
		"https://ir.ozone.ru/s3/multimedia-n/wc750/6265744391.jpg",
		"Постер для интерьера на стену (30х40 см). Киберпанк 2077 - Джони Сильверхенд (Cyberpunk 2077 - Johny Silverhand).Отличное украшение любого интерьера. Высокое качество печати. Порадуйте себя и удивите гостей! Или подарите близким - постеры надежно упакованы в тубус.Поставляются скрученными в плотном картонном тубусе. Рамы в комплект не входят.",
		"Интерьер",
		"cp"),
	new Product(
		"Футболка 'Cyberpunk'",
		"https://img3.playprint.ru/products/men-tshirt-3d/2/8/5/2852899/Fncv2bhucWdoxXsRLWdmR2LyWaZlbXLwQTt5NTA0.jpg",
		"Футболка c 3D принтом— это удобная футболка прямого кроя, выполненная из синтетической ткани, приятной на ощупь.Свойства ткани позволяют нанести яркий принт по всей поверхности, сохраняя при этом цену за изделие доступной при персонализированном производстве. Футболка быстро сохнет, не мнется и сохраняет форму.",
		"Одежда",
		"cp"),
	new Product(
		"Кружка 'Cyberpunk'",
		"https://ir.ozone.ru/s3/multimedia-1/wc750/6066513889.jpg",
		"Керамическая кружка с полноцветным глянцевым изображением, объемом 350 мл. Кружка сделана на превосходном уровне в HD качестве.",
		"Посуда",
		"cp"),
	new Product(
		"Шлем 'Cyberpunk'",
		"https://ir.ozone.ru/s3/multimedia-7/wc750/6647154055.jpg",
		"Крутая маска отличается от всех других аксессуаров для косплея. Полна механического и технологического смысла. ",
		"Одежда",
		"cp"),
	new Product(
		"Керамический кубок Верховного Повелителя Вольнира",
		"https://ir.ozone.ru/s3/multimedia-v/wc750/6158425987.jpg",
		"Кубок выполнен из керамики высокого качества и покрыт безопасной для здоровья глазурью. С легкостью выдержит горячие или холодные напитки.",
		"Посуда",
		"ds"),
	new Product(
		"Фигурка 'Арториас'",
		"https://ir.ozone.ru/s3/multimedia-f/wc700/6617588127.jpg",
		"Фигурка в виде персонажа Artorias The Abysswalker по мотивам игры «Dark Souls».",
		"Фигурка",
		"ds"),
	new Product(
		"Графический роман 'Dark Souls'",
		"https://ir.ozone.ru/s3/multimedia-7/wc700/6365545159.jpg",
		"Собрание графических романов по мотивам легендарной компьютерной игры Dark Souls! В книгу вошла вся коллекция из 4 частей",
		"Книга",
		"ds"),
	new Product(
		"Артбук 'Persona 5'",
		"https://ir.ozone.ru/s3/multimedia-1/wc700/6600939193.jpg",
		"К двадцатилетию выхода PERSONA5 Atlus и SEGA выпустили небольшой эксклюзивный артбук в Японии.",
		"Книга",
		"per"),
	new Product(
		"Журнальный стол Rivalli",
		"https://ir.ozone.ru/s3/multimedia-d/wc700/6651080797.jpg",
		"Стильный и современный дизайн столиков серии Матисс-М сочетается с простотой сборки и эксплуатации, что делает их популярными в нашем ассортименте.",
		"Интерьер",
		"per"),
	new Product(
		"Фигурка 'Amamiya Ren' из 'Persona 5'",
		"https://ir.ozone.ru/s3/multimedia-8/wc700/6556670456.jpg",
		"Фигурка крута ыыы",
		"Фигурка",
		"per")
];

nav_bar = ''
nav_bar += (`<li>All In</li>`)

let categories = {
	'Cyberpunk': 'cp',
	'Dark Souls': 'ds',
	'Persona': 'per',
}

Object.entries(categories).forEach(entry => {
	nav_bar += `<li>${entry[0]}</li>`;
}
)

document.querySelector('header').innerHTML += /*html*/
`<span>
	<ul>${nav_bar}</ul>
</span>`


let nav_item = document.querySelectorAll('li');
nav_item.forEach(
	(e) => e.addEventListener('click', () => {
		if (e.textContent == 'All In') {
			mainPage(products);
		}
		else {
			productPage(products, e.textContent);
		}
	})
)

function loadProductPage() {

	function product_page(product_name) {
		document.querySelector('main').innerHTML = '';
		document.querySelector('title').innerHTML = product_name;
		console.log(products)
		let product_info = products.find(el => el.title == product_name)

		document.querySelector('main').innerHTML +=/*html*/
			`<div class="content_box">
				<div class="information">
					<div class="product_image">
						<img src=${product_info.picture} >
					</div>
					<p>${product_name}</p>
					<div class="product_tag">
						${product_info.tag}
					</div>
				</div>
			</div>`

		document.querySelector('.content_box').innerHTML += /*html*/`<div class="about_product">${product_info.description}</div>`
	}

	let product_name = document.querySelectorAll('.product_name');

	product_name.forEach((e) => {
		e.addEventListener('click', () => {
			console.log(e.textContent)
			product_page(e.textContent)
		})
	}
	)
}

function productPage(products, category_name) {

	if (category_name in categories) {

		document.querySelector('main').innerHTML = '';
		document.querySelector('title').innerHTML = category_name.charAt(0) + category_name.toLowerCase().slice(1);

		products.forEach(
			(e) => {
				if (e.category === categories[category_name]) {
					document.querySelector('main').innerHTML += /*html*/
						`<div class="wrapper">
							<div class="all_prod">
							</div>
							<div class="product_image">
								<img src=${e.picture} alt="product_image">
							</div>
							<div class="info_box">
								<div class="product_name">${e.title}</div>
								<br>
								<div class="product_info">
									${e.description.substring(0, 300) + "..."}
								</div>
							</div>
							<div class="Tag">
								${e.tag}
							<div>
						</div>`
				}
			}
		);

		loadProductPage();
	}

	return;
}

function mainPage(products) {
	document.querySelector('main').innerHTML = `<h1 class="top"> Ассортимент </h1>`;
	document.querySelector('title').innerHTML = 'All In';
	let i = 1;

	products.forEach(
		(e) => {
			document.querySelector('main').innerHTML += /*html*/
				`<div class="wrapper">
				<div class="all_prod">
				</div>
				<div class="product_image">
					<img src=${e.picture} alt="product_image">
				</div>
				<div class="info_box">
					<div class="product_name">${e.title}</div>
					<br>
					<div class="product_info">
						${e.description.substring(0, 300) + "..."}
					</div>
				</div>
				<div class="Tag">
					${e.tag}
				<div>
				</div>`
			i += 1;
		}
	);

	loadProductPage();
}

mainPage(products);
loadProductPage();

document.querySelector('footer').innerHTML += `© 2023 Merhendise Ink. `
