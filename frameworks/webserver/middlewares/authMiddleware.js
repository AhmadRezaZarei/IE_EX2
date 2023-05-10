import authServiceImpl from '../../services/authService.js';
import authServiceInterface from '../../../application/service/authService.js';


export default function authMiddleware(allowedRoles) {

    return function (req, res, next) {

        // Get token from header
        const token = req.header('Authorization');
        const authService = authServiceInterface(authServiceImpl());
        if (!token || token.split(' ')[0] !== 'Bearer') {
            res.status(401).json({"error": "Invalid token", errorCode: 401});
            return;
        }
        try {
            const decoded = authService.verify(token.split(' ')[1]);
            req.role = decoded.role;
            req.idNumber = decoded.idNumber

            if (!allowedRoles.includes(req.role)) {
                res.status(401).json({"error": "Invalid token", errorCode: 401})
                return;
            }

            next();

        } catch (err) {
            res.status(401).json({"error": "Invalid token", errorCode: 401})
        }
    }
}
