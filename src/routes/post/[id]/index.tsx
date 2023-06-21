import { component$ } from '@builder.io/qwik'
import { useLocation } from '@builder.io/qwik-city'
import { posts } from '~/data/posts'
import { marked } from 'marked'

export default component$(() => {
  const location = useLocation()
  const id = Number(location.params.id)
  const post = posts.find((p) => p.id === id)
  const html = marked.parse(post?.content || '')
  return (
    <>
      <h1>{post?.title}</h1>
      <div dangerouslySetInnerHTML={html}></div>
    </>
  )
})
