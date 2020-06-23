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

|        files        |     rollup    |     webpack   | difference|
| ------------------- | ------------- | ------------- | --------  |
| HelloWorld.js       |    246 bytes  |     4 KB      |    16x    |
| DogBreedList.js     |    3 KB       |     11 KB     |    3x     |
| DogBreed.js         |    337 bytes  |     5 KB      |    15x    |
| DogBreedWithHook.js |    2 KB       |     9 KB      |    4.5x   |

### Some notes
  * Webpack has not had support esm output format. It's in the work for webpack@5 [1]. Would this affect treeshakability?
  * Some explanations for large bundle size I found online:
    * webpack added a lot of boilerplate code to support module resolution in browser env (e.g. [rollup's HelloWorld](dist-rollup/components/HelloWorld.js) vs. [webpack's HelloWorld](dist-webpack/components/HelloWorld.js))



### Interesting reads
[1] [Github issue: support output.libraryTarget: 'module'](https://github.com/webpack/webpack/issues/2933)
[2] [Webpack and Rollup: the same but different](https://medium.com/webpack/webpack-and-rollup-the-same-but-different-a41ad427058c)
