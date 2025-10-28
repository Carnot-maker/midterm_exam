// 1、引入http模組 和 fs 模組
const http = require('http');
const fs = require('fs'); 

// 輔助函式：根據檔案副檔名設定正確的 Content-Type
function setContentType(url) {
    if (url.endsWith('.css')) {
        return 'text/css';
    }
    if (url.endsWith('.html')) {
        return 'text/html';
    }
    // 預設為純文字，避免未知的檔案格式
    return 'text/plain'; 
}

// 2、創建http伺服器
const server = http.createServer(function (request, response) {
    const url = request.url; 
    console.log(`收到請求: ${url}`);
    
    let filePath = ''; 
    let contentType = '';

    // --- 擴展後的 SWITCH 語句：處理 HTML 和 CSS 請求 ---
    switch (url) {
        // --- HTML 頁面請求 ---
        case '/':
            filePath = './index.html'; 
            break;
        case '/calculator':  
            filePath = './index2.html'; 
            break;
            
        // --- CSS 檔案請求 ---
        // 瀏覽器在解析 HTML 時會自動發出這些請求
        case '/style.css':  
            filePath = './style.css'; 
            break;
        case '/style2.css':  
            filePath = './style2.css'; 
            break;
        case '/style3.css':  
            filePath = './style3.css'; 
            break;
            
        // --- 處理未定義的路徑 ---
        default:
            // 這裡假設所有其他路徑都導向錯誤頁面
            filePath = './index3.html';  
            break;
    };

    // 根據檔案路徑設定 Content-Type
    contentType = setContentType(filePath);
    response.setHeader('Content-Type', `${contentType};charset=utf-8`);

    // 使用 fs.readFile() 非同步讀取檔案
    fs.readFile(filePath, (err, data) => {
        if (err) {
            console.error(`讀取檔案失敗: ${filePath}`, err);
            
            // 處理找不到檔案的情況
            response.setHeader('Content-Type', 'text/plain;charset=utf-8');
            response.statusCode = 404;
            response.end(`找不到檔案: ${filePath}`);
            return;
        }

        // 讀取成功，將檔案內容 (data) 作為回應內容傳送
        // 注意：這裡移除了 'utf8' 編碼，因為 CSS 通常不需要，並且直接傳遞 Buffer (data) 效率更高。
        response.end(data);
    });
});

// 3、啟動伺服器監聽8888埠
server.listen('8888', function () {
    console.log("伺服器啟動成功，訪問：http://127.0.0.1:8888")
    console.log("請準備以下檔案：index.html, index2.html, index3.html")
    console.log("以及 style.css, style2.css, style3.css")
})