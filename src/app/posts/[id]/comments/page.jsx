const fetchComments = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, { next: { revalidate: 5 } })
    .then(res => res.json())
}

export default async function CommentPage ({ params }) {
  const { id } = params
  const comments = await fetchComments(id)

  return (
    <ul style={{ background:fontSize: '12px' }}>
      {comments.map(comment => (
        <li key={comment.id}>
          <h4 style={{ color: '#09f' }}>{comment.name}</h4>
          <small>{comment.body}</small>
        </li>
      ))}
    </ul>
  )
}
