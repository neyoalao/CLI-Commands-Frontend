# note that wheb you run the build of this application with "docker run -p 80:80 commandsapp" there won;t be an output in the terminal until you go to the page i.e localhost:80
FROM node:14.5.0-alpine As builder

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build --prod

FROM nginx:1.17.1-alpine

COPY --from=builder /usr/src/app/dist/commandsapp/ /usr/share/nginx/html