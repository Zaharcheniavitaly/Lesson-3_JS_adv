'use strict';

class ProductList {
	constructor(container = '.products') {
		this.container = container;
		this.goods = [];
		this._fetchProducts();//рекомендация, чтобы метод был вызван в текущем классе
		this.render();//вывод товаров на страницу

		this.calcuTotalPrice(); // общая сумма товаров
	}

	_fetchProducts() {
		this.goods = [
			{
				id: 1,
				title: 'Notebook',
				img: 'https://i.ibb.co/KGhr6FQ/notebook.jpg',
				price: 2000
			},
			{
				id: 2,
				title: 'Mouse',
				img: 'https://i.ibb.co/jh6d9Ds/mouse.jpg',
				price: 20
			},
			{
				id: 3,
				title: 'Keyboard',
				img: 'https://i.ibb.co/vHL3Ydv/klaviatura.jpg',
				price: 200
			},
			{
				id: 4,
				title: 'Gamepad',
				img: 'https://i.ibb.co/09GSdXZ/gamepad.jpg',
				price: 50
			},
			{
				id: 5,
				title: 'Monitor',
				img: 'https://i.ibb.co/Sd4Z07m/monitor.jpg',
				price: 1600
			},
			{
				id: 6,
				title: 'System unit',
				img: 'https://i.ibb.co/Z19mKm7/syst-unit.jpg',
				price: 1900
			},
		];
	}

	render() {
		const block = document.querySelector(this.container);
		for (let product of this.goods) {
			const item = new ProductItem(product);
			block.insertAdjacentHTML("beforeend", item.render());
			//              block.innerHTML += item.render();
		}
	}

	/**
	 * метод суммирует все цены 
	 * @returns возвращает итоговую сумму
	 */
	calcuTotalPrice() {
		// let totalPrice = 0;
		// for (let i = 0; i < this.goods.length; i++) {
		// 	totalPrice += this.goods[i].price;
		// }
		// console.log(totalPrice);
		// return totalPrice;

		//	или так:

		const totalPrice = this.goods.reduce((total, item) => total + item.price, 0);
		console.log(totalPrice);
	}

}


class ProductItem {
	constructor(product) {
		this.title = product.title;
		this.id = product.id;
		this.price = product.price;
		this.img = product.img;
	}
	render() {

		return `
		        <div class="product-item">
                 <h3 class="product-title">${this.title}</h3>
		           <img class="product-img" src="${this.img} alt="${this.title}">
                 <p class="product-price">${this.price.toLocaleString()} $</p>
                 <button data-productid="${this.id}" class="product__buy-btn">Купить</button>
              </div>
				`
	}
}

let list = new ProductList();
list.render();



class BasketList {

	addProduct() {

	}

	removeProduct() {

	}

	changeProduct() {

	}

	render() {

	}

}


class BasketItem {

	render() {

	}

}




