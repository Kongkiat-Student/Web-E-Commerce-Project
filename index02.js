var product = [{
    id: 1,
    img: 'https://online.karmarts.com/media/catalog/product/cache/2/image/767x767/9df78eab33525d08d6e5fb8d27136e95/p/o/post_fb_1_1.jpg',
    name: 'ลิปสติก',
    price: 139,
    description:'ลิปสติก ลิปสติกสูตรติดทนนานที่มอบผลลัพธ์สีสันสดชัด•ไม่แตกเป็นเส้น ไม่แตกเป็นริ้ว ไม่เป็นขุย และไม่ตกร่อง•สูตรช่วยบำรุง และปรับสภาพริมฝีปากจะเก็บล็อคความชุ่มชื้นและไม่ทำให้ริมฝีปากแห้งเมื่อเวลาผ่านไป เพื่อการใช้งานที่รู้สึกสบายเป็นพิเศษ',
    type: 'Beauty & Cosmetics',
},{
    id: 2,
    img: 'https://down-th.img.susercontent.com/file/33bff70d4516d94da0b356e32c9e8e9b',
    name: 'ดินสอเขียนคิ้ว',
    price: 130,
    description:'ดินสอเขียนคิ้ว ใหม่ ดินสอเขียนคิ้ว พร้อมแปรงปัดคิ้วหัวสามเหลี่ยมบางเฉียบขนคิ้วที่ได้รับการดูแลเป็นอย่างดีเป็นความลับที่จะทำให้คิ้วสวยในทันทีส่วนปลายของรูปสามเหลี่ยมบิดขึ้นได้รับการออกแบบมาอย่างดี เพื่อการใช้งานที่แม่นยำในขณะที่ปลายแปรงช่วยขนคิ้วเรียงเส้นสวยงาม',
    type: 'food supplement',
},{
    id: 3,
    img: 'https://www.cutepress.com/pub/media/magefan_blog/cover_jj.jpg',
    name: 'ครีมบำรุงผิว',
    price: 329,
    description:'ครีมบำรุงผิว ครีมบำรุงผิวที่มีส่วนประกอบทั้งน้ำมัน และน้ำ โดยครีมทาหน้า แต่ละแบบก็จะแตกต่างกันออกไป ขึ้นอยู่กับความต้องการของแต่ละบุคคล เนื่องจากในแต่ละบุคคลก็จะมีสภาพผิวที่ไม่เหมือนกันอาทิ ผู้ที่ต้องการครีมทาหน้าขาว ผู้ที่ต้องการครีมฟื้นฟูผิวหน้า แต่ข้อดีของการใช้ครีมทาหน้า ก็คือสามารถให้ความชุ่มชื้นแก่ผิวมากกว่าเซรั่มนั่นเอง นั่นเป็นเห็นผลที่ว่าทำไมเรายังคงต้องใช้ครีมทาผิว',
    type: 'Fashion',
  },{
    id: 4,
    img: 'https://api.watsons.co.th/api/v2/wtcth/blog/wp-content/uploads/%E0%B9%84%E0%B8%AA%E0%B9%89_10-%E0%B8%A2%E0%B8%B5%E0%B9%88%E0%B8%AB%E0%B9%89%E0%B8%AD%E0%B8%84%E0%B8%A3%E0%B8%B5%E0%B8%A1%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B9%81%E0%B8%94%E0%B8%94_1200x1200_1.jpg',
    name: 'ครีมกันแดด',
    price: 420,
    description:'ครีมกันแดด ช่วยป้องกันการถูกแดดเผาลดมะเร็งผิวหนัง ช่วยให้ร่างกายป้องกันตัวเองจากภัยคุกคามอื่นๆ สามารถลดริ้วรอยก่อนวัยได้ช่วยลดอาการกำเริบของโฟโตเดอร์โมเสส',
    type: 'Beauty & Cosmetics',
  },{
    id: 5,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFMRzVOWt565XUoJerZQih0Jw7sXpmNykOag&s',
    name: 'รองพื้น',
    price: 129,
    description:'รองพื้น องพื้นคุมมันนี้ยังขึ้นชื่อว่าปกปิดดี รอยสิว รอยแดง จุดด่างดำต่าง ๆ คือกลบมิดเนียนกริบ แต่ไม่หนาหนักผิว ให้ลุคธรรมชาติ โดยสาว ๆ สามารถบิวท์เองได้ว่าต้องการปกปิดเลเวลไหน และอีกเรื่องที่หลายคนกังวลว่าใช้แล้วจะอุดตันผิวไหม ก็ขอบอกเลยว่าเขาไม่ทำให้เกิดสิว และผ่านการทดสอบแล้วว่าไม่ระคายเคืองผิว',
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
