npm init --yes
npm i -D nodemon
npm i express
npm i socket.io

Añado el script a package.json
"scripts": {
"test": "echo \"Error: no test specified\" && exit 1",
"start": "nodemon servidor.js"
},


npm run start