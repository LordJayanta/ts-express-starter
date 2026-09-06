import 'dotenv/config.js'
import express from "express";
import { isProduction, port } from "./shared/config/index.ts";
import rootRouter from "./routes/index.ts";
import cors from 'cors';

const app = express();

// Middleware
app.use(cors()); // Allows your mobile app to talk to this server
app.use(express.json({ limit: '10mb' })); // Allows large JSON payloads (for Base64 images)

// Routes
app.use('/api/', rootRouter)


// listen app on devlopment
if (!isProduction) {
    app.listen(port, () => {
      console.log(`-------------------------------------------------------------------------`);
      console.log(`[server]: Server is running on http://localhost:${port}`);
      console.log(`[server]: Check Server Status at http://localhost:${port}/api/health\n`);
      console.log(`-------------------------------------------------------------------------`);
    });
}

// We export the app so serverless providers (like Vercel) can hook into it later
export default app;