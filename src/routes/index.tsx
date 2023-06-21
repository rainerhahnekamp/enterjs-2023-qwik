import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import { posts } from '~/data/posts'
import { PostPreview } from '~/components/post-preview'

export default component$(() => {
  return (
    <div class="section">
      <div class="container">
        <div class="row">
          {posts.map((post, ix) => (
            <PostPreview post={post} key={ix} />
          ))}
        </div>
      </div>
    </div>
  )
})

export const head: DocumentHead = { title: 'Welcome' }
