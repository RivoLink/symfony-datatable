## Symfony Datatable

### New symfony project
```sh
symfony composer create-project symfony/skeleton symfony-datatable ^6.3
cd symfony-datatable
```

### Webpack dependencies
```sh
symfony composer require symfony/webapp-pack
symfony composer require symfony/webpack-encore-bundle
```

### Yarn install and dependencies
```sh
yarn install

yarn add jquery bootstrap @popperjs/core
yarn add sass-loader sass --dev
yarn add vue@2
yarn add sass-loader
yarn add vue-loader@15
yarn add postcss-loader
yarn add postcss-preset-env
yarn add @vue/babel-helper-vue-jsx-merge-props
yarn add @vue/babel-preset-jsx
yarn add path
yarn add moment
yarn add classnames
```

### Start server
```sh
symfony serve --port=8787
symfony open:local
```

### Access to user datatable
```sh
https://127.0.0.1:8787/liste-des-clients
```


