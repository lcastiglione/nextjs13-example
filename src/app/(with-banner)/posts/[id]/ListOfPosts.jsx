import Link from 'next/link'
import LikeButton from './LikeButton'

// getStaticProps
// return fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())

// getServerSideProps
// return fetch('https://jsonplaceholder.typicode.com/posts',{cache:'no-store}).then(res => res.json())

// incrementalStaticRegeneration
const fetchPosts = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts', { next: { revalidate: 5 } })
    .then(res => res.json())
}

export async function ListOfPostsPage () {
  const posts = await fetchPosts()

  return posts.map(post => (
    <article key={post.id}>
      <Link href={`/posts/${post.id}`}>
        <h2 style={{ color: '#09f' }}>{post.title}</h2>
      </Link>
      <p>{post.body}</p>
      <LikeButton id={post.id} />
    </article>
  ))
}
