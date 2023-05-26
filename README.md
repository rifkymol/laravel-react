# Laravel React

Login and CRUD Laravel Application with React. 

## Installation

1. **Clone the repository:**

   ```bash
   git clone git@github.com:rifkymol/laravel-react.git
   ```

2. **Install dependencies:**

   ```bash
   composer install
   ```

3. **Set up environment variables:**

   - Create a copy of the `.env.example` file and rename it to `.env`.
   - Open the `.env` file and update the necessary configuration settings, such as the database connection details.

4. **Create the database:**

   - Create a new database for the project in your database management system.
   - Note down the database name, username, and password for the next step.

5. **Run migrations and seed the database:**

   ```bash
   php artisan migrate --seed
   ```

   This command will create the necessary database tables and seed the database with initial data.

## React Frontend Setup

1. **Navigate to the React frontend folder:**

   ```bash
   cd react
   ```

   Replace `folder-name` with the name of the folder where your React frontend is located.

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

   This command will start the development server for the React frontend. You should now be able to access the application in your browser at the specified URL.

## Additional Information

For more information and advanced usage of the project, refer to the project documentation or any additional guidelines provided.

## Troubleshooting

If you encounter any issues during the setup or running of the project, please check the project documentation for troubleshooting steps or reach out to the project maintainers for support.

---

Congratulations! You have successfully set up the Laravel-react project and can now start working on it. Enjoy coding!
