# Your little notes REST API

It's a NestJs application which have few REST endpoints, which are implementing CRUD operation.

## Table of Contents

- [Installation](#installation)
- [API Endpoints](#api-endpoints)
- [Run Tests](#run-tests)

## Installation

Step-by-step guide on how to install and set up the project on a local development machine.

1. Clone the repository:
   ```
   git clone https://github.com/asya982/Radency-task-3
   ```
2. Change into the project directory:
    ```
    cd your-project
    ```
3. Install dependencies:
    ```
    npm install
    ```
4. Start the development server
    ```
    npm run start:dev
    ```

## API Endpoints

| Query type  | Endpoint     | Action                         |
|-------------|--------------|--------------------------------|
| POST        | /notes       | Create a note object.          |
| DELETE      | /notes/:id   | Remove item.                   |
| PATCH       | /notes/:id   | Edit/Archive/Unarchive item.   |
| GET         | /notes/:id   | Retrieve item by id.           |
| GET         | /notes       | Get all notes.                 |
| GET         | /notes/stats | Get aggregated data statistics |



## Run tests
```
npm test
```
