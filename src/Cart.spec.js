import Cart from "./Cart";

describe("Cart", () => {
  let cart;
  let product;
  let product2;

  beforeEach(() => {
    cart = new Cart();
    product = {
      title: "Adidas running shoes",
      price: 35388,
    };
    product2 = {
      title: "Nike social shoes",
      price: 41872,
    };
  });

  describe("getTotal()", () => {
    it("should return 0 when getTotal() is executed in a newly created", () => {
      expect(cart.getTotal()).toEqual(0);
    });

    it("should multiply quantitiy by price and receive the total amount", () => {
      const item = {
        product,
        quantity: 2,
      };
      cart.add(item);
      expect(cart.getTotal()).toEqual(70776);
    });

    it("should ensure no more than one product exists at a time", () => {
      cart.add({
        product,
        quantity: 2,
      });

      cart.add({
        product,
        quantity: 1,
      });

      expect(cart.getTotal()).toEqual(35388);
    });

    it("should update total when a product gets included and then removed", () => {
      cart.add({
        product,
        quantity: 2,
      });

      cart.add({
        product: product2,
        quantity: 1,
      });

      cart.remove(product);

      expect(cart.getTotal()).toEqual(41872);
    });
  });

  describe("checkout()", () => {
    it("should return an object with the total and the list of items", () => {
      cart.add({
        product,
        quantity: 2,
      });
      cart.add({
        product: product2,
        quantity: 3,
      });

      // quando resultado é muito grande utilizar snapshots
      expect(cart.checkout()).toMatchInlineSnapshot(`
        Object {
          "items": Array [
            Object {
              "product": Object {
                "price": 35388,
                "title": "Adidas running shoes",
              },
              "quantity": 2,
            },
            Object {
              "product": Object {
                "price": 41872,
                "title": "Nike social shoes",
              },
              "quantity": 3,
            },
          ],
          "total": 196392,
        }
        `);
    });
  });
});
