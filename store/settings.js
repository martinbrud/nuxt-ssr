export const state = () => ({
    apiBaseUrl: process.env.NODE_ENV == 'production' ? 'https://api.musikvaerketry.dk:446' : 'http://localhost:8080'
})