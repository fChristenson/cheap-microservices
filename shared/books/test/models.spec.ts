import { Book } from "../models/Book";
import { Price } from "../models/Price";
import { Currency } from "../models/Currency";

describe("Models", () => {
  it("Book test", () => {
    const book = Book("id", "foo", Price(1, Currency.EUR));
    const expected = {
      id: "id",
      name: "foo",
      price: {
        amount: 1,
        currency: "EUR"
      }
    };
    expect(expected).toEqual(book);
  });
});
