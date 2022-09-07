const get = async (url: string) => {
  const res = await fetch(url)

  return {
    contentType: res.headers.get('Content-Type'),
    contentLength: res.headers.get('Content-Length'),
    status: res.status,
    body: await res.text()
  }
}

export default defineEventHandler(async ({ req, res }) => {
  const query = (new URL(req.url as string, 'https://localhost')).searchParams
  const target = query.get('target')
  if (target === null) {
    return res.writeHead(404).end()
  }
  const result = await get(target)
  res
    .writeHead(result.status, {
      'Content-Type': result.contentType as string,
      'Content-Length': result.contentLength as string
    })
    .end(result.body)
})
