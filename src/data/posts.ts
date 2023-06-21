import { post1Content } from '~/data/content/post-1'

export type Post = {
  id: number
  type: 'article' | 'video' | 'public speaking' | 'open source'
  thumbnail: string
  title: string
  url: string
  content: string
  created: Date
  updated: Date
}

export const posts: Post[] = [
  {
    id: 1,
    type: 'article',
    thumbnail: '',
    title: 'Angular Testing in 2023 - Past, Present, and Future',
    url: 'angular-testing-in-2023-past-present-and-future',
    content: post1Content,
    created: new Date(2023, 0, 1),
    updated: new Date(2023, 0, 1),
  },
  {
    id: 2,
    type: 'article',
    thumbnail: '',
    title: 'GraalVM',
    url: 'graal-vm',
    content: '',
    created: new Date(2023, 0, 1),
    updated: new Date(2023, 0, 1),
  },
  {
    id: 3,
    type: 'open source',
    thumbnail: '',
    title: 'Sheriff - Modularity in TypeScript',
    url: 'sheriff-modularity-in-typescript',
    content: '',
    created: new Date(2023, 0, 1),
    updated: new Date(2023, 0, 1),
  },
  {
    id: 4,
    type: 'public speaking',
    thumbnail: '',
    title: 'EnterJS: Live-Implementierung eines Blogs mit Qwik',
    url: 'live-implementierung-eines-blogs-mit-qwik',
    content: '',
    created: new Date(2023, 0, 1),
    updated: new Date(2023, 0, 1),
  },
  {
    id: 5,
    type: 'article',
    thumbnail: '',
    title: 'Angular 16.1: Klein aber fein',
    url: 'angular-16-1',
    content: '',
    created: new Date(2023, 0, 1),
    updated: new Date(2023, 0, 1),
  },
  {
    id: 6,
    type: 'video',
    thumbnail: '',
    title: 'Angular Testing with inject function',
    url: 'angular-testing-with-inject-function',
    content: '',
    created: new Date(2023, 0, 1),
    updated: new Date(2023, 0, 1),
  },
]
