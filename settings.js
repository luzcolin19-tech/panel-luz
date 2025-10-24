const bcrypt = require('bcryptjs');
const path = require('path');

module.exports = {
    // 🔹 Forzar el archivo de flows y la ruta correcta
    flowFile: "flows.json",
    userDir: path.resolve(__dirname),

    // 🔹 Configuración del servidor
    uiPort: process.env.PORT || 1880,
    uiHost: "0.0.0.0",
    httpNodeRoot: "/",
    httpAdminRoot: "/admin",

    // 🔹 Autenticación
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

    // 🔹 Logs
    logging: {
        console: { level: "info", metrics: false, audit: false }
    }
};
