import React,{useState} from "react";





const Homepage= ()=>{
    const [open ,setopen]=React.useState(false)


    const matchhandle=() =>{
        setopen(!open)
        
       

    
    }
    
    return(
        <div className="container">
            <div className="py-4">
                

                <h2 style={{textAlign:'center'}}><p>Hello Guys Welcome to Chample Thanda Sports Event 2020<br></br>
                    you can edit what ever you want </p></h2>

        
            </div>



            
        </div>


    )
};

export default Homepage;