# Webpack and rollup comparison

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


### Sources
[1] https://github.com/webpack/webpack/issues/2933