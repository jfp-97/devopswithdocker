FROM ubuntu:18.04

WORKDIR /usr/src/app

COPY curl.sh .

RUN chmod +x curl.sh && apt-get update && apt-get upgrade && apt-get install curl -y

CMD ./curl.sh
