# Gold Best Buy/Sell Calculator

# Environment vars
This project uses the following environment variables:

| Name                          | Description                         | Default Value                                  |
| ----------------------------- | ------------------------------------| -----------------------------------------------|
|PORT           | Express Server Running Port            | 4000      |
|GOLD_PRICE_BASE_URL           | Base URL for Gold Price API            | http://api.nbp.pl/api/cenyzlota/      |


# Pre-requisites
- Install [Node.js](https://nodejs.org/en/) version 16+


# Getting started
- Insatll dependencies
```
npm install
```
- Run production script
```
npm run production
```

  Navigate to `http://localhost:4000/api/v1/calculate/maxProfit`



## Getting Started with Dockerfile

Login to Docker.
```
docker login
```

Build Docker Image.
```
docker build . -t nbp-api-task
```
Run Docker Image in a container.
```
docker run -p 4000:4000 -d nbp-api-task
```
Navigate to `http://localhost:4000/api/v1/calculate/maxProfit`


# Common Issues

## docker run fails
Make sure port 4000 is not utilized on any other process

