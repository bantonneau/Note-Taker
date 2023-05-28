# NoteTaker App

[![License Badge](https://img.shields.io/badge/License-MIT-blue.svg)](https://choosealicense.com/licenses/mit/)

## Description

The NoteTaker App is a web-based application that allows users to create and manage notes. Users can write, save, view, and delete notes using the intuitive user interface. The app uses a server-side API to handle note data, allowing users to access their notes from any device with internet connectivity. The NoteTaker App provides a convenient way to organize and store important information.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Routes](#api-routes)
- [Questions](#questions)
- [Credits](#credits)
- [License](#license)

## Installation

1. Clone the repository or download the project files.
2. Open a terminal or command prompt and navigate to the project directory.
3. Install the project dependencies by running the following command:

```bash
npm install
```

## Usage

You can access the app deployed with herokju at the following link:

https://note-taker-by-ben-antonneau.herokuapp.com/notes

To use the NoteTaker App locally, follow these steps:

1. Open a terminal or command prompt and navigate to the project directory.
2. Start the server by running the following command:

```bash
node server.js
```

3. Open a web browser and enter the following URL:

```plaintext
http://localhost:3001
```

4. The web browser will display the NoteTaker App interface, where you can create, save, view, and delete notes.

## Project Structure

The project consists of the following files and directories:

- `server.js`: This file contains the main logic of the server-side application. It sets up the Express server, defines API routes for handling note data, and serves the HTML and CSS files.

- `public/`: This directory contains the static assets for the NoteTaker App, including HTML, CSS, and client-side JavaScript files.

- `db/`: This directory contains the `db.json` file, which serves as the data storage for the notes. The `db.json` file is initially empty and will be populated with note data as users create and save notes.

## API Routes

The NoteTaker App uses the following API routes for managing note data:

- `GET /api/notes`: Retrieves all saved notes as JSON.

- `POST /api/notes`: Saves a new note. The note data should be sent in the request body as JSON.

- `DELETE /api/notes/:id`: Deletes a note with the specified `id`.

## Questions

If you have any questions or issues, feel free to reach out to me via one of the following channels:

Email: [benantonn@gmail.com](mailto:benantonn@gmail.com)

GitHub: [@bantonneau](https://github.com/bantonneau)

## Credits

This project was developed by Bennett Antonneau. The NoteTaker App leverages the following technologies:

- [Express.js](https://expressjs.com/): A fast, unopinionated, minimalist web framework for Node.js.

- [Node.js](https://nodejs.org/): A JavaScript runtime environment that provides the necessary tools and capabilities to build and run server-side applications.

Special thanks to the contributors of the open-source libraries and frameworks used in this project for their valuable work.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code for personal or commercial purposes.