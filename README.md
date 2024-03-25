# Juicios Evaluativos

Esta es una apliación desarrollada para la asignatura Desarrollo de Aplicaciones Web para la especialización desarrollo de software de la Universidad Minuto de Dios

##### Captura de pantalla:

![Pantallazo de la app](https://github.com/kecotes/juicios-evaluativos/blob/92fb0f8d9d2ee60a2c4af0494b3e2593f1a2db77/captura.png)

## Instalación

1. Instalar pnpm en tu compador con el comando `npm install -g pnpm`
2. Instalar depencias `pnpm install`
3. Ejecutar la aplicación `pnpm run dev`


   
## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
