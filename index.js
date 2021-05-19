class CoffeeShop {
	constructor (name, menu, orders = []) {
		this.name = name;
		this.menu = menu;
		this.orders = orders;
	}
	addOrder(itemToAdd) {
		for (let i = 0; i < this.menu.length; i++) {
			if (this.menu[i].item === itemToAdd) {
				this.orders.push(this.menu[i].item);
				break;
			} if (i === this.menu.length - 1) {
				return "This item is currently unavailable!";
			}
		}
	}
	fulfillOrder() {
		if (this.orders.length != 0) { 
			//shift instead of pop (FIFO)
			return `The ${this.orders.shift()} is ready`;
		} else {
			return "All orders have been fulfilled!";
		}	
	}
	listOrders() {
		return this.orders;
	}
	dueAmount() {
		let amount = 0;
		for (let f = 0; f < this.orders.length; f++) {
			for (let i = 0; i < this.menu.length; i++) {
				if (this.menu[i].item === this.orders[f]) {
					amount = amount + this.menu[i].price;
					break;
				} 
			}
		}
		return `€ ${amount.toFixed(2)}`;
	}
	cheapestItem() {
		let cheapest = this.menu[0];
		for (let i = 1; i < this.menu.length; i++) {
			if (this.menu[i].price < cheapest.price) {
				cheapest = this.menu[i];
			}
		}
		return cheapest.item;
	}
	drinksOnly() {
		const drinks = [];
		for (const item of this.menu) {
			if(item.type === 'drink') {
				drinks.push(item.item)
			}
		}
		return drinks;
	}
	foodOnly() {
		const foods = [];
		for (const item of this.menu) {
			if(item.type === 'food') {
				foods.push(item.item)
			}
		}
		return foods;
	}
}

const tailsMenu = [
	{ item: "cinnamon roll", 	type: 'food',  price: 2.95},
	{ item: "iced coffee", 		type: 'drink', price: 2.45},
	{ item: "lemonade", 		type: 'drink', price: 0.45},
	{ item: "orange juice", 	type: 'drink', price: 1.45},
	{ item: "Espresso",         type: "drink", price: 2.50 },
	{ item: "Macchiato",        type: "drink", price: 3.00 },
	{ item: "Americano",        type: "drink", price: 3.00 },
	{ item: "Flat white",       type: "drink", price: 3.00 },
	{ item: "Muffin",           type: "food",  price: 2.50 },
	{ item: "Stuffin",          type: "food",  price: 51.50 },
	{ item: "Unicorn muffin",   type: "food",  price: 2.50 },
	{ item: "Pegasos muffin",   type: "food",  price: 2.50 },
	{ item: "Toast",            type: "food",  price: 1.50 },
	{ item: "A single potato",  type: "food",  price: 0.50 },
]

const beansTails = new CoffeeShop('Beans and Tails', tailsMenu);

beansTails.addOrder('Toast');
beansTails.addOrder('Pegasos muffin');
console.log(beansTails.dueAmount());
console.log(beansTails.listOrders());
console.log(beansTails.fulfillOrder());
console.log(beansTails.listOrders());
console.log(beansTails.fulfillOrder());
console.log(beansTails.fulfillOrder());
console.log(beansTails.listOrders());
console.log(beansTails.cheapestItem());
console.log(beansTails.drinksOnly())
console.log(beansTails.foodOnly())

