import React from "react";
import Form from "./Form";

var userIsRegistered = true;



// function Show(){
//   if (userIsRegistered = true){
//     return (
//       <div>
//     <input type="text" placeholder="Username" />
//     <input type="password" placeholder="Password" />
//     </div>
//     );
//   }else{
//     <div>
//       <input type="text" placeholder="Username" />
//     <input type="password" placeholder="Password" />
//     <input type="password" placeholder="Confirm Password" />
//     </div>
//   }
// }

function App() {
  return (
    <div className="container">
      <Form isRegistered={userIsRegistered = false} />
    </div>
  );
}

export default App;
