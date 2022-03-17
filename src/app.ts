import * as dotenv from 'dotenv'

dotenv.config({ path: `${__dirname}/../.env` })

export const hello = (name: string) =>
  `${process.env.hello || 'Hello,'} ${name} :)`

const greeter = hello('typescript')

console.log(greeter)
