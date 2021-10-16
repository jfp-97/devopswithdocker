# Part 1

##### 1.1. Getting started

The output for `docker ps -a` with one container running and two stopped is:

```
CONTAINER ID   IMAGE     COMMAND                  CREATED          STATUS                      PORTS     NAMES
c3506c399d6f   nginx     "/docker-entrypoint.…"   54 seconds ago   Exited (0) 27 seconds ago             blissful_ardinghelli
f0813829c132   nginx     "/docker-entrypoint.…"   57 seconds ago   Exited (0) 27 seconds ago             brave_rhodes
b40fdbbc86e5   nginx     "/docker-entrypoint.…"   58 seconds ago   Up 57 seconds               80/tcp    gallant_pare
```

##### 1.2. Cleanup

After cleaning all images and containers from docker, the output from `docker ps -a` is:

```
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES
```

And the output from `docker images` is:

```
REPOSITORY   TAG       IMAGE ID   CREATED   SIZE
```
