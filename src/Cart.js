import { find, remove } from "lodash";

export default class Cart {
  items = [];

  add(item) {
    const searchItem = { product: item.product };
    if (find(this.items, searchItem)) {
      remove(this.items, searchItem);
    }
    this.items.push(item);
  }

  remove(product) {
    remove(this.items, { product });
  }

  getTotal() {
    return this.items.reduce((acc, item) => {
      return acc + item.quantity * item.product.price;
    }, 0);
  }

  checkout() {
    return {
      total: this.getTotal(),
      items: this.items,
    };
  }
}
