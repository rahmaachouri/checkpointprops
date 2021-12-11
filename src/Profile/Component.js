import React from 'react';
import PropTypes from "prop-types";
const Component = (props) => {
     const styleprof={ textAlign :"center", fontFamily: "Meow Script, cursive", fontSize:"200%"}
    return (
        <div style={styleprof}>
            <div className=" row justify-content-center " style={{marginTop:"80px"}}>
         <img src={props.children}style={{width:"200px" ,height:"200px", borderRadius:"30%"}}></img>
        </div>
         <h1>{props.FullName} </h1> 
         <p>Bio : {props.Bio} </p> 
         <p>profession : {props.profession} </p> 
         <button className="btn btn-outline-dark" onClick={()=>{props.hand(props.FullName)}}>Ajouter</button>
        </div>
    );  
}
 Component.defaultProps={
        FullName:"Achouri Rahma"
    }
    Component.propTypes = {
 FullName: PropTypes.string,
 bio:PropTypes.string,
 profession:PropTypes.string,
};

export default Component;
