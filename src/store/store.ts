import { defineStore } from "pinia";
// Interfaces
import { product } from "../components/card/interface/card"
interface cart {
    total: number;
    products: product[];
}

export const cardStore = defineStore("shoppingCart", {
    state: () => ({
        total: 0,
        products: []
    } as cart),
    actions: {
        setProduct(item: product) {
            try {
                // New product
                this.products.push(item)
                //Update total
                let total = this.products.reduce((acc, item) => acc + item.price, 0);
                this.total = total;
            } catch (error) {
                console.log(error)
            }
        },

    },
    getters: {
        getTotal: (state) => state.total,
        getProducts: (state) => state.products,

    },
});

