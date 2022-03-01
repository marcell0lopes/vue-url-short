const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();
const PORT = process.env.PORT;

connectDB();

// Body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Permitir Cross-origin
app.use(cors());

app.use('/', require('./routes/index'));
app.use('/api', require('./routes/urls'));

app.listen(PORT, () => {
  console.log(`Server is running at port :${PORT}`);
});
