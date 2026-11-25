FROM node

WORKDIR /app

# Copy package files first to leverage Docker layer caching
COPY package*.json  .

RUN npm install

# Copy application source code
COPY . .

# Expose the default port
EXPOSE 5173

# Exec form MUST use double quotes (""), and Vite needs --host to accept connections outside container
CMD ["npm", "run", "dev", "--", "--host"]
