const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// public 디렉토리 내의 파일을 정적 파일로 제공
app.use(express.static('docs'));

app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행중입니다.`);
});
