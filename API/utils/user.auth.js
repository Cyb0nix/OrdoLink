//Auth check middleware
const tokenRepo = require('../repositories/tokens.repository');
const userRepo = require('../repositories/user.repository');


module.exports = {

    checkAuth(role){
        return async function(request, response, next){
            try {
                const token = request.get("Authorization");
                const id = await tokenRepo.validateToken(token);
                if (id != null) {
                    const user_id = await userRepo.getUserByToken(id);
                    const user_type = await userRepo.getUserType(user_id);
                    const user_type_id = await userRepo.getUserTypeId(user_id);
                    if (user_type == role || await userRepo.isAdminUser(user_id) 
                    || (role == "all" &&(( user_id == request.params.id)||(user_type_id == request.params.id))) || (role == "admin" && await userRepo.isAdminUser(user_id))){
                        return next();
                    }else{
                        response.status(401).json({error: "Unautorized (bad user level)"});
                    }
                }else {
                    response.status(401).json({error: "invalid token"});
                }
            } catch {
                response.status(400).json({error: "invalid request"});
            }
            
        }
    }

}