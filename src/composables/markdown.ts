export const useMarkdown = async (rawMarkdown: string) => {
  if (rawMarkdown == null) {
    return ''
  }
  const markdownIt = (await import('markdown-it')).default
  const md = markdownIt({
    html: true,
    linkify: true,
    typographer: true
  })

  // External links
  md.renderer.rules.link_open = (tokens, idx, options, _env, self) => {
    const token = tokens[idx]
    token.attrPush(['target', '_blank'])
    token.attrPush(['rel', 'noopener noreferrer'])

    try {
      const attr = token.attrs?.find(arr => arr[0] === 'href')
      if (attr) {
        const url = new URL(attr?.[1])
        if (url.searchParams.get('utm_source') !== null) {
          url.searchParams.set('utm_source', 'brownsugar.tw')
          url.searchParams.set('utm_medium', 'Home')
          attr[1] = url.href
        }
      }
    } catch (e) { }

    return self.renderToken(tokens, idx, options)
  }
  // Lazy loading
  const imageRender = md.renderer.rules.image
  if (imageRender !== undefined) {
    md.renderer.rules.image = (tokens, idx, options, env, self) => {
      tokens[idx].attrPush(['loading', 'lazy'])
      return imageRender(tokens, idx, options, env, self)
    }
  }

  return md.render(rawMarkdown)
}
