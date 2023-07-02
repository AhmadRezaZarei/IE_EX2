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


        loginUser({email, password, role, authService, authRepository}).then(result => {
            if (result == null) {
                res.status(401).json({error: "Invalid email or password", errorCode: 401})
            } else {
                console.log("result", result)
                res.json({error: null, errorCode: 0, user: result.user, accessToken: result.accessToken})
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
