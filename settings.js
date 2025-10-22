module.exports = {
    ui: {
        path: "/" // Hace que el dashboard se abra en la raíz
    },
    uiPort: process.env.PORT || 1880, // Render asigna el puerto automáticamente
    // Otras configuraciones opcionales
    logging: {
        console: {
            level: "info",
            metrics: false,
            audit: false
        }
    }
};
