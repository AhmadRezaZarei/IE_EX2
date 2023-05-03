const manager = function ({
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
export default manager
//module.exports.professor = professor;