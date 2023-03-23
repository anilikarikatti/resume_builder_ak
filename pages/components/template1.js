import styles from '@/styles/Home.module.css'
// import first from "../../styles/"

export default function First(){

    return (
        <>
        {/* <main className={styles.main}> */}
            
        <div className="container">
        <div className="box marginTop ">
            <div className="top">
                <div>
                    <h3 className="textColor marginLeft-20">Full Stack Developer</h3>
                </div>
                <div className="right">
                    <div className="textColor">
                       <p>Hubballi,India</p> 
                        <p>anilkarikatti333@gmail.com</p>  
                       <p>7795549800</p> 
                    </div>
                </div>

                
            </div>
            <div className="top " >
                <div className="img">
                   
                </div>

                <div className="name textColor ">
                    <p>anil karikatti</p>
                   
                </div>
            </div>
        </div>
        <div className="box flex">
            <div className=" profile textColor">
                <h3 className="title">profile</h3>
            </div>
            <div className="profile_content  textColor">
                <h3 className="capital">Hi i'm anil karikatti ,i'm a Full stack developer</h3> 
                <h3 className="capital"> if you want to see my work :<a href="https://github.com/anilikarikatti" className="link"> github click here</a>  </h3>
                

                <div className="skills">
                    <h3 className="textColor marginTop">skills</h3>
                    <div className="flex">
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
                    </div>
                    <div className="sec-col line-height">
                        <li>
                            node js  
                          </li>
                          <li className="">
                            express   
                          </li>
                          <li>
                              react js   
                          </li>
      
                    </div>
                    <div className="sec-col line-height">
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
                </div>
                </div>
            </div>
        </div>
        <div className="box flex">
            <div className=" profile textColor">
                <h3 className="title">Education</h3>
            </div>
            <div className="profile_content  textColor ">
                <h3>B E computer science at jain college of engineering and technology hubballi</h3>
            </div>
        </div>
        <div className="box flex">
            <div className=" profile textColor">
                <h3 className="title">projects</h3>
            </div>
            <div className="profile_content  textColor ">
                    <div className="projects">
                        <h4 className="textColor">mybio backup</h4>
                        
                            <li className="line-height">this is our client product this can be done in my internship . this is available in play store also.</li>
                            <li className="line-height">this product provides a secured account in cloud to everyone to access medical documents such as MRI report, CT scan, X ray, Lab reports, Other medical tests, 3D imaging, medical prescriptions in digital format from the original issuers of these certificates. </li>


                            <li className="line-height">the project will be hosted on aws i have also little bit knowledge about this </li>
                            
                            


                            <li className="line-height"><b>in this project i have been  be worked on backend using node js and express js and mysql </b> </li> 


                            <li className="line-height"><b>the admin side of this product has been done by be ..this project using nunjucks template, tailwind css , html javascript </b></li>
                        
                    </div>

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
                       
                    </div>
            </div>
        </div>

        <div className="box flex">
            <div className=" profile textColor">
                <h3 className="title">internship</h3>
            </div>
            <div className="profile_content  textColor ">
                <h3>samarth meditech pvt.ltd  hubballi </h3>
                <p>aug 2022 to july 2023</p>
            </div>
        </div>

        <div className="box flex">
            <div className=" profile textColor">
                <h3 className="title">contacts</h3>
            </div>
            <div className="profile_content  textColor ">
                <p>address : a i karikatti</p>
                <p className="add">savadatti , Karnataka ,591126</p>
                <p> email : <a href="" className="link small">anilkarikatti333@gmail.com</a> </p>
                <p>mobile:7795549800</p>
            </div>
        </div>
        </div>

      {/* </main> */}

    </>
    )
}