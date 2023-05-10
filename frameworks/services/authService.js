import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const authServiceImpl =  function () {
    const encryptPassword = (password) => {
        const salt = bcrypt.genSaltSync(10);
        return bcrypt.hashSync(password, salt);
    };

    const compare = (password, hashedPassword) =>
        bcrypt.compareSync(password, hashedPassword);

    const verify = (token) => jwt.verify(token, "secret");

    const generateToken = (payload) =>
        jwt.sign(payload, "secret", {
            expiresIn: 9999999999999
        });

    return {
        encryptPassword,
        compare,
        verify,
        generateToken
    };
}

export default authServiceImpl