import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 1,
  iterations: 1,
};

export default function () {
  // Simple test that doesn't make any real HTTP requests
  sleep(0.1);
}
