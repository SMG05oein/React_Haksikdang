// const { createProxyMiddleware } = require('http-proxy-middleware');
//
// module.exports = function(app) {
//     app.use(
//         '/api', //api링크로 get요청이 있을 때는 뭘 해주겠다.
//         createProxyMiddleware({
//             target: 'http://localhost:8080',	// 서버 URL or localhost:설정한포트번호 보통 스프링 부트 실행하면 8080포트
//             changeOrigin: true,
//         })
//     );
// };