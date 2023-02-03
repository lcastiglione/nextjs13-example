import Image from 'next/image'

const fetchComments = async (id) => {
  // await new Promise(resolve => setTimeout(resolve, 1000))

  // throw new Error('Error al cargar los comentarios')
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, { next: { revalidate: 5 } })
    .then(res => res.json())
}

export default async function CommentPage ({ params }) {
  const { id } = params
  const comments = await fetchComments(id)

  return (
    <ul style={{ background: '#444', fontSize: '12px' }}>
      {comments.map(comment => (
        <li key={comment.id}>
          <Image
            width='50'
            height='50'
            alt={comment.name}
            src={`https://api.dicebear.com/4.x/pixel-art/svg?seed=${comment.id}`}
          />
          <h4 style={{ color: '#09f' }}>{comment.name}</h4>
          <small>{comment.body}</small>
        </li>
      ))}
    </ul>
  )
}
