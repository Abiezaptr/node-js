const http = require("http");
const url = require("url");

const server = http.createServer((request, response) => {
    const parsedUrl = url.parse(request.url, true);
    const path = parsedUrl.pathname;
    const method = request.method;

    // Jika metode adalah GET dan endpoint adalah "/data"
    if (method === "GET" && path === "/data") {
        // Mengirim respon "Hello World"
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.end('Hello World\n');
    } else {
        // Jika endpoint tidak sesuai
        response.writeHead(404, {'Content-Type': 'text/plain'});
        response.end('Not Found\n');
    }
});

// Mendengarkan pada port tertentu
const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
    console.log(`Server running at http://127.0.0.1:${PORT}/`);
});
