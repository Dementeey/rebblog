FROM node:10.15.3-alpine

WORKDIR /code

RUN npm install yarn
COPY package.json /code/package.json
RUN yarn
RUN echo '---first---' && pwd && ls -1
# RUN mv /code/node_modules /node_modules
# RUN echo '---midle---' && pwd && ls -1

COPY . /code

# RUN echo '---last---' && pwd && ls node_modules

# ENTRYPOINT "yarn dev"
# CMD ["yarn", "dev"]
