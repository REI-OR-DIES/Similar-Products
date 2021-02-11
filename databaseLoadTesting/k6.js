import { sleep } from 'k6';
import http from 'k6/http';

export const options = {
  vus: 50,
  stages: [
    { duration: '30s', target: 10 },
    { duration: '30s', target: 20 },
    { duration: '10s', target: 0 },
  ],
}

export default function() {
  http.get('http://localhost:3004/products');
}

