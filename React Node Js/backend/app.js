const express=require('express')
const app=express()
const cookieParser=require('cookie-parser')

const port=7000;
const mongoose=require('mongoose')
mongoose.set('strictQuery', true);

require('./connect/connect.js')

app.use(express.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

app.use(cookieParser());
app.use(express.json());


const {getPeoples,sendPeoples,updatePeoples,deletePeople,getPeopleById,logoutPeople,loginPeople}=require('./routes/routes.js')

app.get('/getPeoples',getPeoples)

app.post('/sendPeople',sendPeoples)


app.post('/sendPeople/:_id',updatePeoples)

app.delete('/deletePeople/:_id',deletePeople)

app.post('/login',loginPeople);
app.post('/logout',logoutPeople);

app.get('/getPeople/:_id',getPeopleById);


app.listen((port),async (req,res)=>{
    console.log(`Listening on port:${port}`)
})

