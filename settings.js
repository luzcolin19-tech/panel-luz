const bcrypt = require('bcryptjs');

module.exports = {
    // 🔹 Usa el puerto que Render asigne
    uiPort: process.env.PORT || 1880,
    uiHost: "0.0.0.0",

    // 🔹 Directorio del usuario (donde está flows.json)
    userDir: "./",

    // 🔹 Rutas principales
    httpNodeRoot: "/",
    httpAdminRoot: "/admin",

    // 🔹 Autenticación del editor
    adminAuth: {
        type: "credentials",
        users: [{
            username: "admin",
            password: bcrypt.hashSync("123456", 8), // puedes cambiarla si quieres
            permissions: "*"
        }]
    },

    // 🔹 Tema del editor
    editorTheme: {
        page: { title: "Dashboard Node-RED" },
        projects: { enabled: false }
    },

    // 🔹 Logs básicos
    logging: {
        console: {
            level: "info",
            metrics: false,
            audit: false
        }
    }
};