# Use official Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Copy all source files
COPY . .

# Build the Next.js app
RUN npm run build

# Expose port and start app
EXPOSE 3000
CMD ["npm", "start"]