const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const contentRoutes = require('./routes/content');
const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/my-website', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use(express.static('public'));

app.use('/api/auth', authRoutes);
app.use('/api/content', contentRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
