export const API_URL = process.env.NEXT_PUBLIC_API_URL || ''

export async function postJson<T>(path: string, body: unknown): Promise<T> {
  const response = await fetch(`${API_URL}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })

  if (!response.ok) {
    const text = await response.text()
    throw new Error(text || `Erreur ${response.status}`)
  }

  return response.json() as Promise<T>
}

export async function fetchJson<T>(path: string): Promise<T> {
  const response = await fetch(`${API_URL}${path}`)

  if (!response.ok) {
    const text = await response.text()
    throw new Error(text || `Erreur ${response.status}`)
  }

  return response.json() as Promise<T>
}
