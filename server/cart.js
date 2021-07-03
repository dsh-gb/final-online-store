let add = (cart, req) => {
    cart.contents.push(req.body);
    cart.amount += req.body.price; // обновляем полную стоимость корзины
    ++cart.countGoods; // обновляем общее количество товаров в корзине
    return JSON.stringify(cart, null, 4);
};
let change = (cart, req) => {
    let find = cart.contents.find(el => el.id_product === +req.params.id);
    find.quantity += req.body.quantity;
    cart.amount += find.price;
    ++cart.countGoods;
    return JSON.stringify(cart, null, 4);
};
let del = (cart, req) => {
    let find = cart.contents.find(el => el.id_product === +req.params.id);
    if (find.quantity > 1) {
        find.quantity -= req.body.quantity;
        cart.amount -= find.price;
        --cart.countGoods;
    } else {
        cart.contents.splice(cart.contents.indexOf(find), 1);
        cart.amount -= find.price;
        --cart.countGoods;
    };
    return JSON.stringify(cart, null, 4);
};

module.exports = {
    add,
    change,
    del
};