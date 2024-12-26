const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// テンプレートエンジンを設定
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// 静的ファイルの提供
app.use(express.static(path.join(__dirname, 'public')));

// 動画埋め込み用のルート
app.get('/:id', (req, res) => {
    const videoUrl = decodeURIComponent(req.params.id); // 動画URLをエンコードしてURLとして使う
    res.render('embed', { videoUrl });
});

// サーバーを起動
app.listen(PORT, () => {
    console.log(`サーバーが起動しました: http://localhost:${PORT}`);
});
