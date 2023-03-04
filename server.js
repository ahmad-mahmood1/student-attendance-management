const express = require('express');
const app = express();
const appRoutes = require("./routes")

app.use(express.json());

app.use('/api',appRoutes);

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

