# Common build stage
FROM node:20-alpine3.17 as common-build-stage

WORKDIR /app

COPY ./ ./

RUN npm install

EXPOSE 3000

# Dvelopment build stage
FROM common-build-stage as development-build-stage

ENV NODE_ENV development

CMD ["npm", "start"]

# Production build stage
FROM common-build-stage as production-build-stage

ENV NODE_ENV production

CMD ["npm", "run", "build"]