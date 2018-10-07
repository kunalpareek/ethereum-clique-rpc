/**
 * @author Kunal Pareek (kunalp@outlook.in)
 * @desc API Controllers
 */

module.exports = {
    health : (req, res) => {
        res.status(200).json({
            "success": true,
            "data": "healthy"
        });
    }
}