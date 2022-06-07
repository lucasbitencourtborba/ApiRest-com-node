import http from 'http'

const port = 8080
const rotas = {
    '/': 'Curso de node',
    '/livros': 'biblioteca de livros',
    'autores': 'Lista de autores',
    '/Editora': 'Editores',
    '/sobre': 'Pagina de info'
}

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end(rotas[req.url])
})

server.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`)                
})