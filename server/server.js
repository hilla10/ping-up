import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { serve } from 'inngest/express';
import { clerkMiddleware } from '@clerk/express';
import connectDB from './config/db.js';
import { inngest, functions } from './inngest/index.js';
import userRouter from './routes/userRoutes.js';
import postRouter from './routes/postRoutes.js';
import storyRouter from './routes/storyRoutes.js';
import messageRouter from './routes/messageRoutes.js';
const app = express();
const PORT = process.env.PORT || 3000;

// mongodb connection
await connectDB();

// Middleware
app.use(express.json());
app.use(cors());
app.use(clerkMiddleware());

// API Routes
app.get('/', (req, res) => {
  res.send('API is Working');
});

// Set up the "/api/inngest" (recommended) routes with the serve handler
app.use('/api/inngest', serve({ client: inngest, functions }));
app.use('/api/user', userRouter);
app.use('/api/post', postRouter);
app.use('/api/story', storyRouter);
app.use('/api/message', messageRouter);

app.listen(PORT, () =>
  console.log(`Server Running on http://localhost:${PORT}`)
);
