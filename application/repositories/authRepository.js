const authRepository = function (repository) {

    const findUser = (email, password, role) => repository.findUser(email, password, role);

    return {
        findUser
    }
}

export default authRepository
