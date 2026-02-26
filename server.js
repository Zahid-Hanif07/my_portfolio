import express from 'express';
import pg from 'pg';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
const { Pool } = pg;
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false,
    },
});

// Test DB Connection and Create Table
pool.connect()
    .then(client => {
        console.log('Connected to Neon DB');
        const createTableQuery = `
      CREATE TABLE IF NOT EXISTS messages (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        message TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;
        return client.query(createTableQuery)
            .then(() => {
                console.log('Messages table ready');
                client.release();
            })
            .catch(err => {
                console.error('Error creating table:', err);
                client.release();
            });
    })
    .catch(err => console.error('Error connecting to Neon DB:', err));

// Routes
app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        const result = await pool.query(
            'INSERT INTO messages (name, email, message) VALUES ($1, $2, $3) RETURNING *',
            [name, email, message]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error('Error saving message:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/', (req, res) => {
    res.send('Portfolio Backend is running');
});

// Export the app for Vercel
export default app;

// Only start the server if running locally (not imported)
if (process.argv[1] === new URL(import.meta.url).pathname) {
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
}
