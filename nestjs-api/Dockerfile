# Use an official Node.js runtime as the base image
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install application dependencies
RUN npm install 

# Copy the application source code to the working directory
COPY . .

# Expose the port on which the NestJS application will run
EXPOSE 3000

# Start the NestJS application
CMD ["npm", "run", "start:debug"]
