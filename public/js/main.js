const app = new Vue({
    el: '#app',
    components: {
        products_list,
        filter_products,
        cart
    },
    methods: {
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => console.error(error));
        },

        postJson(url, data){
            return fetch(url, {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                })
                .then(result => result.json())
                .catch(error => {
                    console.error(error);
                })
        },

        putJson(url, data){
            return fetch(url, {
                    method: 'PUT',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                })
                .then(result => result.json())
                .catch(error => {
                    console.log(error);
                })
        },

        deleteJson(url, data){
            return fetch(url, {
                    method: 'DELETE',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                })
                .then(result => result.json())
                .catch(error => {
                    console.log(error);
                })
        },

        getImgLink(productId) {
            return `img/product_${productId}.png`;
        },
    },
    mounted() {
        console.log("OK");
    }
});
