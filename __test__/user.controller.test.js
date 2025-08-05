const userController = require("../controller/user");
const {User} = require("../model/user");

jest.mock("../model/user",()=>(
    {
        User :  {
            findAll : jest.fn()
        }
    }
))

describe("user controller",()=>{
    let req,res;
    beforeEach(()=>{
        req = {params : {} , body : {}};
        res = {
            status : jest.fn().mockReturnThis(),
            json : jest.fn()
        }
    });

    it("Should return all users",async ()=>{
        const users = [{id : 1 , userName : "A"},{id : 2 , userName : "B"}];
        User.findAll.mockResolvedValue(users);

        await userController.getAllUsers(req,res);

        expect(User.findAll).toHaveBeenCalled();
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(users)
    })
})