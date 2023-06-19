const login_auth=(req,res,next)=>{
    const {email,password}=req.body
    try {
        if( !email || !password){
            res.status(200).json({msg:"input field required"})
        }else{
            next()
        }
    } catch (error) {
        res.status(400),json({error:error.message})
    }
}
module.exports={login_auth}