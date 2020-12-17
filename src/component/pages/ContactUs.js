import React from "react";
import {TextField, makeStyles, ThemeProvider, Button}  from  '@material-ui/core'





const  style=makeStyles({
    

})

const ContactUs = () => {



    const classes = style();
    return (

      
        <div className="container">
           
            <div className="py-4" style={{textAlign:'center'}}>
                <h1>ContactUs page</h1>
                <form>
                    <TextField className={classes.TextField}
                        required
                        id="outlined-required"
                        label="email"
                        defaultValue="email"
                        variant="outlined"
                    /><br/>
                    <div class="form-group">
                      
                        <TextField  variant = "outlined" type="password" id="exampleInputPassword1" label="password" />
                    </div>
                    {/* <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div> */}
                    <button type="submit" class="btn btn-primary">Submit</button>
                    {/* <Button className={classes.submit}>Submit</Button> */}
                </form>
            </div>
            
            
        </div>
    )
};

export default ContactUs;