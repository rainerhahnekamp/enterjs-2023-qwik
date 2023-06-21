import { component$ } from '@builder.io/qwik'
import type { Post } from '~/data/posts'

export type PostPreviewProps = { post: Post }

export const PostPreview = component$(({ post }: PostPreviewProps) => {
  return (
    <div class="col-md-4">
      <div class="post">
        <a class="post-img" href={'/post/' + post.id}>
          <img src="./img/post-3.jpg" alt="" />
        </a>
        <div class="post-body">
          <div class="post-meta">
            <a class="post-category cat-1" href={'/post/' + post.id}>
              {post.title}
            </a>
            <span class="post-date">{post.created.toLocaleDateString()}</span>
          </div>
          <h3 class="post-title">{post.content}</h3>
        </div>
      </div>
    </div>
  )
})
