import { check } from 'k6';
import http from 'k6/http';

export const options = {
  scenarios: {
    my_scenario1: {
      executor: 'constant-arrival-rate',
      duration: '30s', // total duration
      preAllocatedVUs: 1, // to allocate runtime resources

      rate: 1, // number of constant iterations given `timeUnit`
      timeUnit: '1s',
    },
  },
};

export default function () {
  const payload = JSON.stringify({
        email : 'amit.espsofttech@gmail.com',
        password : 'Espsoft123#',
  });
  const headers = { 'Content-Type': 'application/json' };
  const res = http.post('https://espsofttech.org/mrmint/login', payload, { headers });

  check(res, {

    'Post status is 200': (r) => res.status === 200,
    'Post Content-Type header': (r) => res.headers['Content-Type'] === 'application/json',
    'Post response name': (r) => res.status === 200 && res.json().json.email === 'amit.espsofttech@gmail.com',
  });

}