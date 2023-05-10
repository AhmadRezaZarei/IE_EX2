const manager = function ({
                              firstName,
                              lastName,
                              idNumber,
                              password,
                              email,
                              phone,
                              faculty
                          }) {
    return {
        getFirstName: () => firstName,
        getLastName: () => lastName,
        getIdNumber: () => idNumber,
        getPassword: () => password,
        getEmail: () => email,
        getPhone: () => phone,
        getFaculty: () => faculty
    };
}
export default manager
