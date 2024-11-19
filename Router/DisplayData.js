const express = require('express');
const router = express.Router();

router.post('/DisplayData', async (req, res) => {
    try {
        // Ensure global variables are available
        if (!global.foods || !global.Category) {
            return res.status(500).json({ message: 'Server data not initialized' });
        }

        // Send data as JSON
        res.status(200).json([global.foods, global.Category]);
    } catch (error) {
        // Log the error and send a server error response
        console.error('Error in /DisplayData:', error.message);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
