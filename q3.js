
const products = [
    { name: "keyboard", stock: 25 },
    { name: "mouse", stock: 5 },
    { name: "monitor", stock: 8 },
    { name: "usb cable", stock: 40 }
];

const updates = { 
    mouse: 15, 
    monitor: 20 
};


function updateStock(products, updates) {
    // 使用 map() 遍歷產品，並回傳一個新陣列
    const updatedProducts = products.map(product => {
        const productName = product.name;

        // 判斷 product.name 是否存在於 updates 中
        // 注意：即使不檢查，我們還是需要判斷是否有新的庫存值，
        // 否則 updates[productName] 會是 undefined，這不是我們想要的 stock 值。
        
        // 以下是**最簡化**的版本：如果 updates 中有新值，則更新；否則保持原值。
        // 這實際上仍然是一個檢查，但比 hasOwnProperty 更簡潔：
        const newStock = updates[productName];

        if (newStock !== undefined) {
            // 使用展開運算子 (...) 複製原始物件並覆寫 stock
            return { 
                ...product, 
                stock: newStock 
            };
        } else {
            // 如果 updates 中沒有這個產品，則回傳原始產品的拷貝
            return { ...product }; 
        }
    });

    // 輸出結果
    updatedProducts.forEach(product => {
        console.log(`${product.name} 的庫存： ${product.stock}`);
    });
    
    // 回傳更新後的列表
    return updatedProducts;
}

// 執行函式
updateStock(products, updates);









function updateStock(products, updates) {
    const updatedProducts = products.map(product => 
        {
            const productName = product.name;
            const newStock = updates[productName];
            
            if (newStock !== undefined) {
                return { 
                    ...product, 
                    stock: newStock 
                };
            } else {
                return { ...product }; 
            }
        }
    );


    updatedProducts.forEach(product => {
        console.log(`${product.name} 的庫存： ${product.stock}`);
    });
    return updatedProducts;
}