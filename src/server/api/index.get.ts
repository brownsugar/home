const get = async (url: string) => {
  const res = await fetch(url)

  return {
    contentType: res.headers.get('Content-Type'),
    contentLength: res.headers.get('Content-Length'),
    status: res.status,
    body: await res.text(),
  }
}

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const target = query.target

  if (typeof target !== 'string' || target.length === 0) {
    setResponseStatus(event, 404)
    return ''
  }

  const result = await get(target)
  const { public: { server } } = useRuntimeConfig()

  setResponseStatus(event, result.status)
  setResponseHeaders(event, {
    'Access-Control-Allow-Origin': server,
    'Content-Type': result.contentType ?? 'text/plain; charset=utf-8',
  })

  return result.body
})
