# Use Node.js as the base image for building the app
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json  ./

# Install dependencies
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm" , "start"]
