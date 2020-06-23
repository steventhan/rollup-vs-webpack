# rollup/webpack comparison

### Rollup build
```shell
npm run build:rollup
```

### Webpack build
```shell
npm run build:webpack
```

### Output difference

|        files            |     rollup    |     webpack   | difference|
| ----------------------- | ------------- | ------------- | --------  |
| HelloWorld.js           |    246 bytes  |     4 KB      |    16x    |
| DogBreedList.js         |    3 KB       |     11 KB     |    3x     |
| DogBreed.js             |    337 bytes  |     5 KB      |    15x    |
| DogBreedListWithHook.js |    2 KB       |     9 KB      |    4.5x   |

### Some notes
  * `webpack` has not had support esm output format. It's in the work for `webpack@5` [1]. Would this affect treeshakability?
  * Some theories for large bundle size:
    * Also the reason that impacts transpiled code's readability: `webpack` added a lot of boilerplate code to support module resolution in browser env (e.g. [rollup's HelloWorld.js](dist-rollup/components/HelloWorld.js) vs. [webpack's HelloWorld.js](dist-webpack/components/HelloWorld.js))
    * `webpack` wasn't able to treeshake Babel's helpers with current setup (hmm, can I tweak this?); `rollup` moved them into a shared module ([rollup's _virtual module](dist-rollup/_virtual) vs. [webpack's DogBreedList.js](https://github.com/steventhan/rollup-vs-webpack/blob/master/dist-webpack/components/DogBreedList.js#L113))

  * [Needs investigation] Does `webpack` support bundling static assets for libraries? `rollup` handles this through [smart-asset-plugin](https://github.com/sormy/rollup-plugin-smart-asset). There's a github issue on webpack side about this [3], the options seems to be workaround:
    * Load assets as base-64 string (this would normally increases assets' sizes by 33% and browser can't parallel load nor caches them separately)
    * Let the lib's consumers import the assets themselves ('does not work for images as if the module needs to know where the image is it has already been built with a public path.')


### Interesting reads
[1] [Github issue: support output.libraryTarget: 'module'](https://github.com/webpack/webpack/issues/2933)

[2] [Webpack and Rollup: the same but different](https://medium.com/webpack/webpack-and-rollup-the-same-but-different-a41ad427058c)

[3] [Github issue: How to ship assets (images, fonts) in a NPM package/library bundled by Webpack?](https://github.com/webpack/webpack/issues/7353)
