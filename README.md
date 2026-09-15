# To-Do List API

A simple in-memory to-do list REST API built with Node.js and Express, containerized with Docker.


## How to Run

### Option 1: Run locally
1. Clone the repo
   ```
   git clone https://github.com/asadmahmoodd/Devops-Internship-Task.git
   cd Devops-Internship-Task
   ```
2. Install dependencies
   ```
   npm install
   ```
3. Start the server
   ```
   node TodoAPI.js
   ```
4. Server runs at `http://localhost:3108`

### Option 2: Run with Docker
1. Build the image
   ```
   docker build -t todo-api .
   ```
2. Run the container
   ```
   docker run -p 3108:3108 todo-api
   ```
3. Server runs at `http://localhost:3108`

## Testing the API
You can test any endpoint using **curl** (examples below each endpoint) or **Postman**:
1. Set the method (GET / POST / PATCH / DELETE) using the dropdown next to the URL bar
2. Enter the URL (e.g. `http://localhost:3108/tasks`)
3. For POST requests: go to the **Body** tab → select **raw** → choose **JSON** from the dropdown → enter the JSON body
4. Click **Send**

## Endpoints

### `POST /tasks`
Creates a new task.
- Body: `{ "title": "buy milk" }`
- Response: the created task object, including its generated `id` and `done: false`

**curl:**
```
curl -X POST http://localhost:3108/tasks -H "Content-Type: application/json" -d "{\"title\": \"buy milk\"}"
```

### `GET /tasks`
Returns the full list of tasks currently stored in memory.

**curl:**
```
curl http://localhost:3108/tasks
```

### `PATCH /tasks/:id`
Marks the task with the given `id` as done.
- Response: the updated task, or a 404 if no task with that id exists

**curl** (example marks task with id 1 as done):
```
curl -X PATCH http://localhost:3108/tasks/1
```

### `DELETE /tasks/:id`
Deletes the task with the given `id`.
- Response: a success message, or a 404 if no task with that id exists

**curl** (example deletes task with id 1):
```
curl -X DELETE http://localhost:3108/tasks/1
```

## Reflection

**Trickiest part:**
The trickiest part was that one of my routes was hanging whenever i sent a request for marking the task done and there were no tasks in the array i first suspected that i have written a for loop that might be running infinitely but then i realized that i didnt send a response back if the id wasnt found thats why the postman just kept waiting also i changed the for loop with the find function of array also i wasnt sending the proper response code back like 404 if id was not found i also fixed it and i ensured that all the routes were sending a reponse back.

**Why I made these choices:**
I chose to build with Node.js because it was simple choice and i have used node before so i was comfortable with node.js also i initially used for loop for searching in the array of tasks but later switched to builtin functions with it  the code looks more concise and more readable and for the docker image i chose node:22 since i was using node version 22 locally and alpine for better size optimization of the image and in the first step i copied over the package json files to install dependencies and then copy over my js code it will help to speed the build time if there are code changes but dependencies stay the same.

**What I'd improve with another day:**
With more time i would add a frontend so the todo task is usable via a UI and also deploy it on a cloud platform and some features i would add will be checking for duplicate task and also editing the task title then it will be a proper todo list.