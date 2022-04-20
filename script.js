const pizzaList = [
    {
        name: "Веганская",
        img: "assets/pizza/1.jpeg",
        ingredients:
            "Острая чоризо, острый перец халапеньо, соус барбекю, митболы, томаты, сладкий перец, красный лук, моцарелла, томатный соус",
        price: 450,
        type: "vegan",
    },
    {
        name: "Фиксики",
        img: "assets/pizza/2.jpeg",
        ingredients:
            "Острая чоризо, острый перец халапеньо, соус барбекю, митболы, томаты, сладкий перец, красный лук, моцарелла, томатный соус",
        price: 500,
        type: "meat",

    },
    {
        name: "Пепперони",
        img: "assets/pizza/3.jpeg",
        ingredients:
            "Острая чоризо, острый перец халапеньо, соус барбекю, митболы, томаты, сладкий перец, красный лук, моцарелла, томатный соус",
        price: 400,
        type: "meat",
    },
    {
        name: "Сырная",
        img: "assets/pizza/4.jpeg",
        ingredients:
            "Острая чоризо, острый перец халапеньо, соус барбекю, митболы, томаты, сладкий перец, красный лук, моцарелла, томатный соус",
        price: 470,
        type: "meat",
    },
    {
        name: "Фруктовая",
        img: "assets/pizza/5.jpeg",
        ingredients:
            "Острая чоризо, острый перец халапеньо, соус барбекю, митболы, томаты, сладкий перец, красный лук, моцарелла, томатный соус",
        price: 600,
        type: "vegan",
    },
    {
        name: "Салями",
        img: "assets/pizza/6.jpeg",
        ingredients:
            "Острая чоризо, острый перец халапеньо, соус барбекю, митболы, томаты, сладкий перец, красный лук, моцарелла, томатный соус",
        price: 550,
        type: "meat",
    },
    {
        name: "Вкуснейшая",
        img: "assets/pizza/7.jpeg",
        ingredients:
            "Острая чоризо, острый перец халапеньо, соус барбекю, митболы, томаты, сладкий перец, красный лук, моцарелла, томатный соус",
        price: 950,
        type: "meat",
    },
    {
        name: "Особенная",
        img: "assets/pizza/8.jpeg",
        ingredients:
            "Острая чоризо, острый перец халапеньо, соус барбекю, митболы, томаты, сладкий перец, красный лук, моцарелла, томатный соус",
        price: 750,
        type: "meat",
    }
];


let cart = {
    'Веганская': {
        "name": "Веганская",
        "count": 0,
    }
};
//Кнопка плюса
button-primary-plus.onclick = event => {
    if (event.target.classList.contains('plus')) {
        plusFunction(event.target.dataset.id);
    }
};
//Функция плюса
const plusFunction = id => {
    cart[id]['count']++;
    renderCart();
};
//Кнопка минуса
button-primary-minus.onclick = event => {
    if (event.target.classList.contains('minus')) {
        minusFunction(event.target.dataset.id);
    }
};
//Минусовая функция
const minusFunction = id => {
    if (cart[id]['count'] - 1 == 0) {
        deleteFunction(id);
        return true;
    }
    cart[id]['count']--;
    renderCart();
}
//удаление товара
const deleteFunction = id => {
    delete cart[id];
    renderCart();
}

const renderCart = () => {
    console.log(cart)
}

renderCart();

const showPizzaOnScreen = () => {
    const pizzaListElement = document.querySelector(".pizzaList");
    pizzaList.forEach(p => {
        pizzaListElement.innerHTML += `<div class="pizza">
     <img src="${p.img}" />
     <p>${p.name}</p>
     <p>${p.price} рублей</p>
     <p>${p.ingredients}</p>
     <button>Заказать</button>
</div>`}
    )
}
showPizzaOnScreen();


let cart = {
    "Веганская": {
        "name": "Веганская",
        "count": 0,
    }

};
document.onclick = event => {
    if (event.target.classList.contains('plus')) {
        plusFunction(event.target.dataset.id);
    }
    if (event.target.classList.contains('minus')) {
        minusFunction(event.target.dataset.id);
    }
}