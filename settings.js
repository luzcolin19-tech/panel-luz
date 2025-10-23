const bcrypt = require('bcryptjs');

module.exports = {
    uiPort: process.env.PORT || 1880,
    uiHost: "0.0.0.0",

    httpAdminRoot: "/admin",
    httpNodeRoot: "/api",

    adminAuth: {
        type: "credentials",
        users: [{
            username: "admin",
            password: bcrypt.hashSync("123456", 8),
            permissions: "*"
        }]
    },

    editorTheme: {
        page: { title: "Dashboard Node-RED" },
        projects: { enabled: false }
    },

    logging: {
        console: {
            level: "info",
            metrics: false,
            audit: false
        }
    }
};

