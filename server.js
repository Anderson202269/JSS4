consthttp= require('http');
constservidor=http.createServer(function (req,resp) {resp.end(`
        <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1> Ultima School </h1>
            </body> 
        </html>
    `);
});servidor.listen(3000);