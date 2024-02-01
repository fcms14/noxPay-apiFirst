# NoxPay Replica Project
This is a NestJs implementation that replicates the URLs of an API based on the documentation available at [NoxPay API Docs](https://github.com/NoxPay/apidocs/blob/master/apiv2.org).

The primary goal is to simplify the understanding of the documentation and conduct more efficient integration tests with the NoxPay API.

## Features
- **Swagger Integration**: Implementation of Swagger to streamline integration tests and provide an interactive interface for exploring endpoints.

## Configuration
Before getting started, make sure you have Node.js and npm installed on your machine.

1. Clone the repository:
   ```bash
   git clone https://github.com/fcms14/noxPay-apiFirst.git
   cd noxPay-apiFirst
   ```
   
2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure the necessary environment variables in the `.env` file. You can use the `.env.example` file as a reference.

4. Contact NoxPay to obtain your API_KEY.

5. Run the project:
   ```bash
    # development
    $ npm run start

    # watch mode
    $ npm run start:dev

    # production mode
    $ npm run start:prod
   ```

The application will be available at [http://localhost:3000](http://localhost:3000).

You can access the interactive Swagger documentation at [http://localhost:3000/api](http://localhost:3000/api) to explore and test the replicated endpoints.

## License
[MIT](https://choosealicense.com/licenses/mit/)

## Contributing
Contributions are always welcome! If you encounter any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

## References
- [NoxPay Docs](https://github.com/NoxPay/apidocs/blob/master/apiv2.org)
- [NoxPay](https://www.noxpay.co)