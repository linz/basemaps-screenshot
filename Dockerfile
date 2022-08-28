FROM mcr.microsoft.com/playwright:v1.25.1-focal

ENV NODE_ENV=PRODUCTION

WORKDIR /app/

# Install the landing assets
COPY ./package.json /app/
COPY ./yarn.lock /app/

RUN yarn install --production

ADD ./build /app/build

ENTRYPOINT [ "node", "./build/src/bin.js" ]
