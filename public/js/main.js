'use strict';

const app = new Vue({
    el: '#app',
    data: {
        errorUrl: false,
    },

    methods: {
        getJson(url) { // метод для чтения json
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error);
                    this.errorUrl = true;
                })
        },
        postJson(url, data) { // метод для вставки
            return fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(result => result.json())
                .catch(error => {
                    console.log(error)
                    this.$refs.error.text = error;
                })
        },
        putJson(url, data) { // метод для обновления 
            return fetch(url, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(result => result.json())
                .catch(error => {
                    console.log(error)
                    this.$refs.error.text = error;
                })
        },
        deleteJson(url, data) { // метод для удаления
            return fetch(url, {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(result => result.json())
                .catch(error => {
                    console.log(error)
                    this.$refs.error.text = error;
                })
        }
    }
})