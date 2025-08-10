# DataSol

This project is a platform for crowdsourcing data labeling tasks. It consists of a backend, a user-facing frontend for creating tasks, and a worker-facing frontend for completing tasks.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

*   [Node.js](https://nodejs.org/) (v18 or later)
*   [npm](https://www.npmjs.com/)
*   A [Supabase](https://supabase.com/) account

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/datasol.git
    cd datasol
    ```

2.  **Install backend dependencies:**

    ```bash
    cd backend
    npm install
    cd ..
    ```

3.  **Install user-frontend dependencies:**

    ```bash
    cd user-frontend
    npm install
    cd ..
    ```

4.  **Install worker-frontend dependencies:**

    ```bash
    cd worker-frontend
    npm install
    cd ..
    ```

### Configuration

1.  **Set up Supabase:**

    *   Create a new project on [Supabase](https://supabase.com/).
    *   In your Supabase project, create a new storage bucket named `task-images`.
    *   Get your project's URL, anon key, and service role key from the API settings.

2.  **Configure the backend:**

    *   In the `backend` directory, create a `.env` file by copying the `.env.example` file.
    *   Update the `.env` file with your Supabase credentials:

        ```
        RPC_URL=https://api.devnet.solana.com
        JWT_SECRET=your_jwt_secret_here

        # Supabase
        DATABASE_URL=postgresql://postgres:[YOUR-PASSWORD]@db.[YOUR-PROJECT-ID].supabase.co:5432/postgres
        SUPABASE_URL=your_supabase_url_here
        SUPABASE_ANON_KEY=your_supabase_anon_key_here
        SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key_here
        ```

    *   Run the following command to create the database tables:

        ```bash
        npx prisma db push
        ```

3.  **Configure the user-frontend:**

    *   In the `user-frontend` directory, create a `.env.local` file by copying the `.env.example` file.
    *   Update the `.env.local` file with your Supabase credentials:

        ```
        NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
        NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
        ```

### Running the Application

1.  **Start the backend:**

    ```bash
    cd backend
    npm run dev
    ```

    The backend will be running on `http://localhost:3000`.

2.  **Start the user-frontend:**

    ```bash
    cd user-frontend
    npm run dev
    ```

    The user frontend will be running on `http://localhost:8000`.

3.  **Start the worker-frontend:**

    ```bash
    cd worker-frontend
    npm run dev
    ```

    The worker frontend will be running on `http://localhost:5000`.

## Documentation

- [Architecture Overview](docs/architecture.md)
