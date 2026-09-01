import jwt from "jsonwebtoken";

const getToken = async (userId) => {
  return await jwt.sign(
    { userId },
    process.env.JWT_SECRET, 
    {
        expiresIn: process.env.JWT_EXPIRES_IN || "7d",
    }
);
};

export default getToken;
