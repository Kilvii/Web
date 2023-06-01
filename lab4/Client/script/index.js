let body = document.querySelector('body');
body.appendChild(document.createElement('header'));
body.appendChild(document.createElement('main'));
body.appendChild(document.createElement('footer'));
document.querySelector('footer').innerHTML += `©2023 All rights reserved`

let header = document.querySelector('header');
header.innerHTML += ('<span><ul></ul></span>');


base_url = 'http://localhost:3000'


productPage = async (id) => {
    document.querySelector('main').innerHTML = '';
    await fetch(`${base_url}/product/byId/${id}`)
        .then(response => response.json())
		.then(product => {
			document.title = product.Title;
			document.querySelector('main').innerHTML += /*html*/ 
														`<div class="content_box">
														<div class="information">
															<div class="product_image">
																<img src=${product.Image} >
															</div>
															<p>${product.Title}</p>
															<div class="product_tag">
																${product.Tag}
															</div>
														</div>
													</div>`
													document.querySelector('.content_box').innerHTML += /*html*/`<div class="about_product">${product.Description}</div>`
							})
}

drawMain = (product) => {
	
    document.querySelector('main').innerHTML += /*html*/`<div class="wrapper">
															<div class="all_prod">
															</div>
															<div class="product_image">
																<img src=${product.Image} alt="product_image">
															</div>
															<div class="info_box">
																<div class="product_name"  onclick="productPage(${product.Id})">${product.Title}</div>
																<br>
																<div class="product_info">
																	${product.Description.substring(0, 300) + "..."}
																</div>
															</div>
															<div class="Tag">
																${product.Tag}
															<div>
														</div>`;
}


selectPageByThemeId = async (id, ThemeTitle) => {
    document.title = ThemeTitle;
    document.querySelector('main').innerHTML = '';
    await fetch(`${base_url}/product/byThemeId/${id}`)
        .then(response => response.json())
        .then(data => 
			data.map(album => {
                drawMain(album);
            }))
}


allInPage = async () => {
    document.title = 'All In';
    document.querySelector('main').innerHTML = '';
	document.querySelector('main').innerHTML = `<h1 class="top"> Ассортимент </h1>`;

    await fetch(`${base_url}/product/all`)
        .then(response => response.json())
        .then(data => {
			console.log(data)
            data.map(album => {
                 drawMain(album, album.PlaceChart);
            })})
}


navigationBar = async () => {
    document.querySelector('header>span>ul').innerHTML += `<li onclick="allInPage()">All In</li>`;
    await fetch(`${base_url}/theme/all`)
        .then(response => response.json())
        .then(Theme => {
            Theme.map(Theme => {
                document.querySelector('header>span>ul').innerHTML += `<li onclick="selectPageByThemeId(${Theme.Id}, '${Theme.Title}')">${Theme.Title}</li>`;
            })
        })
}

allInPage();
navigationBar();
