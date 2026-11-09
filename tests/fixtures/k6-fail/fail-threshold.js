import { check } from 'k6'

export const options = {
  vus: 1,
  iterations: 1,
  thresholds: {
    checks: ['rate==1'],
  },
}

export default function () {
  check(null, {
    'always fails': () => false,
  })
}

export function handleSummary() {
  return {
    'k6-result-fail-threshold.txt': 'ran fail-threshold\n',
    stdout: 'fail-threshold summary\n',
  }
}
