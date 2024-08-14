

> NOTE: 

- `docker rmi $(docker images -q)`: Removes all Docker images.

- `docker rmi -f $(docker images -q)`: Forcefully removes all Docker images.

- `docker system prune -a`: Removes all unused images, containers, networks, and volumes.

- `docker compose down --rmi all`: Cleans up images related to a Docker Compose project.

- `docker image prune -a`: Removes all unused images (dangling or not).


## Volume

- List Volumes: `docker volume ls`

- Remove Specific Volume: `docker volume rm <volume_name>`

- Force Remove Specific Volume: `docker volume rm -f <volume_name>`

- Remove Unused Volumes: `docker volume prune or docker volume prune -f` (for no confirmation)

- Remove All Volumes: `docker volume rm $(docker volume ls -q)` (only if no volumes are in use)

- Remove Volumes in Docker Compose: `docker-compose down -v`
