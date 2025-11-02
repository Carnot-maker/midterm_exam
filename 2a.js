//1、引入http模組
const http = require('http');

//2、創建http伺服器
const server = http.createServer(function (request, response) {
  const url = request.url;  //獲取請求位址
  console.log(url)
  var answer = '';  //設置回應內容

  // 請寫 switch完成各個收到不同的請求以及輸出不同的回應字串 (使用 switch)
  
// R 語言的程式碼區塊標記，但在這裡面的程式碼是 JavaScript 語法
// 假設這段程式碼位於 Node.js 伺服器的 request 處理函式內部，
// 且變數 'url' 已經被宣告並取得客戶端請求的實際 URL 字符串。

switch (url) {  // 檢查變數 url (即客戶端請求的 URL) 的值是什麼

    // 條件判斷 1：檢查 url 是否完全等於 '/'
    case '/':
        // 執行動作：如果匹配，將題目要求的回應內容賦值給 answer 變數。
        answer = "index.html 輸出的部分";
        // 關鍵字：中斷 switch 結構，避免程式碼繼續執行到下一個 case。
        break; 

    // 條件判斷 2：檢查 url 是否完全等於 '/calculator'
    case '/calculator':
        // 執行動作：如果匹配，將題目要求的回應內容賦值給 answer 變數。
        answer = "index2.html 輸出的部分";
        // 關鍵字：中斷 switch 結構。
        break;

    // 預設處理：當 url 的值不匹配以上任何一個 case 時，就執行 default 區塊。
    default:
        // 執行動作：處理所有不符合預設路徑的其他請求，回傳錯誤訊息。
        answer = "error.html 輸出的部分";
        // 關鍵字：中斷 switch 結構。
        break; 
}

  response.setHeader('Content-Type', 'text/plain;charset=utf-8'); //設置回應頭編碼為utf-8，避免中文亂碼
  response.end(answer);
});
//3、啟動伺服器監聽8888埠
server.listen('8888', function () {
  console.log("伺服器啟動成功，訪問：http://127.0.0.1:8888")
})