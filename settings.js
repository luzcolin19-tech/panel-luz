const bcrypt = require('bcryptjs');

module.exports = {
    // 🔹 Usa el puerto que Render asigne
    uiPort: process.env.PORT || 1880,
    uiHost: "0.0.0.0",

    // 🔹 Muestra el dashboard en la raíz
    httpNodeRoot: "/",
    httpAdminRoot: "/admin",

    // 🔹 Autenticación para el editor
    adminAuth: {
        type: "credentials",
        users: [{
            username: "admin",
            password: bcrypt.hashSync("123456", 8), // cambia "123456" si quieres
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


