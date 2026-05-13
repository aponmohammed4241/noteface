const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        if (!token) return res.status(401).json({ message: "No token, authorization denied" });

        const decodedData = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decodedData?.id; // ইউজারের আইডি রিকোয়েস্টে সেট করে দেওয়া
        next();
    } catch (error) {
        res.status(401).json({ message: "Invalid Token" });
    }
};

module.exports = auth;
