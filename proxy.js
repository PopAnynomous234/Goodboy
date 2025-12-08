const express = require('express');
const fetch = require('node-fetch'); // Use fetch or axios for making external requests
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS so your CodeHS client can access the proxy
app.use(cors());

// Define the proxy endpoint
app.get('/fetch', async (req, res) => {
    // 1. Get the target URL from the query parameters (e.g., /fetch?url=https://example.com)
    const targetUrl = req.query.url;

    if (!targetUrl) {
        return res.status(400).send('Error: Missing "url" query parameter.');
    }

    try {
        console.log(`Proxying request for: ${targetUrl}`);
        
        // 2. Fetch the external webpage content
        const response = await fetch(targetUrl, {
            // Optional: Set headers to mimic a normal browser request
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.88 Safari/537.36',
                // Avoid forwarding any headers that might be unique to your server
            }
        });

        // 3. Forward the content type header from the original response
        // This is important for fetching HTML, CSS, images, etc.
        res.setHeader('Content-Type', response.headers.get('content-type') || 'text/html');

        // 4. Send the data back to the client (CodeHS page)
        response.body.pipe(res);
        
    } catch (error) {
        console.error('Proxy Fetch Error:', error);
        res.status(500).send(`Error fetching URL: ${error.message}`);
    }
});

app.listen(PORT, () => {
    console.log(`Proxy server running on port ${PORT}`);
});
