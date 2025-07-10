const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Hello, Secure App It is correctly setup and now pipleine is correctly setup!'));
app.listen(3000, () => console.log('Server on port 3000'));
