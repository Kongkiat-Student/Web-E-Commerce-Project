// var product = [{
//     id: 1,
//     img: 'https://down-th.img.susercontent.com/file/th-11134207-7r98w-lr130fo4pj724d',
//     name: 'Oil Vitamin',
//     price: 1250,
//     description: 'Oil Vitamin Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut facere esse quam voluptates ab velit adipisci? Minima voluptatem perspiciatis ex vitae, alias aspernatur error ipsam culpa. Accusantium quia culpa nulla',
//     type: 'Beauty & Cosmetics'
// }, {
//     id: 2,
//     img: 'https://www.premacare.co.th/assets/file/product/homepage/202301/271220-ft-fmp67profile.png',
//     name: 'Simlox',
//     price: 5009,
//     description: 'Simlox Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut facere esse quam voluptates ab velit adipisci? Minima voluptatem perspiciatis ex vitae, alias aspernatur error ipsam culpa. Accusantium quia culpa nulla',
//     type: 'food supplement'
// },{
//     id: 3,
//     img: 'https://image.makewebeasy.net/makeweb/m_1200x600/Abg0fNlWE/Article/O1CN01ELmNZa1Q7WaT47QJN__490011929.jpg',
//     name: 'Fashion',
//     price: 1998,
//     description: 'Fashion Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut facere esse quam voluptates ab velit adipisci? Minima voluptatem perspiciatis ex vitae, alias aspernatur error ipsam culpa. Accusantium quia culpa nulla',
//     type: 'Fashion'
// }];

// $(document).ready(() => {
//     var html = '';
//     for (let i = 0; i < product.length; i++) {
//         html += `<div class="product-items" ${product[i].type}>
//                     <img class="product-img"  src="${product[i].img}" alt="">
//                     <p style ="font-size: 1.5vw;">${product[i].name}</p>
//                     <p style ="font-size: 1vw;">${numberWithCommas(product[i].price)}</p>
//                 </div>`;
//     }
//     $("#productlist").html(html)

// })

// function numberWithCommas(x) {
//     x = x.toString();
//     var pattern = /(-?\d+)(\d{3})/;
//     while (pattern.test(x))
//         x = x.replace(pattern, "$1,$2");
// }

// var product = [{
//     id: 1,
//     img: '',
//     name: '',
//     price: 700 ,
//     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, blanditiis sit. Accusantium maxime eum rerum.',
//     type: 'เครื่องสำอางและครีม'
// } , {} , {}];

var product = [
  {
    id: 1,
    img: "https://down-th.img.susercontent.com/file/th-11134207-7r98w-lr130fo4pj724d",
    name: "Oil Vitamin",
    price: 1250,
    description:
      "Oil Vitamin Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut facere esse quam voluptates ab velit adipisci? Minima voluptatem perspiciatis ex vitae, alias aspernatur error ipsam culpa. Accusantium quia culpa nulla",
    type: "Beauty & Cosmetics",
  },
  {
    id: 2,
    img: "https://www.premacare.co.th/assets/file/product/homepage/202301/271220-ft-fmp67profile.png",
    name: "Simlox",
    price: 5009,
    description:
      "Simlox Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut facere esse quam voluptates ab velit adipisci? Minima voluptatem perspiciatis ex vitae, alias aspernatur error ipsam culpa. Accusantium quia culpa nulla",
    type: "food supplement",
  },
  {
    id: 3,
    img: "https://image.makewebeasy.net/makeweb/m_1200x600/Abg0fNlWE/Article/O1CN01ELmNZa1Q7WaT47QJN__490011929.jpg",
    name: "Fashion",
    price: 1990,
    description:
      "Fashion Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut facere esse quam voluptates ab velit adipisci? Minima voluptatem perspiciatis ex vitae, alias aspernatur error ipsam culpa. Accusantium quia culpa nulla",
    type: "Fashion",
  },
];
// [{},{},{}] // length = 3

$(document).ready(() => {
  var html = "";
  for (let i = 0; i < product.length; i++) {
    html += `<div onclick="openProductDetail(${i})" class="product-items ${
      product[i].type
    }">
                    <img class="product-img" src="${product[i].img}" alt="">
                    <p style="font-size: 1.2vw;">${product[i].name}</p>
                    <p stlye="font-size: 1vw;">${numberWithCommas(
                      product[i].price
                    )} THB</p>
                </div>`;
  }
  $("#productlist").html(html);
});

function numberWithCommas(x) {
  x = x.toString();
  var pattern = /(-?\d+)(\d{3})/;
  while (pattern.test(x)) x = x.replace(pattern, "$1,$2");
  return x;
}

function searchsomething(elem) {
  // console.log('#'+elem.id)
  var value = $("#" + elem.id).val();
  console.log(value);

  var html = "";
  for (let i = 0; i < product.length; i++) {
    if (product[i].name.includes(value)) {
      html += `<div onclick="openProductDetail(${i})" class="product-items ${
        product[i].type
      }">
                    <img class="product-img" src="${product[i].img}" alt="">
                    <p style="font-size: 1.2vw;">${product[i].name}</p>
                    <p stlye="font-size: 1vw;">${numberWithCommas(
                      product[i].price
                    )} THB</p>
                </div>`;
    }
  }
  if (html == "") {
    $("#productlist").html(`<p>Not found product</p>`);
  } else {
    $("#productlist").html(html);
  }
}

function searchproduct(param) {
  console.log(param);
  $(".product-items").css("display", "none");
  if (param == "all") {
    $(".product-items").css("display", "block");
  } else {
    $("." + param).css("display", "block");
  }
}

var productindex = 0;
function openProductDetail(index) {
  productindex = index;
  console.log(productindex);
  $("#modalDesc").css("display", "flex");
  $("#mdd-img").attr("src", product[index].img);
  $("#mdd-name").text(product[index].name);
  $("#mdd-price").text(numberWithCommas(product[index].price) + " THB");
  $("#mdd-desc").text(product[index].description);
}

function closeModal() {
  $(".modal").css("display", "none");
}

var cart = [];
function addtocart() {
  var pass = true;

  for (let i = 0; i < cart.length; i++) {
    if (productindex == cart[i].index) {
      console.log("found same product");
      cart[i].count++;
      pass = false;
    }
  }

  if (pass) {
    var obj = {
      index: productindex,
      id: product[productindex].id,
      name: product[productindex].name,
      price: product[productindex].price,
      img: product[productindex].img,
      count: 1,
    };
    // console.log(obj)
    cart.push(obj);
  }
  console.log(cart);

  Swal.fire({
    icon: "success",
    title: "Add " + product[productindex].name + " to cart !",
  });
  $("#cartcount").css("display", "flex").text(cart.length);
}

function openCart() {
  $("#modalCart").css("display", "flex");
  rendercart();
}

function rendercart() {
  if (cart.length > 0) {
    var html = "";
    for (let i = 0; i < cart.length; i++) {
      html += `<div class="cartlist-items">
                        <div class="cartlist-left">
                            <img src="${cart[i].img}" alt="">
                            <div class="cartlist-detail">
                                <p style="font-size: 1.5vw;">${cart[i].name}</p>
                                <p style="font-size: 1.2vw;">${numberWithCommas(
                                  cart[i].price * cart[i].count
                                )} THB</p>
                            </div>
                        </div>
                        <div class="cartlist-right">
                            <p onclick="deinitems('-', ${i})" class="btnc">-</p>
                            <p id="countitems${i}" style="margin: 0 20px;">${
        cart[i].count
      }</p>
                            <p onclick="deinitems('+', ${i})" class="btnc">+</p>
                        </div>
                    </div>`;
    }
    $("#mycart").html(html);
  } else {
    $("#mycart").html(`<p>Not found product list</p>`);
  }
}

function deinitems(action, index) {
  if (action == "-") {
    if (cart[index].count > 0) {
      cart[index].count--;
      $("#countitems" + index).text(cart[index].count);

      if (cart[index].count <= 0) {
        Swal.fire({
          icon: "warning",
          title: "Are you sure to delete?",
          showConfirmButton: true,
          showCancelButton: true,
          confirmButtonText: "Delete",
          cancelButtonText: "Cancel",
        }).then((res) => {
          if (res.isConfirmed) {
            cart.splice(index, 1);
            console.log(cart);
            rendercart();
            $("#cartcount").css("display", "flex").text(cart.length);

            if (cart.length <= 0) {
              $("#cartcount").css("display", "none");
            }
          } else {
            cart[index].count++;
            $("#countitems" + index).text(cart[index].count);
            rendercart();
          }
        });
      }
      rendercart();
    }
  } else if (action == "+") {
    cart[index].count++;
    $("#countitems" + index).text(cart[index].count);
    rendercart();
  }
}
