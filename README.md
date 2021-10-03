<br />
<!--
<h1 align="center">Juventus</h1>
-->

<div align="center">
  <img src="https://s9.gifyu.com/images/juventus-logo.png" alt="Juventus" height="350px" />
  <br />
  <p>A Juventus players website, Fino Alla Fine 🦓</p>

[![Build With Umi](https://img.shields.io/badge/build%20with-umi-028fe4.svg?style=flat-square)](http://umijs.org/) <br/>

<img alt="Ant Design Pro" src="https://img.shields.io/badge/Ant_Design_Pro-0170FE?style=for-the-badge&logo=ant-design&logoColor=white" /> <img alt="Ant Design" src="https://img.shields.io/badge/-Ant_Design-%230170FE?&style=for-the-badge&logo=ant-design&logoColor=white" /> <img alt="Strapi" src="https://img.shields.io/badge/strapi-2e7eea?style=for-the-badge&logo=strapi&logoColor=white" /> <img alt="GraphQL" src="https://img.shields.io/badge/GraphQl-E10098?style=for-the-badge&logo=graphql&logoColor=white" /> <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" /> <img alt="Apollo GraphQL client" src="https://img.shields.io/badge/-Apollo_GraphQL-311C87?style=for-the-badge&logo=apollo-graphql" />

<img alt="Ant Design Pro - Juventus Dashboard" src="https://s9.gifyu.com/images/324324kjhkjwe232.png" border="0" />

</div>

<!--
## Demo

<div align="center">
  <img alt="Ant Design Pro Strapi Auth - Demo" src="https://s3.gifyu.com/images/antdesignpro-strapi-round.gif" border="0" />
</div>
-->

<br/>

## How to run (`docker-compose`) :

1) Clone this project :
```bash
git clone https://github.com/kevinadhiguna/juventus
```

2) Create a file named `.env` based on the `.env.example` file.

3) Execute :
```bash
docker-compose up
```
or
```bash
# Run in detached mode (run docker containers in the background of your terminal)
docker-compose up -d
```

Then you can visit the websites on :
- http://localhost:8000 (Juventus Players Dashboard where you can see all Juventus players)
- http://localhost:1337 (Management Dashboard where you add, edit, remove players)

However, if you make any changes, please run :
```bash
docker-compose up --build
```
So, docker-compose will build those images again and the changes will be applied.

<br/>

On the other hand, to stop the running containers (apps), press `ctrl + c` keys (only if you started the containers using `docker-compose up`)

If not, please execute :
```bash
docker-compose down
```
the command above is used when you ran containers with : `docker-compose up -d`.

<br/>

[![Visits Badge](https://badges.pufler.dev/visits/kevinadhiguna/juventus)](https://github.com/kevinadhiguna)
