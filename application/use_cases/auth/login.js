const loginUser = function ({
                                email,
                                password,
                                role,
                                authService,
                                authRepository
                            }) {

    return authRepository.findUser(email, password, role).then(user => {
        if (user) {

            return {
                user: {
                    firstName: user.firstName,
                    role: user.role,
                    idNumber: user.idNumber,
                }, accessToken: authService.generateToken({role: role, idNumber: user.idNumber})
            }
        }

        return null

    })

}

export default loginUser
