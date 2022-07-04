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
    tokens[idx].attrPush(['target', '_blank'])
    tokens[idx].attrPush(['rel', 'noopener noreferrer'])
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
