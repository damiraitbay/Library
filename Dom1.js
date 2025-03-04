// let button = document.getElementById("btn")
// let body = document.querySelector("body")
// button.addEventListener("click", function() {
//     alert("Button pressed")
//     body.style.backgroundColor = "black"
// })

// let dropdown = document.getElementById("dropdown")




// dropdown.addEventListener("change", function() {
//     if (dropdown.value == "blue") {
//         body.style.backgroundColor = "blue";
//     } else if (dropdown.value == "yellow") {
//         body.style.backgroundColor = "yellow"
//     } else if (dropdown.value == "red") {
//         body.style.backgroundColor = "red"
//     } else if (dropdown.value == "black") {
//         body.style.backgroundColor = "black"
//     }

// })

// let name = document.getElementById("name")
// let p = document.getElementById("p")


// name.addEventListener("input", function() {
//     p.textContent = name.value
// })

// let div = document.createElement("div")
// div.textContent = "Hello"
// body.appendChild(div)
// let div2 = document.createElement("div")
// div2.textContent = "World"
// body.replaceChild(div2, button)
// body.removeChild(dropdown)
// body.removeChild(button)



// let form = document.querySelector("form")
// body.removeChild(form)


// body.removeChild(div)

// body.removeChild(div)
// let body = document.querySelector("body")
// let container = document.createElement("div")
// let title = document.createElement("p")
// title.textContent = "Бургер"
// let price = document.createElement("p")
// price.textContent = "1000 tg"
// let btn = document.createElement("button")
// btn.textContent = "Жою"

// body.appendChild(container)

// container.appendChild(title)
// container.appendChild(price)
// container.appendChild(btn)
// btn.addEventListener("click", function() {
//     body.removeChild(container)
// })

// let body = document.querySelector("body")
// let container = document.createElement("div")
// body.appendChild(container)
// let p = document.createElement("p")
// container.appendChild(p)
// let p2 = document.createElement("p")
// container.appendChild(p2)
// let button = document.createElement("button")
// container.appendChild(button)
// button.textContent = "button"

// const data = [
//     { title: "Abay zholy", description: "Abay zholy" },
//     { title: "Martin Iden", description: "Martin Iden" },
//     { title: "Baqytsyz Zhamal", description: "Baqytsyz Zhamal" }
// ]

// p.textContent = data[0].title;
// p2.textContent = data[0].description;



// button.addEventListener("click", function() {
//     body.removeChild(container)
// })


// let burger = document.getElementById("burger")
// let burger_text = document.getElementById("burger_text")
// let souse = document.getElementById("souse")
// let souse_text = document.getElementById("souse_text")
// let cola = document.getElementById("cola")
// let cola_text = document.getElementById("cola_text")
// let orders = document.getElementById("orders")
// let order = ""
// let remove_button = ""
// burger.addEventListener("click", function() {
//     order = document.createElement("p")
//     remove_button = document.createElement("button")
//     remove_button.textContent = "-"
//     orders.appendChild(order)
//     order.appendChild(remove_button)
//     order.textContent = burger_text.textContent
//     remove_button.addEventListener("click", function() {
//         orders.removeChild(order)
//     })
// })

// souse.addEventListener("click", function() {
//     order = document.createElement("p")
//     remove_button = document.createElement("button")
//     remove_button.textContent = "-"
//     orders.appendChild(order)
//     order.appendChild(remove_button)
//     order.textContent = souse_text.textContent
//     remove_button.addEventListener("click", function() {
//         orders.removeChild(order)
//     })
// })

// cola.addEventListener("click", function() {
//     order = document.createElement("p")
//     remove_button = document.createElement("button")
//     remove_button.textContent = "-"
//     orders.appendChild(order)
//     order.appendChild(remove_button)
//     order.textContent = cola_text.textContent
//     remove_button.addEventListener("click", function() {
//         orders.removeChild(order)
//     })
// })

// let h1 = document.getElementById("h1")
// if (h1) { h1.textContent = "Hello" }


// let btn = document.getElementById("btn")


// btn.addEventListener("mouseleave", function() {
//     alert("Батырма басылды")
// })


// let name = document.getElementById("name")


// let result = document.getElementById("result")


// name.addEventListener("input", function() {
//     result.textContent = name.value
// })
// name.addEventListener("focus", function() {
//     result.textContent = "Өрісті толтырыңыз"
// })
// name.addEventListener("blur", function() {
//     result.textContent = ""
// })


// let div = document.createElement("div")


// let img = document.createElement("img")
// img.src = "https://bighearttoys.com/cdn/shop/articles/Overexcited_Child.jpg?v=1666878393&width=1100"
// div.textContent = "Hello"

// body.appendChild(div)

// let style = document.querySelector("style")

// body.removeChild(style)


// body.replaceChild(img, div)

// // const data = [
// //     { title: "Абай жолы", description: "Мұхтар Әуезоы романы" },
// //     { title: "Қан мен тер", description: "Әбдіжәміл Нұрпейісов" },
// //     { title: "Көшпенділер", description: "Ільяс Есенберлин" },
// //     { title: "Көшпенділер", description: "Ільяс Есенберлин" },
// //     { title: "Көшпенділер", description: "Ільяс Есенберлин" },
// //     { title: "Абай жолы", description: "Мұхтар Әуезоы романы" },
// //     { title: "Қан мен тер", description: "Әбдіжәміл Нұрпейісов" },
// //     { title: "Көшпенділер", description: "Ільяс Есенберлин" },
// //     { title: "Көшпенділер", description: "Ільяс Есенберлин" },
// //     { title: "Көшпенділер", description: "Ільяс Есенберлин" },
// //     { title: "Абай жолы", description: "Мұхтар Әуезоы романы" },
// // ]

// // data.forEach(function(n) {
// //     let body = document.querySelector("body")
// //     let cart = document.createElement("div")
// //     body.appendChild(cart)
// //     let h1 = document.createElement("h1")
// //     h1.textContent = n.title
// //     cart.appendChild(h1)
// //     let p = document.createElement("p")
// //     p.textContent = n.description
// //     cart.appendChild(p)
// //     let button = document.createElement("button")
// //     button.textContent = "-"
// //     cart.appendChild(button)
// //     button.addEventListener("click", function() {
// //         body.removeChild(cart)
// //     })
// // })


// const menu = [
//     { title: "Burger", price: 1000 },
//     { title: "Cola", price: 600 },
//     { title: "pepsi", price: 600 },
//     { title: "souse", price: 400 },
//     { title: "manty", price: 1200 },
//     { title: "stake", price: 7800 },
//     { title: "quyrdaq", price: 5200 },
//     { title: "lagman", price: 1500 },
//     { title: "beshbarmaq", price: 1200 },
//     { title: "plov", price: 2500 },
//     { title: "chai", price: 1500 },
// ]
// let menu1 = document.getElementById("menu")
// let order = document.getElementById("Our_order")
// menu.forEach(function(item) {
//     let cart = document.createElement("div")
//     cart.style.backgroundColor = "red"
//     menu1.appendChild(cart)
//     let p = document.createElement("p")
//     p.textContent = item.title
//     cart.appendChild(p)
//     let b = document.createElement("b")
//     b.textContent = "-" + item.price
//     p.appendChild(b)
//     let button = document.createElement("button")
//     button.textContent = "+"
//     cart.appendChild(button)
//     let our_order = [];
//     our_order.push(item)
//     button.addEventListener("click", function() {


//         our_order.forEach(function(n) {
//             let cart = document.createElement("div")
//             cart.style.backgroundColor = "green"
//             order.appendChild(cart)
//             let p = document.createElement("p")
//             p.textContent = n.title
//             cart.appendChild(p)
//             let b = document.createElement("b")
//             b.textContent = "-" + n.price
//             p.appendChild(b)
//             let button = document.createElement("button")
//             button.textContent = "-"
//             cart.appendChild(button)
//             button.addEventListener("click", function() {
//                 order.removeChild(cart)
//             })
//         })
//     })
// })

// let box = document.createElement("div")
// let body = document.querySelector("body")

// let style = document.querySelector("style")

// box.textContent = "Hello"
// body.appendChild(box)
// body.removeChild(style)
// let container = document.getElementById("container")
// let second = document.getElementById("second")
// let btn = document.getElementById("removeSecondElement")
// btn.addEventListener("click", function() {
//     container.removeChild(second)
// })


// let h1 = document.createElement("h1")
// h1.textContent = "Бұл тақырып"
// let first = document.getElementById("first")


// container.replaceChild(h1, first)


// const data = [
//     { title: "Абай жолы", description: "Мұхтар әуезов" },
//     { title: "Қан мен тер", description: "Әбдіжамал Нұрпейісов" },
//     { title: "Көшпенділер", description: "Ільяс Есенберлин" },
//     { title: "За нами Москва", description: "Александр Бек" },
//     { title: "Абай жолы", description: "Мұхтар әуезов" },
//     { title: "Қан мен тер", description: "Әбдіжамал Нұрпейісов" },
//     { title: "Көшпенділер", description: "Ільяс Есенберлин" },
//     { title: "За нами Москва", description: "Александр Бек" },

//     { title: "Абай жолы", description: "Мұхтар әуезов" },
//     { title: "Қан мен тер", description: "Әбдіжамал Нұрпейісов" },
//     { title: "Көшпенділер", description: "Ільяс Есенберлин" },
//     { title: "За нами Москва", description: "Александр Бек" },

//     { title: "Абай жолы", description: "Мұхтар әуезов" },
//     { title: "Қан мен тер", description: "Әбдіжамал Нұрпейісов" },
//     { title: "Көшпенділер", description: "Ільяс Есенберлин" },
//     { title: "За нами Москва", description: "Александр Бек" },

//     { title: "Абай жолы", description: "Мұхтар әуезов" },
//     { title: "Қан мен тер", description: "Әбдіжамал Нұрпейісов" },
//     { title: "Көшпенділер", description: "Ільяс Есенберлин" },
//     { title: "За нами Москва", description: "Александр Бек" },

//     { title: "Абай жолы", description: "Мұхтар әуезов" },
//     { title: "Қан мен тер", description: "Әбдіжамал Нұрпейісов" },
//     { title: "Көшпенділер", description: "Ільяс Есенберлин" },
//     { title: "За нами Москва", description: "Александр Бек" },

//     { title: "Абай жолы", description: "Мұхтар әуезов" },
//     { title: "Қан мен тер", description: "Әбдіжамал Нұрпейісов" },
//     { title: "Көшпенділер", description: "Ільяс Есенберлин" },
//     { title: "За нами Москва", description: "Александр Бек" },


// ]
// let body = document.querySelector("body")

// let search = document.getElementById("search")
// let search_button = document.getElementById("search_button")

// data.forEach(function(items) {

//     let container = document.createElement("div")
//     body.appendChild(container)
//     let cart = document.createElement("div")
//     container.appendChild(cart)
//     let h1 = document.createElement("h1")
//     h1.textContent = items.title
//     cart.appendChild(h1)
//     let p = document.createElement("p")
//     p.textContent = items.description
//     cart.appendChild(p)
//     let button = document.createElement("button")
//     button.textContent = "Жою"
//     cart.appendChild(button)

//     button.addEventListener("click", function() {
//         body.removeChild(container);
//     })
//     search_button.addEventListener("click", function(event) {
//         event.preventDefault();
//         if (search.value == h1.textContent || search.value == p.textContent) {
//             container.style.display = 'flex'
//         } else {
//             container.style.display = 'none'
//         }
//     });
// });


// let add = document.getElementById("add")
// let tit = document.getElementById("tit")
// let des = document.getElementById("des")
// add.addEventListener("click", function() {
//     event.preventDefault();
//     let container = document.createElement("div")
//     body.appendChild(container)
//     let h1 = document.createElement("h1")
//     h1.textContent = tit.value
//     container.appendChild(h1)
//     let p = document.createElement("p")
//     p.textContent = des.value;
//     container.appendChild(p)
//     let button = document.createElement("button")
//     button.textContent = "Жою"
//     container.appendChild(button)
//     button.addEventListener("click", function() {
//         body.removeChild(container);
//     })
// })



// let body = document.querySelector("body");
// let cart = document.createElement("div");
// cart.textContent = "Hello"
// let p = document.querySelector("p")
//     // body.removeChild(p)


// let title = document.createElement("h1")
// title.textContent = "Hello"
// body.replaceChild(title, p)



const data = [
    { title: "Абай жолы", description: "Мұхтар Әуезов романы" },
    { title: "Қан мен тер", description: "Әбдіжәміл Нұрпейісов" },
    { title: "Көшпенділер", description: "Ільяс Есенберлин" },
    { title: "Көшпенділер", description: "Ільяс Есенберлин" },
    { title: "Көшпенділер", description: "Ільяс Есенберлин" },
]
let body = document.querySelector("body")
let search_value = document.getElementById("search_value")
let search = document.getElementById("search")
data.forEach(function(item) {
    let cart = document.createElement("div")
    body.appendChild(cart)
    let title = document.createElement("h1")
    title.textContent = item.title
    cart.appendChild(title)
    let description = document.createElement("p")
    description.textContent = item.description
    cart.appendChild(description)
    let remove_button = document.createElement("button")
    remove_button.textContent = " Жою"
    cart.appendChild(remove_button)
    search.addEventListener("click", function() {
        if (title.textContent.includes(search_value.value) || description.textContent.includes(search_value.value)) {
            cart.style.display = "block";
        } else {
            cart.style.display = "none";
        }
    })
    remove_button.addEventListener("input", function() {
        body.removeChild(cart)
    })
})
