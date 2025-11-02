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

// 定義函式 getLowStock(products)，參數為商品陣列
function getLowStock(products) {
  // 使用 const 宣告空陣列 lowStockNames，用於存放庫存低的商品名稱
  // 雖然陣列本身不能被重新賦值，但可以使用 push() 增加內容
  const lowStockNames = []; 
    
  // *** 核心簡化：使用 for...of 迴圈 ***
  // 這是一個「遍歷值」的迴圈，相比傳統 for 迴圈更簡潔易讀。
  //
  // 語法：for (const product of products)
  // - products：您要遍歷的目標陣列。
  // - product：在每一次迴圈中，它都會被賦予 products 陣列中的「下一個元素的值」。
  //
  // 運作：迴圈會依序取出 products 陣列中的每一個物件，並將其賦值給 product 變數。
  for (const product of products) {
    
    // 判斷當前這個 product 物件的 stock 屬性是否少於 10
    if (product.stock < 10) {
      
      // 如果條件成立，將這個 product 物件的 name 屬性（即商品名稱）
      // 加入到 lowStockNames 陣列中
      lowStockNames.push(product.name);
    }
  }

  // 輸出結果到控制台
  console.log("庫存少於 10 的項目：", lowStockNames);
  // 函式回傳這個結果陣列
  return lowStockNames;
}

// 呼叫函式並將 products 陣列傳入
getLowStock(products); 
// 執行後，會在控制台輸出：庫存少於 10 的項目： [ 'mouse', 'monitor' ]




// ================================================================================================================



// 定義函式 updateStock
function updateStock(products, updates) {
  
  // 1. 建立一個新的空陣列
  const updatedProducts = [];

  // 2. 使用 for...of 迴圈遍歷 products 陣列
  for (const product of products) {
    
    // 3. 取得當前商品的名稱
    const productName = product.name;

    // 4. 從 updates 物件中查找新庫存
    const newStock = updates[productName];

    
    // 5. 判斷是否需要更新庫存
    if (newStock !== undefined) {
      
      // 5a. 如果需要更新：手動創建一個包含新庫存的「新物件」
      const newProduct = {
        name: productName,   
        stock: newStock      
      };
      
      // 將更新後的物件加入結果陣列
      updatedProducts.push(newProduct);
      
    } else {
      
      // 5b. 如果不需要更新：複製原始物件的屬性到一個新物件中
      const newProduct = {
        name: product.name,
        stock: product.stock 
      };
      
      // 將未更新的物件副本加入結果陣列
      updatedProducts.push(newProduct);
    }
  }
  
  // 6. 遍歷更新後的陣列，並印出結果
  // ********** 核心修改：將箭頭函式替換成傳統的匿名函式 **********
  // 傳統函式寫法：function (參數) { 程式碼區塊 }
  updatedProducts.forEach(function (product) {
      // 在此函式內部，product 依然代表陣列中的每個元素
      
      // 使用「+」運算子來連接字串和變數，避免使用模板字串 (${})
      console.log(product.name + " 的庫存： " + product.stock);
  });
  // *********************************************************
  
  // 7. 函式回傳更新後的陣列
  return updatedProducts;
}

// 呼叫函式
updateStock(products, updates);






