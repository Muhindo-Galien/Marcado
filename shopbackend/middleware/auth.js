const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("./catchAsyncErrors");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

exports.isAuthenticatedUser = catchAsyncErrors(async(req,res,next)=>{
    const {token} = req.cookies;
    if(!token){
        return next(new ErrorHandler("Please login to access this resources",401));
    }
    const decodedData = jwt.verify(token,process.env.JWT_SECRET);
     next();
    req.user = await User.findById(decodedData.id);
});

exports.authorizeRoles = (...roles) => {
    
     return async(req, res, next) => {
         const {token} = req.cookies;
        const decodedData = jwt.verify(token,process.env.JWT_SECRET);
        req.user = await User.findById(decodedData.id);
    if (!roles.includes(req.user.role)) {

      return next(
        new ErrorHandler(
          `Role: ${req.user.role} is not allowed to access this resouce `,
          403
        )
      );
    }

    next();
  };
};