export const options = {
  vus: 1,
  iterations: 1,
}

export default function () {
  // no network access needed
}

export function handleSummary() {
  return {
    'k6-result-env-marker.txt': `marker=${__ENV.MARKER}\n`,
    stdout: 'env-marker summary\n',
  }
}
