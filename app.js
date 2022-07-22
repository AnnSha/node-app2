
const http = require('http');
const filesys = require('fs');

const myhost = '127.0.0.1';
const port = '3000';

filesys.readFile('index.html', (err, html) => {
    if (err) {
        throw err;
    }


    const server = http.createServer((req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/html');
        res.write(html);
        res.end();
    });
    server.listen(port, myhost, () => {
        console.log('Server started on port ' + port);
    });
});
