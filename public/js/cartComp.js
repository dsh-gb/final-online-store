Vue.component('cart', {
    data() {
        return {
            cartUrl: '/api/cart',
            cart: [],
            show: false,
            keyAmount: 0 // ключ для обновления суммарной стоимости товара в корзине
        }
    },

    mounted() {
        this.$parent.getJson(`/api/cart`)
            .then(data => {
                for (let item of data.contents) {
                    item.imgPath = `img/cart/${item.id_product}.jpg`;
                    this.cart.push(item);
                };
                this.cart.amount = data.amount;
            })
    },

    methods: {
        addProduct(item) {
            let find = this.cart.find(el => el.id_product === item.id_product);
            if (find) {
                this.$parent.putJson(`/api/cart/${find.id_product}`, { quantity: 1 })
                    .then(data => {
                        if (data.result === 1) {
                            find.quantity++;
                            this.cart.amount += item.price;
                            this.keyAmount += 1;
                        }
                    })
            } else {
                const prod = Object.assign({ quantity: 1 }, item);
                this.$parent.postJson(`/api/cart`, prod)
                    .then(data => {
                        if (data.result === 1) {
                            this.cart.push(prod);
                            this.cart.amount += item.price;
                            this.keyAmount += 1;
                        }
                    })
            }
        },

        remove(item) {
            if (item.quantity > 1) {
                item.quantity--;
                this.cart.amount -= item.price;
                this.keyAmount -= 1;
                this.$parent.deleteJson(`/api/cart/${item.id_product}`, { quantity: 1 })
            } else {
                this.cart.splice(this.cart.indexOf(item), 1);
                this.$parent.deleteJson(`/api/cart/${item.id_product}`, { quantity: 1 })
                    .then(data => {
                        if (data.result === 1) {
                            item.quantity = 0;
                            this.cart.amount -= item.price;
                            this.keyAmount -= 1;
                        }
                    })
            };
        },

        // метод removeAll не получилось сделать, сйечас удаляет только по 1 элементу
        removeAll() {
            // let length = this.cart.length;
            // for (let i = 0; i < length; i++) {
            //     let quantity = this.cart[i].quantity;
            //     for (let j = 0; j < quantity; j++) {
            //         this.remove(this.cart[i]);
            //     };
            // }
        }
    },

    template: `
        <section class="cart container">
            <h2 class="visually-hidden">cart</h2>
            <div class="cart__product">
                <ul class="cart__product-list">
                <cart-item class="cart-item" v-for="item of cart" :cartItem="item" :img="item.imgPath" :key="item.id_product">       
                </cart-item>
                </ul>
                <div class="cart__product-button">
                    <a href="#" class="cart__product-link" v-if="cart.length" @click="removeAll()">Очистить корзину</a>
                    <a href="index.html" class="cart__product-link">Продолжить покупки</a>
                </div>
            </div>
            <div class="cart__adress container">
                    <form action="#" class="cart__adress-form">
                        <h2 class="cart__adress-heading">адрес доставки</h2>
                        <input class="cart__adress-input" type="text" placeholder="Страна">
                        <input class="cart__adress-input" type="text" placeholder="Область">
                        <input class="cart__adress-input" type="text" placeholder="Почтовый код">
                    </form>
                    <div class="cart__order">
                        <p class="cart__order-grand" v-if="cart.length" :key="keyAmount">сумма заказа <span class="cart__order-grand-price">$ {{ cart.amount
                                }}</span></p>
                        <p class="cart__order-grand" v-else>Корзина пуста</p>
                        <svg class="cart__order-line" width="275" height="1" viewBox="0 0 275 1"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M275 0H0V1H275V0Z" />
                        </svg>
                        <a href="#" class="cart__order-link">оформить заказ</a>
                    </div>
            </div>
        </section>
    `
});

Vue.component('cart-item', {
    props: ['cartItem', 'img'],

    template: `
            <li class="cart__item">
                <img class="cart__item-image" :src="img" alt="cart img">
                <div class="cart__item-wrapper">
                    <h3 class="cart__item-heading">Omron {{ cartItem.product_name }}</h3>
                    <p class="cart__item-description">Стоимость: <span class="text-color">$ {{ cartItem.price }}</span></p>
                    <p class="cart__item-description">Тип датчика: {{ cartItem.type }}</p>
                    <p class="cart__item-description">Количество: {{ cartItem.quantity }}</p>
                    <button class="cart__item__btn-del cart__product-link" type="button" @click="$parent.remove(cartItem)">Удалить</button>
                </div>
            </li>
    `
})