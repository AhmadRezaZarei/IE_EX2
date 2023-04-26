const itManager = function ({
                              firstName,
                              lastName,
                              idNumber,
                              password,
                              email,
                              phone
                          }) {
    return {
        getFirstName: () => firstName,
        getLastName: () => lastName,
        getIdNumber: () => idNumber,
        getPassword: () => password,
        getEmail: () => email,
        getPhone: () => phone
    };
}

export default itManager

//module.exports.professor = professor;