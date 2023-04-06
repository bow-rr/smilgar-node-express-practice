// npm - global command, comes with node
// npm -- version

// npm dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo install -g <packageName> (mac)

// package.json - manifest file(清单文件, stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)



// console.log(global);

const http = require("http");
// console.log(http);

const os = require("os");
// console.log(os);

const path = require("path");
// console.log(path);

const fs = require("fs");
// console.log(fs);


const server = http.Server((req,res)=>{
//     console.log(req)  
//     res.write('Hello, this is my page')
//     res.end ()
// })
//  console.log(server);
if (req.url === '/') {
    res.end('Welcome to our home page');
    return;
} else if (req.url === '/about') {
    res.end('Here is our short history');
    return;
} else {
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
    `)
    }
});

server.listen(5001);
