# Panel Luz - Node-RED Dashboard en Render

Este proyecto contiene un flujo de Node-RED con dashboard en español y tema claro.
El dashboard se mostrará directamente en la raíz del sitio.

## Pasos para desplegar

1. Subir este proyecto a GitHub (ejemplo: repositorio `panel-luz`).
2. Ir a [Render.com](https://render.com) y crear un **Web Service**.
3. Conectar tu repositorio `panel-luz`.
4. Configurar:
   - Branch: main
   - Environment: Node
   - Build Command: npm install
   - Start Command: npm start
5. Render instalará Node-RED y levantará el dashboard en:
```
https://panel-luz.onrender.com
```

¡Listo! Tu dashboard estará accesible desde cualquier navegador.
