import { useState } from "react"
import Link from "next/link";
import First from "./template1";

import Router from "next/router";

import ImageUploading from 'react-images-uploading';

export default function Input(){

    let [image,setImage] = useState("");


   let imageUpload = (e)=>{
        // console.log(e.target.files);
        let elem = e.target.files[0]
        let url = URL.createObjectURL(elem);

        console.log(url);
        setImage(url)
    }

    let [con,setcon] = useState(false)
    let [project,setProject] = useState({
        project_title:"",
        project_description:"",
        project_link:""

    })

    let [projects_list,setProjects_list] = useState([])

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
        
        github_link:"",
        internship_company:"",
        state:"",
        pincode:"",
        image:""
    })
    
    // let {fname} = data

    console.log(data.image);
    // console.log(data);
     function changeData(e){

        console.log(e.target);
        setData({...data,[e.target.name]:e.target.value})

        
    // console.log(data);
        
    }

    let setProjectData = (e)=>{
        // console.log("ak");
        setProject({...project,[e.target.name]:e.target.value})
    }

    let add = ()=>{
        // console.log("a");
        setProjects_list([...projects_list,{...project}])
        setProject({ project_title:"",
        project_description:"",
        project_link:""
    })


        
        // console.log(project);
    }

    // console.log(Router);

    // console.log(projects_list);

    let confirm = ()=>{
        let projectListJson = JSON.stringify(projects_list);
        setData({...data,projectListJson,image})
        setcon(true)
    }


    function send(){
        
        
        console.log(data);
        // stopped here 
        Router.push({
            pathname:"/components/template1",
            // query:{data}
            query:{...data}
        })
       
    }



    return(
        <>
            <div className="inpbg">
                

            <div className="heading text-center">enter your details</div>

            <div className=" flex">
                <div className="di center">
                    <label htmlFor="fname">full name</label>
                    <div >
                    <input className="fname inp margin-10" id="fname" name="fname" onChange ={changeData} />
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

                <input className="address inp margin-10" id="address" name="address" onChange ={changeData} placeholder="ex : A I Karikatt"/>
                </div>
                </div>
                

                <div className="di center">
                <label htmlFor="city">city</label>
                <div>

                <input className="city inp margin-10" id="city" name="city" onChange ={changeData}/>
                </div>
                </div>

                    
                <div  className="di center">
                <label htmlFor="state"> state</label>
                <div>

                <input className="state inp margin-10" id="state" name="state" onChange ={changeData} placeholder="ex :karnataka"/>
                </div>
                </div>

                <div  className="di center">
                <label htmlFor="pincode"> pincode</label>
                <div>

                <input className="pincode inp margin-10" id="pincode" name="pincode" onChange ={changeData} placeholder="ex : 58001"/>
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
                                
               <label htmlFor="github_link">github link</label>
               <div>
                
                <input className="github_link inp margin-10" id="github_link"  name="github_link"onChange ={changeData} placeholder="https://github.com/anilikarikatti"/>
                </div>
                </div>


                <div className="di center">
                <label htmlFor="internship_company">internship_company</label>
                <div>

                <input className="internship_company inp margin-10" id="internship_company" name="internship_company" type= "text" onChange ={changeData}/>
                </div>
                </div>
                
                <div className="di center">
                <label htmlFor="internship">internship start date</label>
                <div>

                <input className="internship inp margin-10" id="internship" name="internship" type= "date" onChange ={changeData}/>
                </div>
                </div>



                
                <div className="di center">
                <label htmlFor="intership_date">intership end date </label>
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

                <textarea className="skill margin-10 rounded-xl px-5 text-black" id="skills"  name="skills" rows = "4" cols ="32" onChange ={changeData} placeholder="ex:html css"/>
                </div>
                </div>
                
                
                <div className="di center mt-20 mt-50">
                <label htmlFor="project" >project titles</label>
                <div>
                
                <input className="projects inp margin-10" id="projects" name="project_title" onChange ={setProjectData} value={project.project_title}/>
                </div>
                </div>

                <div className="di center mt-20">
                <label htmlFor="projects" placeholder="ex:description of project and write next line for data">projects description</label>
                <div>
                
                <textarea className="projects margin-10 rounded-xl px-5 text-black" id="projects"  name="project_description" rows = "7" cols ="32" onChange ={setProjectData} value={project.project_description} placeholder="ex:you can enter description line by line "/>
                </div>
                </div>

                {/* <div className="di center mt-20 mt-50 " style={{marginTop:"220px"}}>
                <label htmlFor="project"  >project online link</label>
                <div> */}
                
                {/* <input className="projects inp margin-10 text-black" id="projects" name="" onChange ={setProjectData} value={project.project_link} placeholder="https://resume-builder-ak.vercel.app/"/> */}
                {/* </div> */}
                {/* </div> */}

               
                <div className="flex items-center">
                    <img  src={image} id="projects" className="relative "  style={{marginTop:"50px",display:(image)?"block":"none"}} height="100px" width="100px"/>
                </div>
              

           
                <div className="flex items-center">
                    <button onClick={add} className="rounded-md" style={{marginTop:(image != "")?"30px":"20px",width:"100px",marginLeft:"20px",color:"white",textTransform:"capitalize",height:"30px" ,
                background:"blue"}}  >add project</button>

                </div>



                <div className="di center mt-20 mt-50 flex items-center" style={{marginTop:"40px"}}>
                <label htmlFor="project" >select profile</label>
                <div>
                
                <input className="projects inp margin-10" id="projects" name="project_link" onChange ={imageUpload} type="file"  accept="image/*" capture/>
                </div>
                </div>
                
                <div className="flex justify-center items-center ">

                     <button onClick={confirm} className="relative  rounded-md text-center "  style={{marginTop:"20px",width:"100px",marginLeft:"80px",color:"white",textTransform:"capitalize",height:"30px",background:"blue"}}  >confirm </button>
                </div>


                <div className="flex items-center">
                    <div className="bg-tmp1 relative  flex items-center justify-center" style={{border:"2px solid yellow",width:'100px',height:"100px",textAlign:"center",justifyContent:"center",justifyItems:"center",marginTop:"20px",borderRadius:"10px"}}>
                
                    <a onClick={()=>{if(con){send()}else{alert("please click confirm to submit")}}} style={{cursor:"pointer",textTransform:"capitalize"}}>template1</a>
              

            </div>
                </div>
                
                {/* <label htmlFor="fname">fullname</label>
                <input className="fname" id="fname"/> */}
            </div>
            </div>           
        </>
    )
}
