export const options = {
  vus: 1,
  iterations: 1,
}

export default function () {
  // no network access needed
}

export function handleSummary() {
  return {
    'k6-result-pass-a.txt': 'ran pass-a\n',
    stdout: 'pass-a summary\n',
  }
}
