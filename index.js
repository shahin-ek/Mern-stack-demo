const express = require('express');
const app =express()

app.get('/',(req,res)=>
res.send('<h1>Hello World</h1>')
)

app.get('/about',(req,res)=>
res.send('<h1>About Page</h1>')
)
app.use((req,res)=>
res.send('<h1>404 Not Found</h1>')
)

app.listen(3000,()=>
console.log('express server is running on port 3000')
)