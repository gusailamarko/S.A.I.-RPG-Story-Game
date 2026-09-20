import bcrypt from 'bcrypt';
import { getUserByUsername, getUserByEmail, registerNewUser, getLoggedInUserData } from '../db/queries/user_queries.js';
import CustomError from '../errors/custom_error.js';

export async function login(req, res, next) {
    const {email, password} = req.body;
    
    try {
        const user = await getUserByEmail(email.toLowerCase());
        if(!user) throw new CustomError("No user with this email address!", 404);

        const match = await bcrypt.compare(password, user.password);
        if(!match) throw new CustomError("Incorrect password!", 401);

        req.session.user = {userid: user.userid, role: user.role};
        
        const { password: _, ...safeUser } = user; //Strip password before sending -> not shown/sent anywhere
        res.status(200).json(safeUser);
    }
    catch (e) {
        next(e);
    }
};

export async function register(req, res, next) {
    const {username, email, password} = req.body;

    try
    {
        const usernameMatch = await getUserByUsername(username)
        if(usernameMatch) throw new CustomError("Username already exists!", 409);

        const emailMatch = await getUserByEmail(email.toLowerCase());
        if(emailMatch) throw new CustomError("Email already exists", 409);

        const hashedPw = await bcrypt.hash(password, 12);
        const newUser = await registerNewUser(username, email.toLowerCase(), hashedPw);

        req.session.user = {userid: newUser.userid};

        res.status(201).json(newUser);
    }
    catch (e) {
        next(e);
    }
};

export async function getMe(req, res, next) {
    try {
        const loggedInUserData = await getLoggedInUserData(req.session.user.userid);
        if(!loggedInUserData) throw new CustomError("User not found!", 404);

        res.status(200).json(loggedInUserData);
    }
    catch(e) {
        next(e);
    }
};