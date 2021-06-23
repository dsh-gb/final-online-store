/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./public/js/cartComp.js":
/*!*******************************!*\
  !*** ./public/js/cartComp.js ***!
  \*******************************/
/***/ (() => {

eval("Vue.component('cart', {\n  data() {\n    return {\n      cartUrl: '/api/cart',\n      cart: [],\n      show: false,\n      keyAmount: 0 // ключ для обновления суммарной стоимости товара в корзине\n\n    };\n  },\n\n  mounted() {\n    this.$parent.getJson(`/api/cart`).then(data => {\n      for (let item of data.contents) {\n        item.imgPath = `img/cart/${item.id_product}.jpg`;\n        this.cart.push(item);\n      }\n\n      ;\n      this.cart.amount = data.amount;\n    });\n  },\n\n  methods: {\n    addProduct(item) {\n      let find = this.cart.find(el => el.id_product === item.id_product);\n\n      if (find) {\n        this.$parent.putJson(`/api/cart/${find.id_product}`, {\n          quantity: 1\n        }).then(data => {\n          if (data.result === 1) {\n            find.quantity++;\n            this.cart.amount += item.price;\n            this.keyAmount += 1;\n          }\n        });\n      } else {\n        const prod = Object.assign({\n          quantity: 1\n        }, item);\n        this.$parent.postJson(`/api/cart`, prod).then(data => {\n          if (data.result === 1) {\n            this.cart.push(prod);\n            this.cart.amount += item.price;\n            this.keyAmount += 1;\n          }\n        });\n      }\n    },\n\n    remove(item) {\n      if (item.quantity > 1) {\n        item.quantity--;\n        this.cart.amount -= item.price;\n        this.keyAmount -= 1;\n        this.$parent.deleteJson(`/api/cart/${item.id_product}`, {\n          quantity: 1\n        });\n      } else {\n        this.cart.splice(this.cart.indexOf(item), 1);\n        this.$parent.deleteJson(`/api/cart/${item.id_product}`, {\n          quantity: 1\n        }).then(data => {\n          if (data.result === 1) {\n            item.quantity = 0;\n            this.cart.amount -= item.price;\n            this.keyAmount -= 1;\n          }\n        });\n      }\n\n      ;\n    },\n\n    // метод removeAll не получилось сделать, сйечас удаляет только по 1 элементу\n    removeAll() {// let length = this.cart.length;\n      // for (let i = 0; i < length; i++) {\n      //     let quantity = this.cart[i].quantity;\n      //     for (let j = 0; j < quantity; j++) {\n      //         this.remove(this.cart[i]);\n      //     };\n      // }\n    }\n\n  },\n  template: `\n        <section class=\"cart container\">\n            <h2 class=\"visually-hidden\">cart</h2>\n            <div class=\"cart__product\">\n                <ul class=\"cart__product-list\">\n                <cart-item class=\"cart-item\" v-for=\"item of cart\" :cartItem=\"item\" :img=\"item.imgPath\" :key=\"item.id_product\">       \n                </cart-item>\n                </ul>\n                <div class=\"cart__product-button\">\n                    <a href=\"#\" class=\"cart__product-link\" v-if=\"cart.length\" @click=\"removeAll()\">Очистить корзину</a>\n                    <a href=\"index.html\" class=\"cart__product-link\">Продолжить покупки</a>\n                </div>\n            </div>\n            <div class=\"cart__adress container\">\n                    <form action=\"#\" class=\"cart__adress-form\">\n                        <h2 class=\"cart__adress-heading\">адрес доставки</h2>\n                        <input class=\"cart__adress-input\" type=\"text\" placeholder=\"Страна\">\n                        <input class=\"cart__adress-input\" type=\"text\" placeholder=\"Область\">\n                        <input class=\"cart__adress-input\" type=\"text\" placeholder=\"Почтовый код\">\n                    </form>\n                    <div class=\"cart__order\">\n                        <p class=\"cart__order-grand\" v-if=\"cart.length\" :key=\"keyAmount\">сумма заказа <span class=\"cart__order-grand-price\">$ {{ cart.amount\n                                }}</span></p>\n                        <p class=\"cart__order-grand\" v-else>Корзина пуста</p>\n                        <svg class=\"cart__order-line\" width=\"275\" height=\"1\" viewBox=\"0 0 275 1\"\n                            xmlns=\"http://www.w3.org/2000/svg\">\n                            <path d=\"M275 0H0V1H275V0Z\" />\n                        </svg>\n                        <a href=\"#\" class=\"cart__order-link\">оформить заказ</a>\n                    </div>\n            </div>\n        </section>\n    `\n});\nVue.component('cart-item', {\n  props: ['cartItem', 'img'],\n  template: `\n            <li class=\"cart__item\">\n                <img class=\"cart__item-image\" :src=\"img\" alt=\"cart img\">\n                <div class=\"cart__item-wrapper\">\n                    <h3 class=\"cart__item-heading\">Omron {{ cartItem.product_name }}</h3>\n                    <p class=\"cart__item-description\">Стоимость: <span class=\"text-color\">$ {{ cartItem.price }}</span></p>\n                    <p class=\"cart__item-description\">Тип датчика: {{ cartItem.type }}</p>\n                    <p class=\"cart__item-description\">Количество: {{ cartItem.quantity }}</p>\n                    <button class=\"cart__item__btn-del cart__product-link\" type=\"button\" @click=\"$parent.remove(cartItem)\">Удалить</button>\n                </div>\n            </li>\n    `\n});\n\n//# sourceURL=webpack://online-store/./public/js/cartComp.js?");

/***/ }),

/***/ "./public/js/errorComp.js":
/*!********************************!*\
  !*** ./public/js/errorComp.js ***!
  \********************************/
/***/ (() => {

eval("Vue.component('error', {\n  props: ['visible'],\n  template: `\n        <div class=\"error\" v-show=\"visible\">\n            <h2>Connection error</h2>\n        </div>\n    `\n});\n\n//# sourceURL=webpack://online-store/./public/js/errorComp.js?");

/***/ }),

/***/ "./public/js/main.js":
/*!***************************!*\
  !*** ./public/js/main.js ***!
  \***************************/
/***/ (() => {

"use strict";
eval("\n\nconst app = new Vue({\n  el: '#app',\n  data: {\n    errorUrl: false\n  },\n  methods: {\n    getJson(url) {\n      // метод для чтения json\n      return fetch(url).then(result => result.json()).catch(error => {\n        console.log(error);\n        this.errorUrl = true;\n      });\n    },\n\n    postJson(url, data) {\n      // метод для вставки\n      return fetch(url, {\n        method: 'POST',\n        headers: {\n          \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify(data)\n      }).then(result => result.json()).catch(error => {\n        console.log(error);\n        this.$refs.error.text = error;\n      });\n    },\n\n    putJson(url, data) {\n      // метод для обновления \n      return fetch(url, {\n        method: 'PUT',\n        headers: {\n          \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify(data)\n      }).then(result => result.json()).catch(error => {\n        console.log(error);\n        this.$refs.error.text = error;\n      });\n    },\n\n    deleteJson(url, data) {\n      // метод для удаления\n      return fetch(url, {\n        method: 'DELETE',\n        headers: {\n          \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify(data)\n      }).then(result => result.json()).catch(error => {\n        console.log(error);\n        this.$refs.error.text = error;\n      });\n    }\n\n  }\n});\n\n//# sourceURL=webpack://online-store/./public/js/main.js?");

/***/ }),

/***/ "./public/js/productComp.js":
/*!**********************************!*\
  !*** ./public/js/productComp.js ***!
  \**********************************/
/***/ (() => {

eval("Vue.component('products', {\n  data() {\n    return {\n      catalogUrl: '/api/products',\n      products: [],\n      filterList: []\n    };\n  },\n\n  mounted() {\n    this.$parent.getJson(`/api/products`).then(data => {\n      for (let el of data) {\n        el.imgPath = `img/product/${el.id_product}.jpg`;\n        this.products.push(el);\n        this.filterList.push(el);\n      }\n    });\n  },\n\n  template: `\n                <section class=\"products container\">\n                    <h2 class=\"products__heading\">Надежность и точность</h2>\n                    <p class=\"products__text\">Для оборудования, которое будет служить вечно</p>\n                    <ul class=\"products__list\">  \n                        <product class=\"product-item\" v-for=\"item of filterList\" :product=\"item\" :img=\"item.imgPath\" :key=\"item.id_product\">\n                        </product>\n                    </ul>\n                </section>\n            `\n});\nVue.component('product', {\n  props: ['product', 'img'],\n  template: `\n                <li class=\"products__item\">\n                    <div class=\"products__item-wrapper\">\n                        <img class=\"products__item-image\" :src=\"img\" alt=\"img product\" width=\"360\"\n                            height=\"420\">\n                        <div class=\"products__item-overlay\"></div>\n                        <button class=\"products__item-button\" type=\"button\"  @click=\"$root.$refs.cart.addProduct(product)\">\n                        <svg class=\"products__item-icon\" width=\"26\" height=\"24\" viewBox=\"0 0 32 29\"\n                            xmlns=\"http://www.w3.org/2000/svg\">\n                            <path\n                                    d=\"M26.2009 29C25.5532 28.9738 24.9415 28.6948 24.4972 28.2227C24.0529 27.7506 23.8114 27.1232 23.8245 26.475C23.8376 25.8269 24.1043 25.2097 24.5673 24.7559C25.0303 24.3022 25.6527 24.048 26.301 24.048C26.9493 24.048 27.5717 24.3022 28.0347 24.7559C28.4977 25.2097 28.7644 25.8269 28.7775 26.475C28.7906 27.1232 28.549 27.7506 28.1047 28.2227C27.6604 28.6948 27.0488 28.9738 26.401 29H26.2009ZM6.75293 26.32C6.75293 25.79 6.91011 25.2718 7.20459 24.8311C7.49907 24.3904 7.91764 24.0469 8.40735 23.844C8.89705 23.6412 9.43594 23.5881 9.95581 23.6915C10.4757 23.7949 10.9532 24.0502 11.328 24.425C11.7028 24.7998 11.9581 25.2773 12.0615 25.7972C12.1649 26.317 12.1118 26.8559 11.9089 27.3456C11.7061 27.8353 11.3626 28.2539 10.9219 28.5483C10.4812 28.8428 9.96304 29 9.43298 29C9.08087 29.0003 8.73212 28.9311 8.40674 28.7966C8.08136 28.662 7.78569 28.4646 7.53662 28.2158C7.28755 27.9669 7.09001 27.6713 6.9552 27.3461C6.82039 27.0208 6.75098 26.6721 6.75098 26.32H6.75293ZM10.553 20.686C10.2935 20.6868 10.0409 20.6024 9.83411 20.4457C9.62727 20.2891 9.47758 20.0689 9.40796 19.819L4.57495 2.36401H1.18201C0.868521 2.36401 0.567859 2.23947 0.346191 2.01781C0.124523 1.79614 0 1.49549 0 1.18201C0 0.868519 0.124523 0.567873 0.346191 0.346205C0.567859 0.124537 0.868521 5.81268e-06 1.18201 5.81268e-06H5.46301C5.7225 -0.00080736 5.97504 0.0837201 6.18176 0.240568C6.38848 0.397416 6.53784 0.617884 6.60693 0.868006L11.4399 18.323H24.6179L29.001 8.27501H14.401C14.2428 8.27961 14.0854 8.25242 13.9379 8.19507C13.7904 8.13771 13.6559 8.05134 13.5424 7.94108C13.4288 7.83082 13.3386 7.69891 13.277 7.55315C13.2154 7.40739 13.1836 7.25075 13.1836 7.0925C13.1836 6.93426 13.2154 6.77762 13.277 6.63186C13.3386 6.4861 13.4288 6.35419 13.5424 6.24393C13.6559 6.13367 13.7904 6.0473 13.9379 5.98994C14.0854 5.93259 14.2428 5.90541 14.401 5.91001H30.814C31.0097 5.90996 31.2022 5.95866 31.3744 6.05172C31.5465 6.14478 31.6928 6.27926 31.7999 6.44301C31.9078 6.60729 31.9734 6.79569 31.9908 6.99145C32.0083 7.18721 31.9771 7.38424 31.9 7.565L26.495 19.977C26.4026 20.1876 26.251 20.3668 26.0585 20.4927C25.866 20.6186 25.641 20.6858 25.411 20.686H10.553Z\" />\n                        </svg>\n                            В корзину\n                        </button>\n                    </div>\n                    <h3 class=\"products__item-heading\">{{ product.type }} датчик Omron {{ product.product_name }}</h3>\n                    <p class=\"products__item-text\">{{ product.description }}</p>\n                    <p class=\"products__item-price text-color\">$ {{ product.price }}</p>\n                </li>\n    `\n});\n\n//# sourceURL=webpack://online-store/./public/js/productComp.js?");

/***/ }),

/***/ "./public/js/searchComp.js":
/*!*********************************!*\
  !*** ./public/js/searchComp.js ***!
  \*********************************/
/***/ (() => {

eval("Vue.component('search', {\n  data() {\n    return {\n      userSearch: ''\n    };\n  },\n\n  methods: {\n    searchFilter() {\n      let regexp = new RegExp(this.userSearch, 'i');\n      this.$root.$refs.products.filterList = this.$root.$refs.products.products.filter(el => regexp.test(el.product_name));\n    }\n\n  },\n  template: `\n        <form action=\"#\" @submit.prevent=\"searchFilter()\">\n            <input type=\"text\" class=\"header__form-search\" v-model=\"userSearch\" placeholder=\"поиск...\">\n        </form>\n    `\n});\n\n//# sourceURL=webpack://online-store/./public/js/searchComp.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./public/js/main.js"]();
/******/ 	__webpack_modules__["./public/js/cartComp.js"]();
/******/ 	__webpack_modules__["./public/js/errorComp.js"]();
/******/ 	__webpack_modules__["./public/js/searchComp.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./public/js/productComp.js"]();
/******/ 	
/******/ })()
;