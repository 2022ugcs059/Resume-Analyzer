import express from "express";
import cors    from "cors";
import dotenv  from "dotenv";
import authRoutes   from "./routes/auth.js";
import resumeRoutes from "./routes/resume.js";
import aiRoutes from './routes/aiRoutes.js';
import path from "path";
import { fileURLToPath } from "url";
import { createProxyMiddleware } from 'http-proxy-middleware';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, "../.env") });
console.log(process.env.DATABASE_URL)

const app=express();
app.use(cors()); app.use(express.json());

app.use("/auth",authRoutes);
app.use("/resume",resumeRoutes);
app.use('/ai', aiRoutes);
app.use(
  '/ai',
  createProxyMiddleware({
    target: 'http://localhost:8000',   // FastAPI
    changeOrigin: true,
    pathRewrite: { '^/ai': '/api' }    // /ai → /api
  })
);

app.listen(process.env.PORT||4000,()=>console.log("API ready"));