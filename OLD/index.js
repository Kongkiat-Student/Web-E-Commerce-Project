var product = [{
    id: 1,
    img: 'https://down-th.img.susercontent.com/file/th-11134207-7r98w-lr130fo4pj724d',
    name: 'ทีทรีออยล์วิตามินซี',
    price: 499,
    description:'ทีทรีออยล์วิตามินซี ลดอาการแดง ผื่นคันที่เกิดจากแมลงกัดต่อย และลดการอักเสบของผิวหนังที่เกิดรอยไหม้จากแสงแดดได้ รักษาบาดแผลโดยช่วยให้แผลฟื้นตัวเร็วขึ้นและลดขนาดบาดแผลลง ทำลายแบคทีเรียและเชื้อโรคที่ทำให้เกิดสิว ควบคุมความมันบนใบหน้า กระชับรูขุมขน เพื่อลดปัญหาการเกิดสิวตามมาทีหลัง',
    type: 'Beauty & Cosmetics',
},{
    id: 2,
    img: 'https://www.premacare.co.th/assets/file/product/homepage/202301/271220-ft-fmp67profile.png',
    name: 'ซิมล็อกซ์',
    price: 599,
    description:'ซิมล็อกซ์ เป็นยาปฏิชีวนะที่ช่วยรักษาหรือป้องกันการติดเชื้อแบคทีเรียบางชนิด เช่น การติดเชื้อทางเดินหายใจ ทางเดินปัสสาวะอักเสบ ต่อมลูกหมากติดเชื้อ โรคหนองใน ปอมบวม โรคแอนแทรกซ์ รวมไปถึงการติดเชื้อที่ผิวหนัง กระดูก ข้อต่อ และช่องท้อง โดยกลไกการออกฤทธิ์ของยาจะเข้าไปยับยั้งการเจริญเติบโตและฆ่าเชื้อแบคทีเรีย แต่ไม่มีผลต่อการรักษาเชื้อไวรัส ',
    type: 'food supplement',
},{
    id: 3,
    img: 'https://image.makewebeasy.net/makeweb/m_1200x600/Abg0fNlWE/Article/O1CN01ELmNZa1Q7WaT47QJN__490011929.jpg',
    name: 'เสื้อแฟชั่น',
    price: 250,
    description:'เสื้อแฟชั่น ผู้หญิงสวยงามตามยุค',
    type: 'Fashion',
  },{
    id: 4,
    img: 'https://files.vogue.co.th/uploads/2023_04_vbeauty_body-sun-screens_1230x710_-_Copy.png',
    name: 'ครีมกันแดด',
    price: 699,
    description:'ครีมกันแดด ช่วยป้องกันการถูกแดดเผาลดมะเร็งผิวหนัง ช่วยให้ร่างกายป้องกันตัวเองจากภัยคุกคามอื่นๆ สามารถลดริ้วรอยก่อนวัยได้ช่วยลดอาการกำเริบของโฟโตเดอร์โมเสส',
    type: 'Beauty & Cosmetics',
  },{
    id: 5,
    img: 'https://s3-ap-southeast-1.amazonaws.com/pcms.production.mcshop/catalog/product/_/_/______mccz020_m_3_.jpg',
    name: 'กางเกง',
    price: 240,
    description:'กางเกง ใส่สบายหล่อเท่ตามแฟชั่นปัจจุบัน',
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

function buynow() {
  $ajax({
    method: 'post',
    url : './api/buynow.php',
    data: {
        product: cart
    }, success: function(response){
      console.log(response)
      if(response.RespCode == 200) {
        Swal.firel({
          icon: 'success',
          title: 'Thanks you',
          html: `<p> Amount : ${response.Amount.Amount}</p>
                 <p> Shipping : ${response.Amount.Shipping}</p>
                 <p> Vat : ${response.Amount.Vat}</p>
                 <p> Natamount : ${response.Amount.Netamount}</p>
                 `
        }).then((res) => {
          if(res.isConfirmed){
            cart = [];
            closeModal();
            $("#cardcount").css('display','none')
          }

        })
      }
      else{
        Swal.firel({
          icon: 'error',
          title: 'Something is went wrong!'
        })
      }
    },error: function(err){
      console.log(err)
    }
  })
}
