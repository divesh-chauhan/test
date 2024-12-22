const http = require('http');
const url = require('url');
const PORT = 3000;

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const {pathname} = parsedUrl;
    const method = req.method;

    if (method === 'GET' && pathname === '/'){
        res.writeHead(200, {'Content-Type':'application/json'});
        res.end(JSON.stringify({msg : 'welcome this is Home Page.'}));
    }

    else if (method === 'GET' && pathname === '/api/profile') {
        res.writeHead(200, {'Content-Type':'application/json'});
        res.end(JSON.stringify({msg : 'this is User Profile Page.'}));
    }

    else if (method === 'GET' && pathname === '/api/about') {
        res.writeHead(200, {'Content-Type':'application/json'});
        res.end(JSON.stringify({msg : 'this is About Page.'}));
    }
    else {
        res.writeHead(404, {'Content-Type':'application/json'});
        res.end(JSON.stringify({msg : 'Server Error ! '}));
    }
  
});

server.listen(PORT, () => console.log(`http://localhost:${PORT}`));