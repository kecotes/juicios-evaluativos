import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { Provider } from 'react-redux'
import { store } from './store'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // El Provider me va a permitir que desde cualquier parte de mi aplicación se pueda
  // leer la store y mandar acciones a la store para que genere nuevos estados

  // La store es una caja donde vamos a guardar cosas, la aplicación guarda muchas cosas
  // productos, servicios, usarios, por lo tanto voy a querer que mi app sea organizada y
  // para ello voy a organizar mi caja en slides.
  <Provider store={store}>
    <App />
  </Provider>,
)
