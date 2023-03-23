import { useState } from "react"

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
        email:"",
        skills:"",
        projects:"",

    })
    
     function changeData(e){


        setData({...data,[e.target.name]:e.target.value})
        
    console.log(data);
        
    }

    return(
        <>
            <div className="cont flex">
                <div className="di">
                    <label htmlFor="fname">full name</label>
                    <div >
                    <input className="fname inp" id="fname" name="fname" onChange ={changeData}/>
                </div> 
                </div>   

                <div className="di ">
                
                <label htmlFor="role">role</label>
                <div >

                <input className="role inp" id="role" name="role" onChange ={changeData}/>
                </div>
                </div>
                    
                <div>
                <label htmlFor="address"> address</label>
                <div>

                <input className="address" id="address" name="address" onChange ={changeData}/>
                </div>
                </div>
                

                <div>
                <label htmlFor="city">city</label>
                <div>

                <input className="city" id="city" name="city" onChange ={changeData}/>
                </div>
                </div>

                <div>
                <label htmlFor="mobile">mobile</label>
                <div>

                <input className="mobile" id="mobile" name="mobile" onChange ={changeData}/>
                </div>
                </div>

                
                <div>
                <label htmlFor="gmail">gmail</label>
                <div>
                
                <input className="gmail" id="gmail"  name="gmail"onChange ={changeData}/>
                </div>
                </div>

                
                

                <div>
                                
               <label htmlFor="education">education</label>
               <div>
                
                <input className="education" id="education"  name="education"onChange ={changeData}/>
                </div>
                </div>

                
                <div>
                <label htmlFor="internship">internship</label>
                <div>

                <input className="internship" id="internship" name="internship" onChange ={changeData}/>
                </div>
                </div>

                
                <div>
                <label htmlFor="intership date">intership date</label>
                <div>

                <input className="intership date" id="intership date"  name="intership date"onChange ={changeData}/>
                </div>
                </div>

                
                <div>
                <label htmlFor="email">email</label>
                <div>

                <input className="email" id="email" name="email" onChange ={changeData}/>
                </div>
                </div>

                
                <div>
                <label htmlFor="skills">skills</label>
                <div>

                <input className="skill" id="skills"  name="skills"onChange ={changeData}/>
                </div>
                </div>
                

                <div>
                <label htmlFor="projects">projects</label>
                <div>
                
                <input className="projects" id="projects" name="projects" onChange ={changeData}/>
                </div>
                </div>
                
                {/* <label htmlFor="fname">fullname</label>
                <input className="fname" id="fname"/> */}

            </div>           
        </>
    )
}