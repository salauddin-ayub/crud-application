import React, { useRef } from 'react';
import './AddUser.css';

const AddUser = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const rankRef = useRef();
    const catRef = useRef();

    const handleAddUser = e =>{
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const rank = rankRef.current.value;
        const cat = catRef.current.value;

        const newUser = {name, email, rank, cat};
        fetch('http://localhost:5000/users', {
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
        .then(res=> res.json())
        .then(data =>{
            if (data.insertedId){
                alert('User added Successfully.')
                e.target.reset();
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
                                <form onSubmit={handleAddUser} class="myForm text-center"action="">
                                    <header>Please Add a player with Information</header>
                                    <div class="form-group">
                                        <input class="myInput" type="text" placeholder="Username" ref={nameRef} />
                                    </div>
                                    <div class="form-group">
                                        <input class="myInput" type="text" placeholder="Email" ref={emailRef} />
                                    </div>
                                    <div class="form-group">
                                        <input class="myInput" type="text" placeholder="Rank" ref={rankRef} />
                                    </div>
                                    <div class="form-group">
                                        <input class="myInput" type="text" placeholder="Category" ref={catRef} />
                                    </div>
                                    <div class="col-md-12">                                      
                                        <input type="submit" class="butt" value="Add" />                                       
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>         
    );
};

export default AddUser;