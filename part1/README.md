# Part 1

### 1.1. Getting started

The output for `docker ps -a` with one container running and two stopped is:

```
CONTAINER ID   IMAGE     COMMAND                  CREATED          STATUS                      PORTS     NAMES
c3506c399d6f   nginx     "/docker-entrypoint.…"   54 seconds ago   Exited (0) 27 seconds ago             blissful_ardinghelli
f0813829c132   nginx     "/docker-entrypoint.…"   57 seconds ago   Exited (0) 27 seconds ago             brave_rhodes
b40fdbbc86e5   nginx     "/docker-entrypoint.…"   58 seconds ago   Up 57 seconds               80/tcp    gallant_pare
```

### 1.2. Cleanup

After cleaning all images and containers from docker, the output from `docker ps -a` is:

```
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES
```

And the output from `docker images` is:

```
REPOSITORY   TAG       IMAGE ID   CREATED   SIZE
```


### 1.3. Secret message

Secret message is: 'You can find the source code here: https://github.com/docker-hy'

The commands used to get the message were (the third one is run once within the container's shell):

```
$ docker run -d --name secret_message devopsdockeruh/simple-web-service:ubuntu
$ docker exec -it secret_message bash
root@39366230955b:/usr/src/app# tail -f ./text.log
```

### 1.4. Missing dependencies

The commands used to execute the script are:

```
$ docker run -it --name missing_dependencies ubuntu sh -c 'echo "Input website:"; read website; echo "Searching.."; sleep 1; curl http://$website;'
```

Then, from another terminal:

```
$ docker exec missing_dependencies bash -c 'apt-get update && apt-get upgrade && apt-get install curl -y'
```

Finally, back to the original terminal, we can input `helsinki.fi` and get the exepected output.

### 1.5. Sizes of images

The image which uses Ubuntu has a size of 83 MB, while the one using Alpine has a size of 15.7 MB.

The scret message indeed remains the same.

### 1.6. Hello Docker Hub

After running `docker run -it devopsdockeruh/pull_exercise` and inputting the password `basics`, we get the message:

You found the correct password. Secret message is:
"This is the secret message"

### 1.7. Two line Dockerfile

The contents of the Dockerfile are ([link](./two-line-dockerfile/Dockerfile) to the file in this repo):

```dockerfile
FROM devopsdockeruh/simple-web-service:alpine

CMD server
```

From the directory that contains this Dockerfile, we run:

```
$ docker build . -t web-server
$ docker run web-server
```

### 1.8. Image for script

From the [directory](./image-for-script) that contains our [Dockerfile](./image-for-script/Dockerfile) and [script](./image-for-script/curl.sh), we run:

```
$ docker build . -t curler
$ docker run curler
```

Then we can input `helsinki.fi` and the container works as expected.

### 1.9. Volumes

We can run these commands to have the logs in our filesyste:

```
$ mkdir volumes && touch volumes/text.log
$ docker run -v "$(pwd)/volumes/text.log:/usr/src/app/text.log" devopsdockeruh/simple-web-service
```
