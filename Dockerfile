FROM node:20

WORKDIR /app

COPY index.js .

# No npm install (because no package.json)

EXPOSE 3000

CMD ["node", "index.js"]
