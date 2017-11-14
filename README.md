### stackoverflow-47210046

This is just another boilerplate example on publishing a package written in TypeScript.
The corresponding stackoverflow.com question can be found [here](https://stackoverflow.com/questions/47210046/how-to-publish-a-component-written-in-typescript-consumable-as-a-global-commonj).

### Some remarks
 - Make sure you have added `"dom"` to the libraries in the `tsconfig.json` to include them during the compilation.
 - Add `"main": "lib/index"` to the `package.json`. You can see, it points to the compiled output and has no file extension.
 - Adde "typings": "lib/index" to the `package.json`.
 - Although the `lib` output folder is not added to version control, that will be available on npmjs.org.
 - The tests will be executed with `ts-node` so the `tsc` compilation can be omitted.
 - If you want to run your test in watch mode, execute `npm run test -- -w`.