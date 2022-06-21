import type { ArticleQuery, ArticleQueryVariables } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import Article from 'src/components/Article'

export const QUERY = gql`
  query ArticleQuery($id: Int!) {
    article: post(id: $id) {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps<ArticleQueryVariables>) => (
  <div className="bg-red-600">
    Error: {error?.message ?? 'Failed to load atricle!'}
  </div>
)

export const Success = ({ article }: CellSuccessProps<ArticleQuery>) => {
  return <Article article={article} />
}
