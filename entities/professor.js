export default function professor({
                                      firstName,
                                      lastName,
                                      idNumber,
                                      password,
                                      email,
                                      phone,
                                      faculty,
                                      fieldOfStudy,
                                      rank
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
        getRank: () => rank
    };
}
