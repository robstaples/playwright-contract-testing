# Playwright contract testing
This is an example testing that shows how we can use Orval and ZOD to compare a swagger file.
this allows for API and contract testing against an advertised spec.

this is an example project for the blog (...)
It extends the code from [playwright api testing with zod](https://timdeschryver.dev/blog/playwright-api-testing-with-zod)

## Installation
Installation is as simple as installing the dependancies.
```bash
npm install
```

## Usage
now run the codegen command and you will see an axios and zod schema generated.

```bash
npm run codegen

```

you can then run the tests to see the schema matching in action.
```bash
npm run test

```
## License

[MIT](https://choosealicense.com/licenses/mit/)