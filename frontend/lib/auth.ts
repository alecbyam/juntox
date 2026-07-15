import { fetchJsonAuth, TOKEN_KEY } from './api'

export const VALID_ROLES = ['admin', 'client', 'employe', 'investisseur', 'consultant', 'partenaire'] as const
export type Role = (typeof VALID_ROLES)[number]

export type CurrentUser = {
  id: number
  email: string
  full_name: string | null
  role: string
  is_active: boolean
}

export function getToken(): string | null {
  if (typeof window === 'undefined') return null
  return window.localStorage.getItem(TOKEN_KEY)
}

export function setToken(token: string) {
  window.localStorage.setItem(TOKEN_KEY, token)
}

export function clearToken() {
  window.localStorage.removeItem(TOKEN_KEY)
}

export function dashboardPathForRole(role: string): string {
  return VALID_ROLES.includes(role as Role) ? `/dashboard/${role}` : '/dashboard/client'
}

export async function fetchCurrentUser(): Promise<CurrentUser> {
  return fetchJsonAuth<CurrentUser>('/api/auth/me')
}

export function logout() {
  clearToken()
  window.location.href = '/auth/login'
}
