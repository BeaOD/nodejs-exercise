const express = require ('express');
const server = express();


//request handling methods
const HandleAllTypesOfRequests = (req,res) => {
    res.send('Response from server.use');
}

const handleProfilePutRequestType = (req,res) =>{
    res.send('Responded to profile request with method of value put')
}

server.post('/profile', HandleAllTypesOfRequests);
server.get('/login',(req,res) => res.send('this is login page'))
server.put('/signup',(req,res) => res.send('sign up here'))

server.patch('/contactus',(req,res) => res.send('contact for customer care here'))

server.put('/profile', handleProfilePutRequestType);

server.listen(3000,() => console.log('server ready'))