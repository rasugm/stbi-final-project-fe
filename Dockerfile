FROM node:18-alpine
# FROM node:18-alpine

# Set Arguments On Build
ARG ARGS_NODE_BUILD=development

# Set Environment Variable
ENV ARGS_NODE_START=${ARGS_NODE_BUILD}
ENV BABEL_DISABLE_CACHE=1

# Set Working Directory
WORKDIR /usr/src/app

# Change Working User to "root"
USER root

# Copy Node Packages Requirement
COPY package*.json ./

# Copy Env Configuration File
COPY .env ./

# Copy
COPY . .

# Install & Build Node Source Code File
RUN npm i --legacy-peer-deps && npm run build

# Expose Application Port
EXPOSE 8080

# Run The Application
CMD ["npm","run", "preview"]
