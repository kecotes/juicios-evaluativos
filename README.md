# Juicios Evaluativos

Esta es una apliación desarrollada para la asignatura Desarrollo de Aplicaciones Web para la especialización desarrollo de software de la Universidad Minuto de Dios

##### Captura de pantalla:

[<span>![</span><span>Captura de pantalla de app juicios evaluativos</span><span>]</span><span>(</span><span>https://raw.githubusercontent.com/parzibyte/WaterPy/master/assets/ImagenV1.png</span><span>)</span>](https://github.com/kecotes/juicios-evaluativos/blob/bdbfe9e4d649ab02a7cd0b7bb96558a1edaa977f/captura.png)


- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

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
