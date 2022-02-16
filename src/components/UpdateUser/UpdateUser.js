import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './UpdateUser.css';


const UpdateUser = () => {
    const [user, setUser] = useState({});
    const { id } = useParams();

    useEffect(()=>{
        const url = `http://localhost:5000/users/${id}`;
        fetch(url)
        .then(res=>res.json())
        .then(data =>setUser(data));
    }, []);
    
    const handleNameChange = e =>{
        const updatedName = e.target.value;
        const updatedUser = { name: updatedName, email: user.email, rank:user.rank, cat:user.cat };
        setUser(updatedUser);
    }

    const handleEmailChange = e =>{
        const updatedEmail = e.target.value;
        const updatedUser = { name: user.name, email: updatedEmail, rank:user.rank, cat:user.cat };
        setUser(updatedUser);
    }

    const handleRankChange = e =>{
        const updatedRank = e.target.value;
        const updatedUser = { name: user.name, email: user.email, rank:updatedRank, cat:user.cat };
        setUser(updatedUser);
    }

    const handleCatChange = e =>{
        const updatedCat = e.target.value;
        const updatedUser = { name: user.name, email: user.email, rank:user.rank, cat:updatedCat };
        setUser(updatedUser);
    }

    const handleUpdateUser = e =>{
        const url = `http://localhost:5000/users/${id}`;
        fetch(url, {
            method:'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data =>{
            if (data.modifiedCount > 0) {
                alert('Updated Successfully');
                setUser({});
            }
        })
        e.preventDefault();
    }

    return (
        <div class="container">
                <div class="myCard">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="myLeftCtn">
                                <form onSubmit={handleUpdateUser} class="myForm text-center"action="">
                                    <header>Update Player: {user.name}</header>
                                    <div class="form-group">
                                        <input class="myInput" type="text" placeholder="Username" onChange={handleNameChange} value={user.name || ''} />
                                    </div>
                                    <div class="form-group">
                                        <input class="myInput" type="text" placeholder="Email" onChange={handleEmailChange} value={user.email || ''} />
                                    </div>
                                    <div class="form-group">
                                        <input class="myInput" type="text" placeholder="Rank" onChange={handleRankChange} value={user.rank || ''} />
                                    </div>
                                    <div class="form-group">
                                        <input class="myInput" type="text" placeholder="Category" onChange={handleCatChange} value={user.cat || ''} />
                                    </div>
                                    <div class="col-md-12">                                      
                                        <input type="submit" class="butt" value="Update" />                                       
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>         
        // <div>
        //     <h2>Update: {user.name}</h2>
        //     <p><small>{id}</small></p>
        //     <form onSubmit={handleUpdateUser}>
        //         <input type="text" onChange={handleNameChange} value={user.name || ''}/>
        //         <input type="email" onChange={handleEmailChange} value={user.email || ''} />
        //         <input type="text" onChange={handleRankChange} value={user.rank}/>
        //         <input type="text" onChange={handleCatChange} value={user.cat}/>
        //         <input type="submit" value="update" />
        //     </form>
        // </div>
    );
};

export default UpdateUser;