var product = [{
    id: 1,
    img: 'https://down-th.img.susercontent.com/file/th-11134207-7r98w-lr130fo4pj724d',
    name: 'Oil Vitamin',
    price: 125,
    description: 'Oil Vitamin Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut facere esse quam voluptates ab velit adipisci? Minima voluptatem perspiciatis ex vitae, alias aspernatur error ipsam culpa. Accusantium quia culpa nulla',
    type: 'Beauty & Cosmetics'
}, {
    id: 2,
    img: 'https://www.premacare.co.th/assets/file/product/homepage/202301/271220-ft-fmp67profile.png',
    name: 'Simlox',
    price: 500,
    description: 'Simlox Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut facere esse quam voluptates ab velit adipisci? Minima voluptatem perspiciatis ex vitae, alias aspernatur error ipsam culpa. Accusantium quia culpa nulla',
    type: 'food supplement'
},{
    id: 3,
    img: 'https://image.makewebeasy.net/makeweb/m_1200x600/Abg0fNlWE/Article/O1CN01ELmNZa1Q7WaT47QJN__490011929.jpg',
    name: 'Fashion',
    price: 199,
    description: 'Fashion Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut facere esse quam voluptates ab velit adipisci? Minima voluptatem perspiciatis ex vitae, alias aspernatur error ipsam culpa. Accusantium quia culpa nulla',
    type: 'Fashion'
}];

$(document).ready(() => {
    var html = '';
    for (let i = 0; i < product.length; i++) {
        html += `<div class="product-items" ${product[i].type}>
                    <img class="product-img"  src="${product[i].img}" alt="">
                    <p style ="font-size: 1.5vw;">${product[i].name}</p> 
                </div>`;
    }
    $("#productlist").html(html)

}) 

// var product = [{
//     id: 1,
//     img: '',
//     name: '',
//     price: 700 ,
//     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, blanditiis sit. Accusantium maxime eum rerum.',
//     type: 'เครื่องสำอางและครีม'
// } , {} , {}];
