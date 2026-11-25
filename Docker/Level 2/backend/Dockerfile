FROM node

WORKDIR /app

# Copy package files first to leverage Docker layer caching
COPY package*.json  .

RUN npm install

# Copy application source code
COPY . .

# Expose port
EXPOSE 8000

# Exec form MUST use double quotes (""), not single quotes ('')
CMD ["node", "index.js"]
