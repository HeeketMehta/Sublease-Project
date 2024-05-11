FROM node:latest

# RUN mkdir /NodeJs-Backend
# ADD . /NodeJs-Backend
# WORKDIR /NodeJs-Backend
# RUN npm install
# EXPOSE 8001
# CMD ["npm", "start"]



# WORKDIR /NodeJs-Backend

# COPY package.json ./

# RUN npm install

# COPY . .

# EXPOSE 3000

# CMD ["npm","start"]




WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD ["npm","start"]