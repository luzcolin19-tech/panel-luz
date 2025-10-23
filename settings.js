const bcrypt = require('bcryptjs');

module.exports = {
    // 🔹 Usa el puerto que Render asigne
    uiPort: process.env.PORT || 1880,
    uiHost: "0.0.0.0",

    // 🔹 Rutas
    httpNodeRoot: "/",       // API y nodes HTTP
    httpAdminRoot: "/admin", // Editor
    ui: {
        path: "/ui"          // Dashboard UI
    },

    // 🔹 Autenticación para el editor
    adminAuth: {
        type: "credentials",
        users: [{
            username: "admin",
            password: bcrypt.hashSync("123456", 8), 
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


