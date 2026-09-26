declare module '*.yaml' {
  const content: import('./content-schema').SiteContent
  export default content
}
