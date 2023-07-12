import React from "react";
import Input from "./Input";





function Form(props) {
  return (
    <form className="form">
      <Input type={props.type} placeholder={props.placeholder}/>
      <button type="submit">{props.isRegistered ? "Login" : "Register"}</button>
    </form>
  );
}

export default Form;
