import * as dotenv from "dotenv";
dotenv.config({ path: `${__dirname}/../.env` });

const hello: string = "hello";
const world: string = process.env.hello || "world";

console.log(hello, world);
