import jwt from "jsonwebtoken";

const getAcccessToken = async (userId) => {
  return await jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || "15m",
  });
};

const getRefreshToken = async (userId) => {
  return await jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || "7d",
  });
};

export { getAcccessToken, getRefreshToken };
