import { Link, routes } from '@redwoodjs/router'
import { Post } from 'types/graphql'

const truncate = (text: string, length: number) => {
  if (text.length < length) return text
  return text.substring(0, length) + '...'
}

interface Props {
  article: Post | null | undefined
  summary?: boolean
}

const Article = ({ article, summary = false }: Props) => {
  if (!article) return <></>

  return (
    <article className="mb-6 last:mb-0">
      <header>
        <h2 className="text-xl text-blue-700 font-semibold">
          <Link to={routes.article({ id: article.id })}>{article.title}</Link>
        </h2>
      </header>
      <div className="mt-2 text-gray-900 font-light">
        {summary ? truncate(article.body, 100) : article.body}
      </div>
      <div className="mt-2 text-gray-600 text-sm italic font-light">
        Posted at: {article.createdAt}
      </div>
    </article>
  )
}

export default Article
