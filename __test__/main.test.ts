import { hello } from '../src/app'

describe('Hello!', () => {
  const name = 'Yoon Sang Seok'

  test('hello 테스트', () => {
    expect(hello).toBeDefined()
    const greeter = hello(name)
    expect(greeter).toBe('Hello, Yoon Sang Seok :)')
  })
})
