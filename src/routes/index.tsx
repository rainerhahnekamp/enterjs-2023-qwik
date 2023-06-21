import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import { posts } from '~/data/posts'

export default component$(() => {
  return (
    <div class="section">
      <div class="container">
        <div class="row">
          {posts.map((post, ix) => {
            return (
              <div class="col-md-4" key={ix}>
                <div class="post">
                  <a class="post-img" href="blog-post.html">
                    <img src="./img/post-3.jpg" alt="" />
                  </a>
                  <div class="post-body">
                    <div class="post-meta flex">
                      <a class="post-category cat-1" href="category.html">
                        {post.title}
                      </a>
                      <span class="post-date">
                        {post.created.toLocaleDateString()}
                      </span>
                    </div>
                    <h3 class="post-title">{post.content}</h3>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
})

export const head: DocumentHead = { title: 'Welcome' }
