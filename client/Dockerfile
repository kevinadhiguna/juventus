# Pull a base image that will be used
FROM node:14-alpine

# Specify a working directory
WORKDIR /client

COPY package.json .
COPY yarn.lock .

# Install dependencies without generating a 'yarn.lock' file
RUN yarn --frozen-lockfile

# Copy all files and directories
COPY . .

# Port Binding
EXPOSE 8000

# Run the app
CMD ["yarn", "start"]
