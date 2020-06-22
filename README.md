# Web Framework

TypeScript Web Framework

## Development

1. Install dependencies

  - [denoliver](https://deno.land/x/denoliver)

  ```
  deno install --allow-net --allow-read https://deno.land/x/denoliver/mod.ts
  ```

  - [denon](https://deno.land/x/denon)

  ```
  deno install --allow-read --allow-run --allow-write --allow-net -f --unstable https://deno.land/x/denon@v2.2.0/denon.ts
  ```

  - [json_server](https://deno.land/x/json_server)

  ```
  deno install --allow-read --allow-net -n json-server https://raw.githubusercontent.com/magnattic/json-server/master/server.ts
  ```

2. In separate terminals:
  - `denon build`: build and watch for changes in [/src](./src)
  - `denon serve`: serve [/dist](./dist) on port 8081 and watch for changes
  - `denon db`:  start API development JSON server on port 3000

## Architecture
### Models classes
Handles data. Used to represent e.g Users.
### Views classes
Handle HTML and events caused by user,
## REST API
|Method|Route|Description|
|--|--|
|GET|/users|Retrieve all users|
|GET|/users/:id|Retrieve one user|
|POST|/users|Create one user|
|PUT|/users/:id|Update one user|
