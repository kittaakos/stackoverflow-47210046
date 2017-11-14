### stackoverflow-47210046

This is just another boilerplate example on publishing a package written in TypeScript.
The corresponding stackoverflow.com question can be found [here](https://stackoverflow.com/questions/47210046/how-to-publish-a-component-written-in-typescript-consumable-as-a-global-commonj).

### Quick start
```bash
git clone https://github.com/kittaakos/stackoverflow-47210046.git \
&& cd stackoverflow-47210046 \
&& npm i \
&& npm run build \
&& npm run test
```

### Build
```bash
npm run build
```

### Test
```bash
npm run test
```

### Some remarks
 - Make sure you have added `"dom"` to the libraries in the `tsconfig.json` to include them during the compilation. (This is not required in general, but the question was about consuming [`d3`](https://www.npmjs.com/package/d3) in a boilerplate TS package.)
 - Add `"main": "lib/index"` to the `package.json`. You can see, it points to the compiled output and has no file extension.
 - Adde `"typings": "lib/index"` to the `package.json`.
 - Although the `lib` output folder is not added to version control, that will be available on npmjs.org.
 - The tests will be executed with `ts-node` so the `tsc` compilation can be omitted.
 - If you want to run your test in watch mode, execute `npm run test -- -w`.
 - If you want to run your `tsc` compiler in watch mode, execute `npm run build -- -w`.

### Use the published npm  package
```bash
mkdir tmp-client \
&& cd tmp-client \
&& npm init -y \
&& npm i -D typescript ts-node \
&& npm i -S stackoverflow-47210046 \
&& echo "const MyAwesomeComponent = require('stackoverflow-47210046').MyAwesomeComponent; console.log(new MyAwesomeComponent().render());" > main_js.js \
&& node main_js \
&& echo "import { MyAwesomeComponent } from 'stackoverflow-47210046'; console.log(new MyAwesomeComponent().render());" > main_ts.ts \
&& ./node_modules/.bin/ts-node main_ts.ts
```