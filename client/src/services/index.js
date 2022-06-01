const api = {
    origin: (process.env.NODE_ENV === 'development') ? 'http://localhost:8080/' : '/',
    root: (process.env.NODE_ENV === 'development') ? 'http://localhost:8080/' : '/',
}


export default api
