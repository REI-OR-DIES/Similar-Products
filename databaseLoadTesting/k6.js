import { sleep } from 'k6';
import http from 'k6/http';

export const options = {
  vus: 200,
  duration: '2s',
  gracefulStop: '3s'
}

export default function() {
  http.get('http://localhost:3004/products');
}

