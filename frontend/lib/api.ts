export const API_URL = process.env.NEXT_PUBLIC_API_URL || ''

export const TOKEN_KEY = 'juntox_token'

async function throwApiError(response: Response): Promise<never> {
  const text = await response.text()
  try {
    const json = JSON.parse(text)
    throw new Error(json.detail ?? json.message ?? `Erreur ${response.status}`)
  } catch (e) {
    if (e instanceof SyntaxError) throw new Error(text || `Erreur ${response.status}`)
    throw e
  }
}

export async function postJson<T>(path: string, body: unknown): Promise<T> {
  const response = await fetch(`${API_URL}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
  if (!response.ok) await throwApiError(response)
  return response.json() as Promise<T>
}

export async function fetchJson<T>(path: string): Promise<T> {
  const response = await fetch(`${API_URL}${path}`)
  if (!response.ok) await throwApiError(response)
  return response.json() as Promise<T>
}

export async function fetchJsonAuth<T>(path: string): Promise<T> {
  const token = typeof window !== 'undefined' ? window.localStorage.getItem(TOKEN_KEY) : null
  const response = await fetch(`${API_URL}${path}`, {
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  })
  if (!response.ok) await throwApiError(response)
  return response.json() as Promise<T>
}
