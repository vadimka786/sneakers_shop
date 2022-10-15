const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
    {
        id: 1,
        title: "Air Force",
        Descriotion: "We see these sneakers every day: on the way from home, in the subway, at work or at school — Nike Air Force 1 is ubiquitous. AF1 are the most popular basketball model, they are worn by completely different people, collaborations are created on the basis of them. First introduced in 1982, Air Force 1 is a legend worthy of a separate chapter in the history of Nike.",
        price: 119,
        colors: [
        {
            code: "black",
            img: "./img/air.png",
        },
        {
            code: "darkblue",
            img: "./img/air2.png",
        },
        ],
    },
    {
        id: 2,
        title: "Air Jordan",
        Descriotion: "In 1984, Nike began exploring the basketball sneaker market. To provide Nike shoes with a place on the playground, the company signs a 5-year contract with the Chicago Bulls rookie, offensive defenseman Michael Jordan. For that time, it was something incredible to conclude such a long-lasting contract with only one athlete. Nike managers believed in Jordan's talent, they lived the dream that he would meet the expectations of the Bulls scouts and help the company make Nike sneakers popular among basketball fans.",
        price: 149,
        colors: [
        {
            code: "lightgray",
            img: "./img/jordan.png",
        },
        {
            code: "green",
            img: "./img/jordan2.png",
        },
    ],
    },
    {
        id: 3,
        title: "Blazer",
        Descriotion: "The Nike Blazer is one of the first basketball sneakers from Nike, first introduced in 1973. A legendary model with a large Swoosh, who found herself not only on the parquet, but also in skateboarding. A well-deserved classic, without which it is impossible to imagine Nike. The Sneaker Encyclopedia of the Streer Beat chain of stores tells about the success of sneakers in the 70s, skateboarding, and the current popularity of the Nike Blazer.",
        price: 109,
        colors: [
        {
            code: "lightgray",
            img: "./img/blazer.png",
        },
        {
            code: "green",
            img: "./img/blazer2.png",
        },
        ],
    },
    {
        id: 4,
        title: "Crater",
        Descriotion: "The sneakers are made of dense textiles with elements of artificial leather. The model consists of at least 20% recycled raw materials. Details: durable upper made of recycled canvas, a back with a loop, a thickened Crater foam sole for cushioning, a soft low-profile side for comfort. We strive for ecology!",
        price: 129,
        colors: [
        {
            code: "black",
            img: "./img/crater.png",
        },
        {
            code: "lightgray",
            img: "./img/crater2.png",
        },
    ],
    },
    {
        id: 5,
        title: "Hippie",
        Descriotion: "The way to create these sneakers can be divided into three large blocks: the search for ideas, the creation of the first prototypes and the selection of suitable materials. At each stage, Nike designers made many discoveries that allowed us to get Space Hippie as we know them now.",
        price: 99,
        colors: [
        {
            code: "gray",
            img: "./img/hippie.png",
        },
        {
            code: "black",
            img: "./img/hippie2.png",
        },
        ],
    },
    ];

    let choosenProducts = products[0];

    const currentProductImg = document.querySelector(".productImg");
    const currentProductTitle = document.querySelector(".productTitle");
    const currentProductPrice = document.querySelector(".productPrice");
    const currentProductColors = document.querySelectorAll(".color");
    const currentProductSizes = document.querySelectorAll(".size");
    const currentProductDescr = document.querySelector(".productDesc");

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        //change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        //change the choosen produst
        choosenProduct = products[index];

        //change texts of currentProduct
        currentProductTitle.textContent = choosenProduct.title;

        //change price 
        currentProductPrice.textContent = "$" + choosenProduct.price;

        //change Description 
        currentProductDescr.textContent = choosenProduct.Descriotion;

        //change Image
        currentProductImg.src = choosenProduct.colors[0].img

        //assing new colors
        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
        })
    });
});


currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
        currentProductImg.src = choosenProduct.colors[index].img
    })
})


currentProductSizes.forEach((size, index) => {
    size.addEventListener("click", () => {
        currentProductSizes.forEach((size) => {
            size.style.backgroundColor = "white";
            size.style.color = "black";
        });
        size.style.backgroundColor = "black";
        size.style.color = "white";
    })
})


const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
    payment.style.display="flex"
})

close.addEventListener("click", () => {
    payment.style.display="none"
})