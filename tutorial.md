1. Creamos el proyecto
2. Instalamos Rome
3. Creamos y acomodamos el componente list
4. Instalamos redux toolkit

## Store y Provider

5. Creamos la store store/index.ts
    - La store es donde guardamos todo
6. Creamos el provider que permitirá ver el estado en toda la app main.tsx
    - El Provider me va a permitir que desde cualquier parte de mi aplicación se pueda
    leer la store y mandar acciones a la store para que genere nuevos estados

    La store es una caja donde vamos a guardar cosas, la aplicación guarda muchas cosas
    productos, servicios, usarios, por lo tanto voy a querer que mi app sea organizada y
    para ello voy a organizar mi caja en slides.

    Un slide es una porción de una piza que organiza bien la piza dentro de la caja qu es el store.

### Slice 

7. Creamos /store/users/slice.ts
    - Los slides solo necesitan un nombre un estado inicial y sus reducers
    - se puede inicializar un estado solo con un array no necesariamente tiene que ser un objeto y en el ejemplo creamos las interfaces de los usuarios y este array. 
    Nuestro estado inicial es un array de objetos

### Reducer
Del slide exportamos los reducer
Para entender los reducer debemos entender que en una vista hacemos una acción, esta acción genera un estado y el estado te devuelve a la vista. Los reducer se activan en el momento en el que se acciona y antes de actualizar el estado

https://redux.js.org/assets/images/one-way-data-flow-04fe46332c1ccb3497ecb04b94e55b97.png

Por ejemplo si queremos borrar un usuario el reducer dice: bueno quieres borrar un usuario, voy a recuperar el usuario y borrarlo.

Los reducers recuperan el estado actual, y con la accion que le ha llegado por medio del dispatch, realiza los calculos y crea un nuevo estado

https://redux.js.org/assets/images/ReduxDataFlowDiagram-49fa8c3968371d9ef6f2a1486bd40a26.gif

8. Leemos la store que creamos, osea el slice. Esto lo hacemos en store/index.ts

9. Nos vamos a ListOfUsers y vamos a leer la store. Logramos leer el estado global usando el useSelector

10. Redux tiene problemas con los tipados por eso salta un error en el componente que no reconoce el tipo de store.

11. por esto creamos un componente especial que me facilite el tipado hook/store.ts y no tener que estar indicando el tipo constantemente a todos los store en mis componentes.
Basicamente ahora ya no usaremos el useSelector, ya que el no sabe que estado tiene, por lo que usaremos el customHook que si sabe el tipo del estado que tiene

12. Creamos nuestro primer Reducer que es eliminar

13. Exportamos la accion de eliminar