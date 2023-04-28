import { defineStore } from "pinia";
// Interfaces
import { product } from "../components/card/interface/card"
interface cart {
    total: Number;
    products: product[];
    tax: Number;
    
}

export const cardStore = defineStore("shoppingCart", {
    state: () => ({
        total: 0,
        products: [],
        tax: 0
    } as cart),
    actions: {
        setProduct(item: product): void {
            try {
                // New product
                this.products.push(item)
                //Update total
                this.totalCard()
            } catch (error) {
                console.log(error)
            }
        },
        deleteProduct(key: Number): void {
            try {
                // Delete product 
                this.products.splice(key, 1).concat(this.products.slice(this.products.length));
                 //Update total
                this.totalCard()
            } catch (error) {
                console.log(error)
            }
        },
        totalCard(): void {
            this.total  = this.products.reduce((acc, item) => acc + item.price, 0);
            this.tax = parseFloat((this.total * 0.12).toFixed(1))
        },


    },
    getters: {
        getTotal: (state) => state.total,
        getProducts: (state) => state.products,

    },
});

