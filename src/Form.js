import React, { useEffect, useState } from 'react'

function Form() {
    const data= {name:"", email:"", password:""}
    const [inputData, setInputdata]= useState(data)
    const [flag, setFlag] = useState(false)
    useEffect(()=>{
        console.log("Registered")
    },[flag])


    function handleData(e){
         setInputdata({...inputData, [e.target.name]:e.target.value})
         console.log(inputData)
    }
    function handleSubmit(e){
        e.preventDefault();
        if(!inputData.name || !inputData.email || !inputData.password){
            alert("All field are Mandatory")
        }
        else{
            setFlag(true)
        }
    }
  return (
    <>
    <pre> {(flag)?<h2 className='ui-define'>Hello {inputData.name}, You are Registered Successfully</h2>:"" }</pre>

    
    <form className="container" onSubmit={handleSubmit}>

        <div className="header">
          <h1> Registration Form </h1>
        </div>

        <div>
            <input type='text' placeholder='Enter your Name' name='name' value={inputData.name} onChange={handleData}></input>
        </div>

        <div>
            <input type='text' placeholder='Enter your Email' name='email' value={inputData.email} onChange={handleData}></input>
        </div>

        <div>
            <input type='text' placeholder='Enter your Password' name='password' value={inputData.password} onChange={handleData}></input>
        </div>
      

        <div>
            <button type='submit'>Submit</button>
        </div>


        </form>
        </>
  )  
}

export default Form