export async function errorHandler(err, req, res, next) {
    console.error(err);
    const {statusCode = 500, message = "Something went wrong, try again later!"} = err;
    res.status(statusCode).json({message});
};