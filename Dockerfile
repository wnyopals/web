From node:latest AS build-stage

WORKDIR /var/www
COPY . .
WORKDIR ./frontend
ENV REACT_APP_BASE_URL=https://wnyopals.onrender.com/
RUN npm install
RUN npm run build
WORKDIR ../backend
RUN npm install
ENV NODE_ENV=production
EXPOSE 5000
CMD ["npm", "run", "start"]