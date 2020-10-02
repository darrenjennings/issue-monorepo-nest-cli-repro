# Reproduction

1. create new monorepo nest app

```sh
nest new monorepo-repro-build
cd monorepo-repro-build
yarn nest generate app new-one
yarn nest generate lib my-lib
# > specify @lib
```

2. update nest-cli.json:
   1. `webpack: false`
3. update tsconfig.json to have `@apps/` path
4. run `yarn build`
5. run `yarn start:dev new-one` <-- runs correctly
6. run `yarn start:prod` <-- only runs monorepo-repro-build
7. update `new-one/src/main.ts` to include file from monorepo-repro-build
   1. code currently commented out in this repo. Uncomment to see issue
  
Questions:

1. How to start prod of `new-one` consistently? If the uncommented code is add (Step 7) then, `yarn start:dev new-one` fails because `main.js` has been moved
2. How to start:dev of any service consistently?

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

  Nest is [MIT licensed](LICENSE).
