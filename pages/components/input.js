import { useState } from "react"
import Link from "next/link";
import First from "./template1";

import Router from "next/router";

export default function Input(){
    let [data,setData] = useState({
        fname:"",
        role:"",
        address:"",
        city:"",
        mobile:"",
        gmail:"",
        skills:"",
        education:"",

        internship:"",
        intership_date:"",
        intership_date_end:"",
        email:"",
        projects:"",

    })
    
    // let {fname} = data

    
    console.log(data);
     function changeData(e){


        setData({...data,[e.target.name]:e.target.value})
        
    // console.log(data);
        
    }
    console.log(Router);
    function send(){
        Router.push({
            pathname:"/components/template1",
            query:data
        })
       
    }



    return(
        <>
                <div className="heading">enter your details</div>

            <div className=" flex">
                <div className="di center">
                    <label htmlFor="fname">full name</label>
                    <div >
                    <input className="fname inp margin-10" id="fname" name="fname" onChange ={changeData}/>
                </div> 
                </div>   

                <div className="di center">
                
                <label htmlFor="role" >role</label>
                <div >

                <input className="role inp margin-10" id="role" name="role" onChange ={changeData}/>
                </div>

                </div>
                    
                <div  className="di center">
                <label htmlFor="address"> address</label>
                <div>

                <input className="address inp margin-10" id="address" name="address" onChange ={changeData}/>
                </div>
                </div>
                

                <div className="di center">
                <label htmlFor="city">city</label>
                <div>

                <input className="city inp margin-10" id="city" name="city" onChange ={changeData}/>
                </div>
                </div>

                <div className="di center">
                <label htmlFor="mobile">mobile</label>
                <div>

                <input className="mobile inp margin-10" id="mobile" type="tel"name="mobile" onChange ={changeData}/>
                </div>
                </div>

                
                <div className="di center">
                <label htmlFor="gmail">Email</label>
                <div>
                
                <input className="gmail inp margin-10" id="gmail"  name="gmail" type = "email" onChange ={changeData}/>
                </div>
                </div>

                
                

                <div className="di center">
                                
               <label htmlFor="education">education</label>
               <div>
                
                <input className="education inp margin-10" id="education"  name="education"onChange ={changeData}/>
                </div>
                </div>

                
                <div className="di center">
                <label htmlFor="internship">internship</label>
                <div>

                <input className="internship inp margin-10" id="internship" name="internship" type= "date" onChange ={changeData}/>
                </div>
                </div>

                
                <div className="di center">
                <label htmlFor="intership_date">intership start date </label>
                <div>

                <input className="intership-date inp margin-10" id="intership_date"  name="intership_date" type="date" onChange ={changeData}/>
                </div>
                </div>

                
                
                {/* <div className="di center">
                <label htmlFor="email">email</label>
                <div>

                <input className="email inp margin-10" id="email" name="email" onChange ={changeData}/>
                </div>
                </div> */}

                
                <div className="di center">
                <label htmlFor="skills">skills</label>
                <div>

                <textarea className="skill margin-10" id="skills"  name="skills" rows = "4" cols ="32" onChange ={changeData}/>
                </div>
                </div>
                

                <div className="di center mt-20 mt-50">
                <label htmlFor="projects">projects</label>
                <div>
                
                <input className="projects inp margin-10" id="projects" name="projects" onChange ={changeData}/>
                </div>
                </div>

                <div className="mt-50">
                
                    <a onClick={()=>{ console.log(data.skills.length);if(data.skills.length > 0){
                        send()
                    }}}>template1</a>

                    {/* <button onClick={()=><First/>}>template1</button> */}
                    {/* <First/> */}

                </div>
                
                {/* <label htmlFor="fname">fullname</label>
                <input className="fname" id="fname"/> */}

            </div>           
        </>
    )
}
