export default function Grid (){
    let arr = [1,2,3,4,5,65,6,7,8]
    return(
        <>
        <div style={{height:"100vh"}}>

            { (() => {
                return (
                    <div >
                    you&rsquo;re free
                    </div>
                )})()}
            <div style={{display:"grid",gridTemplateColumns: "1fr 1fr 1fr",width:"100px"}}>
                {arr.map((elem)=>{
                    return  <div style={{border:"2px solid black " ,height:"20px"}} key={elem}>{elem}</div>})}
                {/* <div style={{border:"2px solid black " ,height:"20px"}}></div>
                <div style={{border:"2px solid black " ,height:"20px"}}></div>
                <div style={{border:"2px solid black " ,height:"20px"}}></div>
                <div style={{border:"2px solid black " ,height:"20px"}}></div>
                <div style={{border:"2px solid black " ,height:"20px"}}></div>
                <div style={{border:"2px solid black " ,height:"20px"}}></div>
                <div style={{border:"2px solid black " ,height:"20px"}}></div> */}
            </div>
            </div>
        </>
    )
}