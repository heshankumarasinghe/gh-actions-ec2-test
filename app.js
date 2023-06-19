const express = require('express');

const app = express();

app.get('/api/v1/users', (req, res) => {
    return res.status(200).json({
        status: 'Success',
        message: 'Hello, World!',
        data: null
    });
});

app.listen(8080, '0.0.0.0', () => {
    console.log('App is listening on PORT 8080')
});
