FROM node:10.15.3-alpine

WORKDIR /code

RUN rm -rf package-lock.json yarn.lock
RUN npm install yarn && npm install -g yarn
COPY package.json /code/package.json
RUN yarn
RUN mv /code/node_modules /node_modules

COPY . /code
# COPY /node_modules ./client

CMD ["yarn", "start"]
