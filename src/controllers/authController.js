import authService from "../services/authService.js";

async function signup(req, res) {
    const body = req.body;
    console.log(body);

    const resService = await authService.signup(body);

    res.send(resService);
}
export default { signup };