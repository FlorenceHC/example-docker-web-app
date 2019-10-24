# Example docker web app

Web application built with Node.js, Express and Docker, Docker Compose.

## Usage

- Clone this repository

  ```sh
  git clone git@github.com:FlorenceHC/example-docker-web-app
  cd example-docker-web-app
  ```

- Run cluster in dev environment

  ```sh
  docker-compose up
  ```

  By default application in dev environment listens at `http://localhost:8080`

- Check cluster status

  ```sh
  docker-compose ps
  ```

- View logs

  ```sh
  docker-compose logs
  ```

  Optional `-f` flag, which follows newly generated logs, otherwise command will just print log and exit.
  Optional `--tail <number>` flag, which will print last <number> of lines.

- Tear down dev cluster

  ```sh
  docker-compose down
  ```

## Build

- Build deployable image

  ```sh
  docker build -t example-docker-web-app .
  ````

- Run built image

  ```sh
  docker run -p 49160:8080 -d <your username>/node-web-app
  ````

  In this example application listens at `http://localhost:49160`

