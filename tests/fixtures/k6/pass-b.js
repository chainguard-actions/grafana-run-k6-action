export const options = {
  vus: 1,
  iterations: 1,
}

export default function () {
  // no network access needed
}

export function handleSummary() {
  return {
    'k6-result-pass-b.txt': 'ran pass-b\n',
    stdout: 'pass-b summary\n',
  }
}
