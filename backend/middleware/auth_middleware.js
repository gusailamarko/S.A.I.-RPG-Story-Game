import CustomError from "../errors/custom_error.js";

export async function isLoggedIn(req, res, next) {
    try {
        if(!req.session?.user?.userid) {
            throw new CustomError("User not authenticated", 401); 
        }
        next();
    }
    catch(e) {
        next(e);
    }
}