var product = [{
    id: 1,
    img: 'https://apxofficialstore.com/wp-content/uploads/2023/01/GW9195_010.jpg',
    name: 'รองเท้า Adidas',
    price: 2250,
    description:'รองเท้า Adidas Grand Court 2.0 Cloudfoam Comfort | Cloud White/Core Black/Cloud White ( GW9195 )',
    type: 'Fashion',
},{
    id: 2,
    img: 'https://img.lazcdn.com/g/p/cb377f30667b24606389a67e009402bf.jpg_720x720q80.jpg',
    name: 'เสื้อผู้ชายแฟชั่น',
    price: 499,
    description:'เสื้อผู้ชายแฟชั่น M อก 36 ยาว 28 นิ้วL อก 38 ยาว 29 นิ้วXL อก 40 ยาว 30 นิ้วXXLอก 42 ยาว 31 นิ้วม',
    type: 'Fashion',
},{
    id: 3,
    img: 'https://down-th.img.susercontent.com/file/dbcdf4efcaabf05c31380c80cc10f466',
    name: 'เสื้อผู้หญิงแฟชั่น',
    price: 399,
    description:'เสื้อผู้หญิงแฟชั่น M- แนะนำ45-50กกL- แนะนำ 55-60 กกXL แนะนำ 60-65 กก',
    type: 'Fashion',
  },{
    id: 4,
    img: 'https://s3-ap-southeast-1.amazonaws.com/pcms.production.mcshop/catalog/product/x/x/xxmmiz1920b_2__9.jpg',
    name: 'กางเกงยืนส์ผู้ชาย',
    price: 3190,
    description:'กางเกงยืนส์ผู้ชาย กางเกงยีนส์ กระบอกขาตรง STRAIGHTเนื้อผ้า 100% Cotton ไม่ยืด ขนาด 12.5 ozเป้ากางเกงเป็นกระดุมCHAIN STITCH การเย็บตะเข็บลูกโซ่ปลายขาเย็บลูกโซ่ หรือที่เรียกว่า ROPING EFFECTเป็นวิธีที่นิยมสำหรับกางเกงยีนส์สไตล์วินเทจเพราะเมื่อใส่ไปนานๆ จนเกิดเฟด ลายเฟดจะมีดีเทลที่เกิดจากการบิดตัว การเสียดสีของปลายขา เป็นริ้วเหมือนเชือก',
    type: 'Fashion',
  },{
    id: 5,
    img: 'https://s3-ap-southeast-1.amazonaws.com/pcms.production.mcshop/catalog/product/x/x/xxmfiz2070c_2_.jpg',
    name: 'กางเกงผู้หญิงยืนส์',
    price: 2190,
    description:'กางเกงผู้หญิงยืนส์ กางเกงยีนส์ผู้หญิง ทรง STRAIGHT WIDE ทรงกระบอกเล็กปลายขากว้างเนื้อผ้า 100% COTTON ขนาด 10 OZเอวสูง High WaistCHAIN STITCH การเย็บตะเข็บลูกโซ่ปลายขาเย็บลูกโซ่ หรือที่เรียกว่า ROPING EFFECTเป็นวิธีที่นิยมสำหรับกางเกงยีนส์สไตล์วินเทจเพราะเมื่อใส่ไปนานๆ จนเกิดเฟด ลายเฟดจะมีดีเทลที่เกิดจากการบิดตัว การเสียดสีของปลายขา เป็นริ้วเหมือนเชือก',
    type: 'Fashion',
}];
//[{},{},{}] // length = 3

// var product;

$(document).ready(() => {

  // $.ajax({
  //   method: 'get',
  //   url: './api/getallproduct.php',
  //   success: function(response){
  //     console.log(response)
  //     if(response.RespCode == 200){
  //       product = response.Result;
  //       var html = "";
  //       for (let i = 0; i < product.length; i++) {
  //         html += `<div onclick="openProductDetail(${i})" class="product-items ${product[i].type}">
  //                   <img class="product-img" src="./Image/${product[i].img}" alt="">
  //                   <p style="font-size: 1.2vw;">${product[i].name}</p>
  //                   <p stlye="font-size: 1vw;">${numberWithCommas(product[i].price)}THB</p>
  //               </div>`;
  //         }
  //         $("#productlist").html(html);
  //     }
  //   },error: function(err){
  //     console.log(err)
  //   }   
  // })

  var html = "";
  for (let i = 0; i < product.length; i++) {
    html += `<div onclick="openProductDetail(${i})" class="product-items ${
      product[i].type}">
                    <img class="product-img" src="${product[i].img}" alt="">
                    <p style="font-size: 1.2vw;">${product[i].name}</p>
                    <p stlye="font-size: 1vw;">${numberWithCommas(product[i].price)}THB</p>
                </div>`;
  }
  $("#productlist").html(html);

});

function numberWithCommas(x) {
  x = x.toString();
  var pattern = /(-?\d+)(\d{3})/;
  while (pattern.test(x)) 
    x = x.replace(pattern, "$1,$2");
  return x;
}

function searchsomething(elem) {
  // console.log('#'+elem.id)
  var value = $("#" + elem.id).val();
  console.log(value);
  // <img class="product-img" src="./Image/${product[i].img}" alt=""></img>
  var html = "";
  for (let i = 0; i < product.length; i++) {
    if (product[i].name.includes(value)) {
      html += `<div onclick="openProductDetail(${i})" class="product-items ${product[i].type}">
              <img class="product-img" src="${product[i].img}" alt=""> 
              <p style="font-size: 1.2vw;">${product[i].name}</p>
              <p stlye="font-size: 1vw;">${numberWithCommas(product[i].price)} THB</p>
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
  // $("#mdd-img").attr("src",'./Image/'+ product[index].img);
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

// {/* <img src="./Image/${cart[i].img}" alt=""></img> */}
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

// function buynow() {

// }
