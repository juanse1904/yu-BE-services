const faker = require('faker');

class ProductsService {

    constructor(){
        this.products = [];
        this.generate();
    }

    generate(){
        const limit = 100;
    for(let i = 0; i< limit ; i++){
    this.products.push({
         id: faker.datatype.uuid(),
         name: faker.commerce.productName(),
         price: parseInt(faker.commerce.price(), 10),
         image: faker.image.imageUrl(),
    });
  }
    }
    create(data) {
        const newProduct = {
            id: faker.datatype.uuid(),
            ...data, 
        }
        this.products.push(newProduct);
        return newProduct;
    }
    find(){
        return this.products;
    }
    findOne(id){
        const productArray = this.products.filter((product) => product.id === id);
        if (productArray.length < 1){
            throw new Error('product not found');
        };
        return productArray[0];
    }
    update(id, changes){
        const index = this.products.findIndex((product) => product.id === id);
        if (index === -1){
            throw new Error('product not found');
        };
        this.products[index] = changes;
        return this.products[index];
    }
    delete(id){
        const index = this.products.findIndex((product) => product.id === id);
        if (index === -1){
            throw new Error('product not found');
        };
        this.products.splice(index,1);
        return {id};
    }
}

module.exports = ProductsService;