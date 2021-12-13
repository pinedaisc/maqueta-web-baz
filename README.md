# GSSUPERAPP_WEB

## Scripts

Se generaron los siguientes scripts para inicializar en desarrollo

### `npm run dev`
Ejecuta el siguiente scripT: Inicializa ambas aplicaciones React y Node
`"concurrently --kill-others \"node server.js\" \"react-scripts start\""`

este utiliza la libreria `concurrently` para levantar el servidor node y la aplicacion de react al mismo tiempo, el paramaetro `"proxy"` del package.json, redirige las peticiones al servidor node 


### `npm run startReact`
Ejecuta el siguiente script: Inicializa la aplicacion de React
`"react-scripts start"`

### `npm run startNode`
Ejecuta el siguiente script: Inicializa la aplicacion de Node
`"nodemon server.js"`

