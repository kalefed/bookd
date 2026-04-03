# Use the official Node.js image as the base image
FROM node:25-alpine3.22

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

COPY prisma ./prisma
RUN npx prisma generate

# Install the application dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the NestJS application
RUN npm run build

# Expose the application port
EXPOSE 3000

# Command to run the application
# CMD ["node", "dist/main"]
CMD ["npm", "run", "start:dev"] 
# Dev command