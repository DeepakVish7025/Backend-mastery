// creat server using express js
import express from 'express';
import data from './data/data.js';




const app = express();

// middleware to parse json data
app.use(express.json());
// get request : it is used to fetch data from the server
app.get('/', (req, res) =>{
    res.send('Hello World from Express.js');
})


app.get('/about', (req, res) =>{
    res.send('This is the about page');
});

app.get('/contact', (req, res) =>{
    res.send('This is the contact page');
});

app.get('/data', (req, res) =>{
    res.json(data);

})


// query parameters
// app.get('/data', (req, res) =>{
//     // query parameters : es name wale ko khojna hai any tath type of quet parameter 
//     const {name} = req.query;
//     if(name){
//         const user = data.filter((user)=>{
//             return user.name === name ;
//         })
//         res.status(200).send(user);
//     }

//     res.json(data);

// })


// router parameters: kisi bhi id ke basis pe data fetch karna hai
app.get('/data/:id', (req, res) =>
{
    // console.log(req.params);
    // res.send(req.params);
    const {id} = req.params;
    const parsedid = parseInt(id);
    const user = data.find((user)=>  user.id === parsedid  )
    return res.status(200).json(user);
})


// post request : it is used to send data to the server
app.post('/users', (req, res)=>{
    // console.log('Post request received');
    // console.log(req.body);

    // res.send('User data received successfully');
    const {name,age}=req.body;
    const newUser = {
        id: data.length + 1,
        name,
        age
    }
    data.push(newUser);
    res.status(201).json({
        message: 'User created successfully',
        user: newUser
    });
})


// put request : it is used to update data on the server(update all field )
app.put('/data/:id', (req, res) =>{
    const {id} = req.params;
    const parsedid = parseInt(id);
    const {name, age} = req.body;
    const userIndex = data.findIndex((user) => user.id === parsedid);
    if(userIndex === -1){
        return res.status(404).json({message: 'User not found'});
    }

    data[userIndex] = 
    {
        id: parsedid,
        name,
        age

    }
    res.status(200).json({
        message: 'User updated successfully',
        user: data[userIndex]
    }
    )


})



// patch request : it is used to update data on the server(update specific field )
app.patch('/data/:id', (req, res) =>{
    const {id} = req.params;
    const parsedid = parseInt(id);
    const {name, age} = req.body;
    const userIndex = data.findIndex((user) => user.id === parsedid);
    if(userIndex === -1){
        return res.status(404).json({message: 'User not found'});
    }

    data[userIndex] = 
    {
        ...data[userIndex],
        ...req.body

    }
    res.status(200).json({
        message: 'User updated successfully',
        user: data[userIndex]
    }
    )


})


// delete request : it is used to delete data from the server
app.delete('/data/:id', (req, res) =>{
    const {id} = req.params;
    const parsedid = parseInt(id);
    const userIndex = data.findIndex((user) => user.id === parsedid);
    if(userIndex === -1){
     return res.status(404).json({message: 'User not found'});
    }
    data.splice(userIndex, 1);
    res.status(200).json({message: 'User deleted successfully'});
});


app.listen(3000, () => 
{
    console.log('Server is running on http://localhost:3000');
})