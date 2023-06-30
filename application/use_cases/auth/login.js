const loginUser = function ({
                                email,
                                password,
                                role,
                                authService,
                                authRepository
                            }) {

    return authRepository.findUser(email, password, role).then(user => {
        console.log("fetched user" , user)
        if (user) {
            return authService.generateToken({role: role, idNumber: user.idNumber})
        }

        return null

    })

}

export default loginUser
