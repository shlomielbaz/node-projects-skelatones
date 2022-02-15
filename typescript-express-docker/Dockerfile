FROM node:16-alpine AS BUILDER
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM node:16-alpine AS RUNNER
WORKDIR /app
COPY --from=BUILDER ./app/dist ./dist
COPY package* ./
RUN npm install --production
CMD npm start


