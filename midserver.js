const express=require("express")
const app=express()

const middleware1=(req,res,next)=>
{
    console.log("middleware is working")
    next()
}


app.use(middleware1)
app.get("/",(req,res)=>
{
    res.send("<h1>Hello World</h1>")
})
app.get("/test",(req,res)=>
{
    res.send("<h1>test page</h1>")
})

app.listen(3000,()=>console.log("middleware server running on PORT 3000"))
