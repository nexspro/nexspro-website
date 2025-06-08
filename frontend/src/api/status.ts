export async function checkApiStatus(): Promise<string> {
  try {
    const res = await fetch('/api/v1/status')
    if (!res.ok) throw new Error('API error')
    const json = await res.json()
    return json.status
  } catch (error) {
    return 'Erreur de connexion'
  }
}
