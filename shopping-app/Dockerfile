# Use Node.js as the base image for building the app
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app/

# Copy package.json and package-lock.json to the container
COPY public/ /app/public
COPY scr/ /app/scr
COPY package.json  /app/

# Install dependencies
RUN npm install

# Expose port 80
EXPOSE 80

CMD ["npm", "start"]
