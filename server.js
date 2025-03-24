import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import cors from 'cors';

import fileUpload from 'express-fileupload';
import cloudinary from 'cloudinary';

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(fileUpload({
    useTempFiles: true, // Enables temporary file storage
    tempFileDir: '/tmp/', // Set temporary directory
}));

// Routes
app.use('/api/auth',authRoutes);

app.post('/test', (req, res) => {
    console.log('Request Body:', req.body);
    res.json({ success: true, data: req.body });
});

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT , ()=> console.log(`Server running on PORT ${PORT}`));