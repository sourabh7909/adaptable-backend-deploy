const register_auth=(req,res,next)=>{
    const {name,email,password}=req.body
    try {
        if(!name || !email || !password){
            res.status(200).json({msg:"input field required"})
        }else{
            next()
        }
    } catch (error) {
        res.status(400),json({error:error.message})
    }
}
module.exports={register_auth}