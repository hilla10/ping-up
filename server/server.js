import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import { inngest, functions } from './inngest/index.js';
const app = express();
const PORT = process.env.PORT || 3000;

// mongodb connection
await connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// API Routes
app.get('/', (req, res) => {
  res.send('API is Working');
});

// Set up the "/api/inngest" (recommended) routes with the serve handler
app.use('/api/inngest', serve({ client: inngest, functions }));

app.listen(PORT, () =>
  console.log(`Server Running on http://localhost:${PORT}`)
);
