import http from "k6/http";
import { sleep } from "k6";
import { check } from "k6";

export const option={
    vus: 10,
    duration : '1s',
}

export default function () {
    const url = 'https://espsofttech.org/mrmint/login';
    const payload = JSON.stringify({
        email : 'amit.espsofttech@gmail.com',
        password : 'Espsoft123#',
    });

    const params = {
        Headers:{
            "authToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFtaXQuZXNwc29mdHRlY2hAZ21haWwuY29tIiwiaWQiOjY0NSwiYm5iX2FkZHJlc3MiOiIweDQ1NTM2NjcwMTRENDNGNkMzMDU3ZDJiNmJFRjZCMzQxNmMzYmY4MmUiLCJpYXQiOjE2ODE5ODM5NjcsImV4cCI6MTY4MjA3MDM2N30.MoekE-4pjzObLP_gGBFUkrQh5sq-Dlwv_hVF_55xVdc",
        }
    }

    const response = http.post(url, payload, params);
    check(response,{


        'is status 200' : (r) => r.status ===200,
        'is response body has id' : (r) => r.data.includes('645'),
        'verify homepage text': (r) =>
        r.body.includes('Stay updated with behind the scenes information, and engage your mind with the best content in blockchain.'),
   }

   );
   console.log(response.data, "response")

}