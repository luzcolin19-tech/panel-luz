const bcrypt = require('bcryptjs');

module.exports = {
    // Dashboard en la raíz
    ui: {
        path: "/"
    },

    // Puerto asignado por Render
    uiPort: process.env.PORT || 1880,

    // Editor protegido en /admin
    httpAdminRoot: "/admin",

    // Endpoints HTTP opcionales (si usas nodos HTTP)
    httpNodeRoot: "/api",

    // Autenticación para editor
    adminAuth: {
        type: "credentials",
        users: [{
            username: "admin",
            // Contraseña encriptada: "123456" → cambia si quieres otra
            password: bcrypt.hashSync("123456", 8),
            permissions: "*"
        }]
    },

    // Opciones de tema del editor
    editorTheme: {
        page: {
            title: "Dashboard Node-RED" // Título visible en navegador
        },
        projects: {
            enabled: false // Desactiva proyectos para mayor seguridad
        }
    },

    // Logging opcional
    logging: {
        console: {
            level: "info",
            metrics: false,
            audit: false
        }
    }
};
