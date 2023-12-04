# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install any needed packages specified in package.json
RUN npm install

# Copy the rest of the application code to the working directory
COPY metro.js ./
COPY server.js ./
# Expose the port that your app will run on
EXPOSE 3000

# Define the command to run your application
CMD ["node", "server.js"]
