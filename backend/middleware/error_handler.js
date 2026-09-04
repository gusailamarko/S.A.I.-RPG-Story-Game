export async function errorHandler(err, req, res, next) {
    const {statusCode = 500, message = "Something went wrong, try again later!"} = err;
    res.status(statusCode).json({message});
};