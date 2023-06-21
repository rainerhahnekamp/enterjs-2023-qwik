import { component$ } from '@builder.io/qwik'
import { useLocation } from '@builder.io/qwik-city'
import { posts } from '~/data/posts'

export default component$(() => {
  const location = useLocation()
  const id = Number(location.params.id)
  const post = posts.find((p) => p.id === id)
  return (
    <>
      <h1>{post?.title}</h1>
      <div>{post?.content}</div>
    </>
  )
})