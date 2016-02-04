FROM ubuntu

RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_5.x | bash -
RUN apt-get install -y nodejs

RUN mkdir -p /opt/project
WORKDIR /opt/project

COPY package.json /opt/project/
RUN npm install
COPY index.js /opt/project/
CMD ["npm", "start"]
