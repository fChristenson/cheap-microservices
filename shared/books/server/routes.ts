const path = "/api/v1/books";
const template = `${path}/:id`;

export default { 
  getAllBooks: {
    template: path,
    build: () => path
  },
  createBook: {
    template: path,
    build: () => path
  },
  getBook: {
    template,
    build: (id: string) => `${path}/${id}`
  },
  deleteBook: {
    template,
    build: (id: string) => `${path}/${id}`
  },
  updateBook: {
    template,
    build: (id: string) => `${path}/${id}`
  }
}
