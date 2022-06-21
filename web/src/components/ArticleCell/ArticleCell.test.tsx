import { render, screen } from '@redwoodjs/testing/web'
import { Loading, Empty, Failure, Success } from './ArticleCell'
import { standard } from './ArticleCell.mock'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//        https://redwoodjs.com/docs/testing#testing-cells
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('ArticleCell', () => {
  it('renders Loading successfully', () => {
    const renderedComponent = render(<Loading />)
    expect(renderedComponent).toMatchSnapshot()
    expect(() => renderedComponent).not.toThrow()
  })

  it('renders Empty successfully', async () => {
    const renderedComponent = render(<Empty />)
    expect(renderedComponent).toMatchSnapshot()
    expect(() => renderedComponent).not.toThrow()
  })

  it('renders Failure successfully', async () => {
    const renderedComponent = render(<Failure error={new Error('Oh no')} />)
    expect(renderedComponent).toMatchSnapshot()
    expect(() => renderedComponent).not.toThrow()
  })

  // When you're ready to test the actual output of your component render
  // you could test that, for example, certain text is present:
  //
  // 1. import { screen } from '@redwoodjs/testing/web'
  // 2. Add test: expect(screen.getByText('Hello, world')).toBeInTheDocument()

  it('renders Success successfully', async () => {
    const renderedComponent = render(<Success article={standard().article} />)
    expect(renderedComponent).toMatchSnapshot()
    expect(() => renderedComponent).not.toThrow()
  })
})
