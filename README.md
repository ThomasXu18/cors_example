An Exemple for CORS.

## Usage
```bash
# use python built http server simulated client
# this will listen http://0.0.0.0/8000 by default
cd fronted
python3 -m http.server


# use node server simulated server
# this will listen http://localhost:8080
cd backend
yarn install
node server.js
```

+ simple requst
![cors simple request](https://i.imgur.com/hnzMH8F.gif)
+ preflight request
![cors preflight request](https://i.imgur.com/P0KZGeI.gif)
