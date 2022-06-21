import { render, screen } from '@redwoodjs/testing/web'

import Article from './Article'
import { standard } from './Article.mock'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Article', () => {
  it('renders successfully', () => {
    const article = standard()

    const renderedComponent = render(<Article article={article} />)

    expect(renderedComponent).toMatchSnapshot()
    expect(screen.getByText(article.title)).toBeInTheDocument()
    expect(screen.getByText(article.body)).toBeInTheDocument()
  })
})
