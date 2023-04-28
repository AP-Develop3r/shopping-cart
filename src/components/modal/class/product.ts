class Product {
    name: string;
    price: number;
    url: string;
    description: string;
  
    constructor(name: string, price: number, url: string, description: string) {
      this.name = name;
      this.price = price;
      this.url = url;
      this.description = description;
    }
  
    addProduct(productList: Product[], nweProduct: Product): void {
        productList.push(nweProduct);
    }
  
    // removeProduct(): void {
    //   // Lógica para eliminar un producto
    // }
  }