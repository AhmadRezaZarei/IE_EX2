const student = function ({
                              firstName,
                              lastName,
                              idNumber,
                              password,
                              email,
                              phone,
                              grade,
                              entranceYear,
                              mean,
                              faculty,
                              fieldOfStudy,
                          }) {
    return {
        getFirstName: () => firstName,
        getLastName: () => lastName,
        getIdNumber: () => idNumber,
        getPassword: () => password,
        getEmail: () => email,
        getPhone: () => phone,
        getFaculty: () => faculty,
        getFieldOfStudy: () => fieldOfStudy,
        getGrade: () => grade,
        getEntranceYear: () => entranceYear,
        getMean: () => mean
    };
}

export default student

//module.exports.professor = professor;