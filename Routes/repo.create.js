const express=require('express')
const { RepoModel } = require('../Models/repo.model')
const { Auth } = require('../MiddleWare/auth.middleware')

const repoRouter=express.Router()

repoRouter.use(Auth)
repoRouter.post("/repo",async(req,res)=>{
    try {
        const repo=new RepoModel(req.body)
       await repo.save()
        res.status(200).json({msg:"new repository created",reponame:req.body})
    } catch (error) {
        res.status(400).json({error:error.message})
    }
})

repoRouter.get("/allrepo",async(req,res)=>{

     try {
        const repo=await RepoModel.find({userID:req.body.userID})
        res.status(200).json({msg:"All_repositories",repo:repo})
     } catch (error) {
        res.status(400).json({error:error.message})
     }
})

module.exports={repoRouter}