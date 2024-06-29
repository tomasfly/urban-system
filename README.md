# News Aggregator

This project is a TypeScript application that reads news from internet newspapers and stores them into a MongoDB database. It consists of several files organized in a specific directory structure.

## Project Structure

```
news-aggregator
├── src
│   ├── config
│   │   └── index.ts
│   ├── models
│   │   └── newsModel.ts
│   ├── services
│   │   └── newsService.ts
│   ├── utils
│   │   └── httpClient.ts
│   └── app.ts
├── test
│   ├── services
│   │   └── newsService.test.ts
│   └── utils
│       └── httpClient.test.ts
├── package.json
├── tsconfig.json
└── README.md
```

## File Descriptions

- `src/config/index.ts`: This file exports a configuration object that contains the MongoDB connection details.

- `src/models/newsModel.ts`: This file exports a class `NewsModel` which represents the schema for storing news articles in the MongoDB database.

- `src/services/newsService.ts`: This file exports a class `NewsService` which provides methods for fetching news articles from internet newspapers and storing them in the MongoDB database. It uses the `httpClient` utility to make HTTP requests.

- `src/utils/httpClient.ts`: This file exports a function `httpClient` which is a utility function for making HTTP requests. It uses the `axios` library to send HTTP requests.

- `src/app.ts`: This file is the entry point of the application. It creates an instance of the `NewsService` class and calls the necessary methods to fetch news articles and store them in the MongoDB database.

- `test/services/newsService.test.ts`: This file contains unit tests for the `NewsService` class. It uses a testing framework like `Jest` to define test cases and assertions.

- `test/utils/httpClient.test.ts`: This file contains unit tests for the `httpClient` utility function. It uses a testing framework like `Jest` to define test cases and assertions.

- `tsconfig.json`: This file is the configuration file for TypeScript. It specifies the compiler options and the files to include in the compilation.

- `package.json`: This file is the configuration file for npm. It lists the dependencies and scripts for the project.

## Getting Started

To run the project, follow these steps:

1. Clone the repository.
2. Install the dependencies using `npm install`.
3. Configure the MongoDB connection details in `src/config/index.ts`.
4. Run the application using `npm start`.

## Testing

To run the unit tests, use the following command:

```
npm test
```

## Dependencies

The project uses the following dependencies:

- `axios`: A library for making HTTP requests.
- `mongodb`: The official MongoDB driver for Node.js.
- `jest`: A testing framework for JavaScript and TypeScript.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more information.