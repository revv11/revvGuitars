import p1_img from "./product_1.png";
import p2_img from "./alexi.png";
import p3_img from "./product_3.png";
import p4_img from "./product_4.png";
import p5_img from "./product_5.png";
import p6_img from "./product_6.png";
import p7_img from "./product_7.png";
import p8_img from "./product_8.png";
import p9_img from "./product_9.png";
import p10_img from "./product_10.png";
import p11_img from "./product_11.png";
import p12_img from "./product_12.png";
import p13_img from "./product_13.png";
import p14_img from "./product_14.png";
import p15_img from "./product_15.png";
import p16_img from "./product_16.png";
// import p17_img from "./product_17.png";
// import p18_img from "./product_18.png";
// import p19_img from "./product_19.png";
// import p20_img from "./product_20.png";
// import p21_img from "./product_21.png";
// import p22_img from "./product_22.png";
// import p23_img from "./product_23.png";
// import p24_img from "./product_24.png";
// import p25_img from "./product_25.png";
// import p26_img from "./product_26.png";
// import p27_img from "./product_27.png";
// import p28_img from "./product_28.png";
// import p29_img from "./product_29.png";
// import p30_img from "./product_30.png";
// import p31_img from "./product_31.png";
// import p32_img from "./product_32.png";
// import p33_img from "./product_33.png";
// import p34_img from "./product_34.png";
// import p35_img from "./product_35.png";
// import p36_img from "./product_36.png";

let all_product = [
  {
    id: 1,
    name: "Schecter Guitar Research Synyster Gates Standard Electric Guitar",
    category: "schecter",
    image: p1_img,
    new_price: 1475,
    old_price: 1699,
  },
  {
    id: 2,
    name: "Aaron Marshall AM-7",
    category: "schecter",
    image: p15_img,
    new_price: 1699,
    old_price: 1999,
  },
  {
    id: 3,
    name: "Demon-6 (Aged Black Satin)",
    category: "schecter",
    image: p7_img,
    new_price: 600.0,
    old_price: 1000.5,
  },
  {
    id: 4,
    name: "Sunset-6 Extreme",
    category: "schecter",
    image: p8_img,
    new_price: 1000.0,
    old_price: 1500.0,
  },
  {
    id: 5,
    name: "Delux Acoustic",
    category: "schecter",
    image: p9_img,
    new_price: 850.0,
    old_price: 1200.5,
  },
  {
    id: 6,
    name: "Aaron Marshall AM-6",
    category: "schecter",
    image: p6_img,
    new_price: 1699,
    old_price: 1999,
  },
  {
    id: 7,
    name: "Jake Pitts E-1 FR S",
    category: "schecter",
    image: p10_img,
    new_price: 850.0,
    old_price: 1200.5,
  },
  {
    id: 8,
    name: "Avenger Blackjack",
    category: "schecter",
    image: p11_img,
    new_price: 850.0,
    old_price: 1200.5,
  },
  {
    id: 9,
    name: "PT-Classic",
    category: "schecter",
    image: p12_img,
    new_price: 850.0,
    old_price: 1200.5,
  },
  {
    id: 10,
    name: "Banshee GT FR S",
    category: "schecter",
    image: p13_img,
    new_price: 850.0,
    old_price: 1200.5,
  },
  {
    id: 11,
    name: "Solo-II Supreme",
    category: "schecter",
    image: p14_img,
    new_price: 850.0,
    old_price: 1200.5,
  },
  {
    id: 12,
    name: "Synyster Gates 'SYN J' Acoustic",
    category: "schecter",
    image: p16_img,
    new_price: 850.0,
    old_price: 1200.5,
  },
  {
    id: 13,
    name: "ESP ALEXI HEXED",
    category: "esp",
    image: p2_img,
    new_price: 850.0,
    old_price: 1200.5,
  },
  {
    id: 14,
    name: "M-1007 BARITONE",
    category: "esp",
    image: p5_img,
    new_price: 850.0,
    old_price: 1200.5,
  },
//   {
//     id: 15,
//     name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
//     category: "esp",
//     image: p17_img,
//     new_price: 85.0,
//     old_price: 120.5,
//   },
//   {
//     id: 16,
//     name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
//     category: "esp",
//     image: p18_img,
//     new_price: 85.0,
//     old_price: 120.5,
//   },
//   {
//     id: 17,
//     name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
//     category: "esp",
//     image: p19_img,
//     new_price: 85.0,
//     old_price: 120.5,
//   },
//   {
//     id: 18,
//     name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
//     category: "esp",
//     image: p20_img,
//     new_price: 85.0,
//     old_price: 120.5,
//   },
//   {
//     id: 19,
//     name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
//     category: "esp",
//     image: p19_img,
//     new_price: 85.0,
//     old_price: 120.5,
//   },
//   {
//     id: 20,
//     name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
//     category: "esp",
//     image: p20_img,
//     new_price: 85.0,
//     old_price: 120.5,
//   },
//   {
//     id: 21,
//     name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
//     category: "esp",
//     image: p21_img,
//     new_price: 85.0,
//     old_price: 120.5,
//   },
//   {
//     id: 22,
//     name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
//     category: "esp",
//     image: p22_img,
//     new_price: 85.0,
//     old_price: 120.5,
//   },
//   {
//     id: 23,
//     name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
//     category: "esp",
//     image: p23_img,
//     new_price: 85.0,
//     old_price: 120.5,
//   },
//   {
//     id: 24,
//     name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
//     category: "esp",
//     image: p24_img,
//     new_price: 85.0,
//     old_price: 120.5,
//   },
{
    id: 15,
    name: "KIKO 100",
    category: "ibanez",
    image: p3_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 16,
    name: "TOD 10",
    category: "ibanez",
    image: p4_img,
    new_price: 850.0,
    old_price: 1200.5,
  },
//   {
//     id: 27,
//     name: "Boys Orange Colourblocked Hooded Sweatshirt",
//     category: "ibanez",
//     image: p27_img,
//     new_price: 85.0,
//     old_price: 120.5,
//   },
//   {
//     id: 28,
//     name: "Boys Orange Colourblocked Hooded Sweatshirt",
//     category: "ibanez",
//     image: p28_img,
//     new_price: 85.0,
//     old_price: 120.5,
//   },
//   {
//     id: 29,
//     name: "Boys Orange Colourblocked Hooded Sweatshirt",
//     category: "ibanez",
//     image: p29_img,
//     new_price: 85.0,
//     old_price: 120.5,
//   },
//   {
//     id: 30,
//     name: "Boys Orange Colourblocked Hooded Sweatshirt",
//     category: "ibanez",
//     image: p30_img,
//     new_price: 85.0,
//     old_price: 120.5,
//   },
//   {
//     id: 31,
//     name: "Boys Orange Colourblocked Hooded Sweatshirt",
//     category: "ibanez",
//     image: p31_img,
//     new_price: 85.0,
//     old_price: 120.5,
//   },
//   {
//     id: 32,
//     name: "Boys Orange Colourblocked Hooded Sweatshirt",
//     category: "ibanez",
//     image: p32_img,
//     new_price: 85.0,
//     old_price: 120.5,
//   },
//   {
//     id: 33,
//     name: "Boys Orange Colourblocked Hooded Sweatshirt",
//     category: "ibanez",
//     image: p33_img,
//     new_price: 85.0,
//     old_price: 120.5,
//   },
//   {
//     id: 34,
//     name: "Boys Orange Colourblocked Hooded Sweatshirt",
//     category: "ibanez",
//     image: p34_img,
//     new_price: 85.0,
//     old_price: 120.5,
//   },
//   {
//     id: 35,
//     name: "Boys Orange Colourblocked Hooded Sweatshirt",
//     category: "ibanez",
//     image: p35_img,
//     new_price: 85.0,
//     old_price: 120.5,
//   },
//   {
//     id: 36,
//     name: "Boys Orange Colourblocked Hooded Sweatshirt",
//     category: "ibanez",
//     image: p36_img,
//     new_price: 85.0,
//     old_price: 120.5,
//   },
];

export default all_product;
