
# Node version
FROM node:20

# Make work directory
WORKDIR application

# Copy files
COPY package*.json ./
COPY tsconfig.json ./
COPY . ./

# NPM install & build
RUN npm install
RUN npm run build

# POR define
EXPOSE 5000

# Set ENV variables
ENV APP_PORT={APP_PORT}

# Open CMD & execute command
CMD [ "npm", "start"]