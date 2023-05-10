import loginUser from "../../application/use_cases/auth/login.js";

const authController = function (
    authServiceImpl,
    authServiceInterface,
    authDbRepository,
    authDbRepositoryImpl
) {

    const internalServerError = {error: "Unknown error", errorCode: 500}
    const authRepository = authDbRepository(authDbRepositoryImpl())
    const authService = authServiceInterface(authServiceImpl())

    const login = (req, res, next) => {

        const {
            email,
            password,
            role,
        } = req.body


        loginUser({email, password, role, authService, authRepository}).then(token => {

            if (token == null) {
                res.status(401).json({error: "Invalid email or password", errorCode: 401})
            } else {
                res.json({error: null, errorCode: 0, token: token})
            }

        }).catch(err => {
            res.status(500).json({error: err})
        })
    }

    return {
        login
    }

}


export default authController;
