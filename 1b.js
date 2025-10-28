// ==========================================
// 商品庫存與查詢系統
// ==========================================
// 功能說明：
//  getLowStock - 篩選出庫存不足的商品
//  updateStock - 批次更新商品庫存
// ==========================================

// ==========================================
//  取得低庫存商品清單
// ==========================================

/**
 * 篩選出庫存量少於 10 的商品名稱
 *
 * @param {Array} products - 商品陣列，每個元素包含 { name, stock }
 * @returns {Array} 庫存不足商品的名稱陣列
 *
 * 範例：
 *   輸入: [{ name: "mouse", stock: 5 }, { name: "keyboard", stock: 25 }]
 *   輸出: ["mouse"]
 */
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
getLowStock(products);



// ==========================================
//  批次更新商品庫存
// ==========================================

/**
 * 根據更新物件批次更新商品庫存
 * 注意：不修改原始陣列，回傳新的陣列
 *
 * @param {Array} products - 原始商品陣列
 * @param {Object} updates - 要更新的商品庫存，格式：{ 商品名: 新庫存量 }
 * @returns {Array} 更新後的新商品陣列
 *
 * 範例：
 *   products = [{ name: "mouse", stock: 5 }]
 *   updates = { mouse: 15 }
 *   結果: [{ name: "mouse", stock: 15 }]
 */



function updateStock(products, updates) {
     // 建立一個函式叫做 updateStock

    const updatedProducts = products.map(product_i => { // 區塊寫法 - 用大括號{}
        // XX.map()這裡的 product_i 就是當前正在處理的陣列元素，類似迴圈裡面的 i
        // 建立一個變數 updatedProducts，專門放更新後的產品陣列

        const productName = product_i.name; // 取得產品名稱name這個key

        const newStock = updates[productName]; // 從「updates」物件中取得新的庫存量，簡單來說就是把Stock抓來更新；還有這裡是類似字典那樣抓個key值，然後取得對應的value值(stock)
        // 如果「找不到」updates對應的新庫存值，會回傳 undefined

        if (newStock !== undefined) { // 如果 newStock不等於undefined；目前有mouse和monitor兩個產品有新的庫存量，所以他們屬於undefined以外的值
            return { 
                ...product_i, stock: newStock // 使用展開運算子 (...) 複製原始物件，然後把 newStock 的值覆寫到新物件的 stock 屬性裡
            };// 這個 { ... } 本身是匿名物件
        } else {
            return { ...product_i };// 回傳的是：原始物件的淺拷貝
        }

    });// 區塊寫法 - 用大括號{}


    updatedProducts.forEach(product => {// .forEach：陣列方法，對陣列中的每個元素執行一次指定的函式
        console.log(`${product.name} 的庫存： ${product.stock}`);//正在列印每個產品的名稱和庫存量 
    });
    return updatedProducts;
   
}
updateStock(products, updates);

// ==========================================
// 測試範例
// ==========================================

// 測試資料
const products = [
  { name: "keyboard", stock: 25 },
  { name: "mouse", stock: 5 },
  { name: "monitor", stock: 8 },
  { name: "usb cable", stock: 40 }
];

console.log("==========================================");
console.log("原始商品資料：");
console.log("==========================================");
console.log(products);
console.log("");

// ------------------------------------------
// 測試 (a) getLowStock
// ------------------------------------------
console.log("==========================================");
console.log("(a) 測試 getLowStock - 查詢低庫存商品");
console.log("==========================================");

const lowStockItems = getLowStock(products);
console.log("庫存少於 10 的商品：", lowStockItems);
console.log("預期結果：['mouse', 'monitor']");

// 檢查結果是否正確
let isCorrect = true;
if (lowStockItems.length !== 2) {
  isCorrect = false;
}
if (lowStockItems[0] !== "mouse" || lowStockItems[1] !== "monitor") {
  isCorrect = false;
}
console.log("測試結果：", isCorrect ? "✅ 通過" : "❌ 失敗");
console.log("");

// ------------------------------------------
// 測試 (b) updateStock
// ------------------------------------------
console.log("==========================================");
console.log("(b) 測試 updateStock - 批次更新庫存");
console.log("==========================================");

const updates = {
  mouse: 15,
  monitor: 20
};

console.log("要更新的商品：", updates);
console.log("");

const updatedProducts = updateStock(products, updates);

console.log("更新後的商品資料：");
console.log(updatedProducts);
console.log("");

console.log("原始商品資料是否被修改？");
console.log(products);
console.log("原始資料保持不變：",
  products[1].stock === 5 && products[2].stock === 8 ? "✅ 通過（未被修改）" : "❌ 失敗（被修改了）"
);
console.log("");

console.log("新陣列的庫存是否正確更新？");
console.log("mouse 的庫存：", updatedProducts[1].stock, " (預期: 15)", updatedProducts[1].stock === 15 ? "✅" : "❌");
console.log("monitor 的庫存：", updatedProducts[2].stock, " (預期: 20)", updatedProducts[2].stock === 20 ? "✅" : "❌");
console.log("keyboard 的庫存：", updatedProducts[0].stock, " (預期: 25，未變)", updatedProducts[0].stock === 25 ? "✅" : "❌");
console.log("");


// ==========================================
// 進階測試：組合使用兩個函式
// ==========================================
console.log("==========================================");
console.log("進階測試：組合使用兩個函式");
console.log("==========================================");

// 步驟 1: 找出低庫存商品
const lowStock = getLowStock(products);
console.log("步驟 1 - 低庫存商品：", lowStock);

// 步驟 2: 為低庫存商品補貨（設定庫存為 50）
const restockUpdates = {};
lowStock.forEach(name => {
  restockUpdates[name] = 50;
});
console.log("步驟 2 - 補貨清單：", restockUpdates);

// 步驟 3: 執行補貨
const restockedProducts = updateStock(products, restockUpdates);
console.log("步驟 3 - 補貨後的商品：", restockedProducts);

// 步驟 4: 檢查是否還有低庫存商品
const stillLowStock = getLowStock(restockedProducts);
console.log("步驟 4 - 補貨後的低庫存商品：", stillLowStock);
console.log("所有商品庫存充足：", stillLowStock.length === 0 ? "✅ 是" : "❌ 否");
console.log("");


// ==========================================
// 匯出函式（供其他檔案使用）
// ==========================================

// 如果在 Node.js 環境中使用，可以匯出這些函式
// 在其他檔案中可以使用：const { getLowStock, updateStock } = require('./sol2.js');
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    getLowStock,
    updateStock
  };
}


// ==========================================
// 補充說明：關鍵概念解析
// ==========================================

/*

1. filter() 方法
   - 用途：篩選陣列中符合條件的元素
   - 語法：array.filter(callback)
   - 回傳：新陣列（只包含符合條件的元素）
   - 範例：[1, 2, 3, 4].filter(num => num > 2)  // [3, 4]

2. map() 方法
   - 用途：轉換陣列中的每個元素
   - 語法：array.map(callback)
   - 回傳：新陣列（每個元素都經過轉換）
   - 範例：[1, 2, 3].map(num => num * 2)  // [2, 4, 6]

3. 展開運算子 (...)
   - 用途：複製物件或陣列（淺拷貝）
   - 語法：{ ...原物件 } 或 [ ...原陣列 ]
   - 重要：可以在複製的同時覆寫特定屬性
   - 範例：
     const obj1 = { a: 1, b: 2 };
     const obj2 = { ...obj1, b: 3 };  // { a: 1, b: 3 }

4. 不可變性 (Immutability)
   - 原則：不修改原始資料，而是創建新的資料
   - 優點：
     * 避免副作用（side effects）
     * 容易追蹤資料變化
     * 方便實作復原功能
     * 在 React 等框架中是最佳實踐
   - 本題要求「原有 products 不得被改變」就是在強調不可變性

5. Method Chaining（方法鏈）
   - 將多個方法串接在一起
   - 範例：
     products
       .filter(p => p.stock < 10)
       .map(p => p.name)
   - 優點：程式碼簡潔、易讀

*/
