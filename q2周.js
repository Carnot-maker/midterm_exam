// 原始產品清單
const products = [
  { name: "keyboard", stock: 25 },
  { name: "mouse", stock: 5 },
  { name: "monitor", stock: 8 },
  { name: "usb cable", stock: 40 }
];

// 要更新的庫存資料
const updates = {
  mouse: 15,
  monitor: 20
};


// ================================================================================================================




function getLowStock(products) {
    // 創造函式getLowStock，參數為products
    let lowStockItems = [];
    // 創造空陣列lowStockItems，專門存放庫存少於10的商品名稱
    for (let i = 0; i < products.length; i++) {
        // 用for迴圈跑products陣列，每次迴圈i加1
        if (products[i].stock < 10) {
            lowStockItems.push(products[i].name);
        };
        // 如果products陣列中第i個物件的stock屬性小於10，則把該物件的name屬性加入lowStockItems陣列
    };
    console.log("庫存少於 10 的項目：" ,lowStockItems);
    return lowStockItems;
};
// getLowStock(products);


// ================================================================================================================



function updateStock(products, updates) {
     // 建立一個函式叫做 updateStock

    const updatedProducts = products.map(
      product_i => { // 區塊寫法 - 用大括號{}
          // XX.map()這裡的 product_i 就是當前正在處理的陣列元素，類似迴圈裡面的 i
          // 建立一個變數 updatedProducts，專門放更新後的產品陣列

          const productName = product_i.name; // 取得產品名稱name這個key，這個是必要的嗎??

          const newStock = updates[productName]; // 從「updates」物件中取得新的庫存量，簡單來說就是把Stock抓來更新；還有這裡是類似字典那樣抓個key值，然後取得對應的value值(stock)
          // 如果「找不到」updates對應的新庫存值，會回傳 undefined

          if (newStock !== undefined) { // 如果 newStock不等於undefined；目前有mouse和monitor兩個產品有新的庫存量，所以他們屬於undefined以外的值
              return { 
                  ...product_i, stock: newStock // 使用展開運算子 (...) 複製原始物件，然後把 newStock 的值覆寫到新物件的 stock 屬性裡
              };// 這個 { ... } 本身是匿名物件，還有這裡是類似迴圈那樣，一個一個丟進去處理
          } else {
              return { ...product_i };// 回傳的是：copy那一串的原始物件key和value
          }

      }
    );// 區塊寫法 - 用大括號{}


    updatedProducts.forEach(product => {// .forEach：陣列方法，對陣列中的每個元素執行一次指定的函式
        console.log(`${product.name} 的庫存： ${product.stock}`);//正在列印每個產品的名稱和庫存量 
    });
    return updatedProducts;
   
}
// updateStock(products, updates);