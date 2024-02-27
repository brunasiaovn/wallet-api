import bcrypt from "bcrypt";
import authRepository from "../repositories/authRepository.js"

async function signup(body) {
    const hasPassword = bcrypt.hashSync(body.password, 10);

    const userExists = await authRepository.findByEmail(body.email);
    if (userExists) throw new Error("user already exists! ");

    return await authRepository.create({ ...body, password: hasPassword });
}

async function signin(body) {
    const userExists = await authRepository.findByEmail(body.email);
    if (!userExists) throw new Error("Email your password incorrect");
    
    const passwordOk = bcrypt.compareSync(body.password, userExists.password);
    if (!passwordOk) throw new Error("Email your password incorrect");


    return authRepository.generateToken(userExists._id); 
}

export default {
    signup,
    signin,
};