import routes from "../server/routes";

describe("Routes", () => {
  it("getAllBooks", () => {
    const expected = "/api/v1/books";
    const actual = routes.getAllBooks.build();
    expect(expected).toEqual(actual);
  });
});
