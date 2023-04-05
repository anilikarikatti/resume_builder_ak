import styles from '@/styles/Home.module.css'
// import first from "../../styles/"

import {useRouter} from 'next/router';
export default function First(){

    let router = useRouter();
    // console.log(router);

    let {query} = router;

    let {data} = query;
    // console.log(data);
    // console.log(data);
    let {
        fname,
        role,
        address,
        city,
        mobile,
        gmail,
        skills,
        education,

        internship,
        intership_date,
       
        github_link,
        internship_company,
        state,
        pincode,
        projectListJson,

    } = query;
    if(projectListJson != undefined){
        projectListJson = JSON.parse(projectListJson);
        console.log("ak");
        console.log(projectListJson);
    }
//    let fun = ()=>{
    // skills = []
    // console.log(skills == undefined);
    
     if(skills != undefined){
        skills = skills.split(/\s/g);
        skills = skills.filter(elem=>elem!="")
        console.log(skills);
    }
//    }
    
    return (
        <>
        {/* <main className={styles.main}> */}
            
        <div className="container">
        <div className="box marginTop ">
            <div className="top">
                <div>
                    <h3 className="textColor marginLeft-20">{role}</h3>
                </div>
                <div className="right">
                    <div className="textColor">
                       <p>{city}</p> 
                        <p>{gmail}</p>  
                       <p>{mobile}</p> 
                    </div>
                </div>

                
            </div>
            <div className="top " >
                <div className="img">
                   
                </div>

                <div className="name textColor ">
                    <p>{fname}</p>
                   
                </div>
            </div>
        </div>
        <div className="box flex1">
            <div className=" profile textColor">
                <h3 className="title">profile</h3>
            </div>
            <div className="profile_content  textColor">
                <h3 className="capital">Hi  i&apos;m  {fname} , i&apos;m a {role}</h3> 
                <h3 className="capital"> if you want to see my work :<a href={github_link} className="link"> github click here</a>  </h3>
                

                <div className="skills">
                    <h3 className="textColor marginTop">skills</h3>
                    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",width:"300px",marginTop:"10px"}}>
                    {(skills != undefined)?skills.map((elem)=>{

                        return (<div className="line-height" key={elem}>
                            {`${elem}`}
                        </div>)}

                    ):""}
                    
                    </div>

                    {/* <div className="flex1">
                    <div className=" line-height">
                        <li>
                            html
                        </li>
                        <li  className="">
                            css                        
                        </li>
                        <li>
                           javascript 
                        </li>
                    </div> */}
                    
                    {/* <div className="sec-col line-height">
                        <li>
                            next js    
                        </li>
                        <li className="">
                            tailwind css    
                        </li>
                        <li>
                            mysql
                        </li>
                    </div>
                    </div> */}
                </div>
            </div>
        </div>
        <div className="box flex1">
            <div className=" profile textColor">
                <h3 className="title">Education</h3>
            </div>
            <div className="profile_content  textColor ">
                <h3>{education}</h3>
            </div>
        </div>
        <div className="box flex1">
            <div className=" profile textColor">
                <h3 className="title">projects</h3>
            </div>
            <div className="profile_content  textColor ">
                {(projectListJson != undefined) ?projectListJson.map(elem=>{
                    return(
                        <div className="projects">
                        <h4 className="textColor">{elem.project_title}</h4>
                        
                            <li className="line-height">{elem.project_description}</li>
                            
                    </div>
                    )
                }):""}
                    
{/* 
                    <div className="projects">
                        <h4 className="textColor">memory game</h4>
                        
                            <li className="line-height">challenging game containing 4x4 boxes that highlights a red color in each random box for certain seconds</li>
                            <li className="line-height">when user click all colored boxes the color of box will be red and after picking all colored boxes user will be  win the game</li>

                            <li className="line-height"><b>this project can be done by react js , and also hosted on vercel </b></li>
                            <li className="line-height"><b>
                                the same project will be done by normal html , css and javascript also  github link : <a href="https://trying-vercel-anilikarikatti.vercel.app/" className="link acolor">click here to  play</a></b>
                            </li>
                        
                    </div>

                    <div className="projects">
                        <h4 className="textColor">quiz game</h4>
                        
                            <li className="line-height">fun game which contains genereal questions in the form of quiz and each question contains  points.</li>
                            <li className="line-height">
                                here the player can look for previous questions and next questions also and marks are rewarded after the submit form. 
                            </li>

                            <li className="line-height">this project can be done by react js for code :  <a href="https://github.com/anilikarikatti/quiz-game-in-react" className="link">click here</a></li>
                            <li className="line-height">
                                the same project will be done by normal html , css and javascript for code  : <a href="https://github.com/anilikarikatti/quiz_game" className="link">click here</a>
                            </li>
                       
                    </div> */}
            </div>
        </div>

        <div className="box flex1">
            <div className=" profile textColor">
                <h3 className="title">internship</h3>
            </div>
            <div className="profile_content  textColor ">
                <h3>{internship_company} </h3>
                <p>{internship} to {intership_date}</p>
            </div>
        </div>

        <div className="box flex1">
            <div className=" profile textColor">
                <h3 className="title">contacts</h3>
            </div>
            <div className="profile_content  textColor ">
                <p>address : {address}</p>
                <p className="add">{city} , {state} ,{pincode}</p>
                <p> email : <a href="" className="link small">{gmail}</a> </p>
                <p>mobile:{mobile}</p>
            </div>
        </div>
        </div>

      {/* </main> */}

    </>
    )
}