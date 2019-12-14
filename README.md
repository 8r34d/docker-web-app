# docker-web-app

## Descripton

Node.js on Docker

## Build Docker Image

`$ docker build -t 8r34d/node-web-app .`

## Run Docker Image

`$ docker run -p 5001:8080 -d 8r34d/node-web-app`

## Get container ID

`$ docker ps`

## Print app output

`$ docker logs <container id>`

    Running on 0.0.0.0 : 8080

## Test the app

`$ curl -i localhost:5001`

    HTTP/1.1 200 OK
    X-Powered-By: Express
    Content-Type: text/html; charset=utf-8
    Content-Length: 12
    ETag: W/"c-yWh22snTRQezCK9b7MMbANaOYjs"
    Date: Sat, 14 Dec 2019 17:04:36 GMT
    Connection: keep-alive

    Hello 8r34d
