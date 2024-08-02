/** @type {import('next').NextConfig} */
export default {
    webpackDevMiddleware: (config) => {
        config.watchOptions = {
            poll: 1000, // Verifica alterações a cada segundo
            aggregateTimeout: 300, // Aguarda 300ms após a última alteração
        };
        return config;
    },
};
