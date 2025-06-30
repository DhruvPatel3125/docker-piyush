#Base Image
FROM node:20-alpine

WORKDIR /home/app/

# Install curl using Alpine's package manager
COPY package*.json .
RUN npm install

#Coping the source code to docker image
COPY index.js index.js

COPY Dockerfile Dockerfile

EXPOSE 8000

CMD ["node","index.js"]