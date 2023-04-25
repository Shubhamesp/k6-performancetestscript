// import http from 'k6/http';

// export default function(){
//     http.get('https://espsofttech.org/mrmint/')
//     http.get('https://espsofttech.org/')
// }   
// import http from 'k6/http';

// export default function () {
//   for (let id = 1; id <= 100; id++) {
//     http.get(`http://example.com/posts/${id}`);
//   }
// }
// tags.name=\"http://example.com/posts/1\",
// tags.name=\"http://example.com/posts/2\",
// import http from 'k6/http';

// export default function () {
//   const res = http.get('http://httpbin.test.k6.io');
//   console.log('Response time was ' + String(res.timings.duration) + ' ms');
// }
import http from 'k6/http';
import { Trend } from 'k6/metrics';

const myTrend = new Trend('waiting_time');

export default function () {
  const r = http.get('https://httpbin.test.k6.io');
  myTrend.add(r.timings.waiting);
  console.log(myTrend.name); // waiting_time
}
