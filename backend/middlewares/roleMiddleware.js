// middleware/roleMiddleware.js

const roleMiddleware = (roles) => {
  return (req, res, next) => {
    // Agar user ka role allowed list me nahi hai
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        message: "Access Denied. You do not have permission to perform this action.",
      });
    }

    // Agar allowed hai, toh aage badho
    next();
  };
};

// ✅ Important: export sirf function ko karo, object ke andar nahi
module.exports = roleMiddleware;
