import type { VercelRequest, VercelResponse } from '@vercel/node'

const CONTEXT_FILES = [
  'goals',
  'decisions',
  'roadmap',
  'team',
  'voice-of-customer',
] as const

async function fetchContextFile(baseUrl: string, file: string): Promise<string> {
  try {
    const res = await fetch(`${baseUrl}/context/${file}.md`, {
      headers: { 'Cache-Control': 'no-cache' },
    })
    if (!res.ok) return ''
    return await res.text()
  } catch {
    return ''
  }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'method not allowed' })
  }

  const apiKey = process.env.SEAM_API_KEY
  if (apiKey) {
    const auth = req.headers.authorization
    const token = auth?.startsWith('Bearer ') ? auth.slice(7) : null
    if (token !== apiKey) {
      return res.status(401).json({ error: 'unauthorized' })
    }
  }

  const baseUrl = process.env.CONTEXT_BASE_URL
  if (!baseUrl) {
    return res.status(503).json({ error: 'CONTEXT_BASE_URL not configured' })
  }

  const context: Record<string, string> = {}

  await Promise.all(
    CONTEXT_FILES.map(async (file) => {
      context[file] = await fetchContextFile(baseUrl, file)
    })
  )

  res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=300')
  return res.status(200).json(context)
}
