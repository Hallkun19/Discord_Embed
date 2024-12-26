const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// 静的ファイルの提供
app.use(express.static('public'));

// デフォルトルート
app.get('/', (req, res) => {
  res.send('Hello, World!'); // または適切なHTMLを返す
});

// サーバーの起動
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
