FROM ubuntu

RUN apt-get install -y nodejs npm
CMD ["node", "--version"]