import professor from "../../../entities/professor";

export default function addProfessor({
                                         firstName,
                                         lastName,
                                         idNumber,
                                         password,
                                         email,
                                         phone,
                                         faculty,
                                         fieldOfStudy,
                                         rank,
                                         professorRepository
                                     }) {

    // TODO: add a proper validation (consider using @hapi/joi)

    const newPost = professor({firstName, lastName, idNumber, password, email, phone, faculty, fieldOfStudy, rank});

    return professorRepository.add(newPost);
}
