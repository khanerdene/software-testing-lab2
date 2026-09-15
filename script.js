import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = { vus: 5, duration: "30s" };

export default function () {
  const res = http.get('https://test.k6.io'); // -> https://quickpizza.grafana.com/
  check(res, { '200 OK': (r) => r.status === 200 });
  sleep(1);
}