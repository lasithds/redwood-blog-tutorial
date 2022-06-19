import BlogLayout from './BlogLayout'

export const loggedIn = () => {
  mockCurrentUser({ email: 'lasithds@live.com' })

  return <BlogLayout />
}

export const loggedOut = () => {
  return <BlogLayout />
}

export default { title: 'Layouts/BlogLayout' }
