##################
# BUILD FOR LOCAL DEVELOPMENT
##################

FROM node:21-alpine As development

WORKDIR /usr/src/app

COPY --chown=node:node package*.json ./
COPY --chown=node:node yarn.lock ./

RUN yarn install --frozen-lockfile;

USER node

#######x############
# BUILD FOR PRODUCTION
###################

FROM node:21-alpine As build

WORKDIR /usr/src/app

COPY --chown=node:node --from=development /usr/src/app/node_modules ./node_modules
COPY --chown=node:node . .

ENV NODE_ENV production

RUN yarn build
RUN yarn cache clean --all

USER node

###################
# PRODUCTION
###################

FROM node:21-alpine As production

RUN mkdir .next
RUN chown node:node .next

COPY --chown=node:node --from=build /usr/src/app/public ./public
COPY --chown=node:node --from=build /usr/src/app/.next/standalone ./
COPY --chown=node:node --from=build /usr/src/app/.next/standalone ./
COPY --chown=node:node --from=build /usr/src/app/.next/static ./.next/static

ENV PORT 80

CMD ["node", "server.js" ]