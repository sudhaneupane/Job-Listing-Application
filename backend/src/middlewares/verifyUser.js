import jsonwebtoken from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;
  //   console.log(token);

  const extractedToken = token.split(" ")[1];

  //   console.log(extractedToken);

  const decodeToken = jsonwebtoken.verify(
    extractedToken,
    process.env.JWT_SECRET
  );
  //   console.log(decodeToken);
  req.user = decodeToken;

  next();
};
