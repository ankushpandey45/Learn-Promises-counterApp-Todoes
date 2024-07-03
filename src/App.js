// import Todo from "./Todo/Todo";
// import Mincomponent from "./Newtodo/HOC/Mincomponent";
// import Todolist from "./Newtodo/Todolist";
// import RouterMainCompo from "./FetchData/RouterMainCompo"
// import FetchApi from "./FetchData/FetchApi";

import TodoListPractise from "./Newtodo/TodoListPractise";

// import DesignApp from "./TaskDesign/DesignApp";
const App = () => {
  // let myTime = new Date().toLocaleTimeString();
  // const [crntime, setTime] = useState(myTime);

  // const getime = () => {
  //   myTime = new Date().toLocaleTimeString();
  //   setTime(myTime);
  // };
  // setInterval(getime, 1000);

  // const [count, setCount] = useState(0);
  // const inNum = () => {
  //   setCount(count + 1);
  // };

  // const [chng, setbg] = useState("click me");
  // const chngbg = () => {
  //   let chngnm = "hey";
  //   setbg(chngnm);
  // };

  // const chngbg2 = () => {
  //   let chng2 = "hii";
  //   setbg(chng2);
  // };

  // const [fullname, setName] = useState({
  //   fname: "",
  //   lname: "",
  //   email: "",
  //   phone: "",
  // });

  // const inputName = (event) => {
  //   const { name, value } = event.target;

  //   setName((prevalue) => {

  //     return{
  //       ...prevalue,
  //       [name]:value,
  //     };
  // if (name === "fname") {
  //   return {
  //     fname: value,
  //     lname: prevalue.lname,
  //     email: prevalue.email,
  //     phone: prevalue.phone,
  //   };
  // } else if (name === "lname") {
  //   return {
  //     fname: prevalue.fname,
  //     lname: value,
  //     email: prevalue.email,
  //     phone: prevalue.phone,
  //   };
  // } else if (name === "email") {
  //   return {
  //     fname: prevalue.fname,
  //     lname: prevalue.lname,
  //     email: value,
  //     phone: prevalue.phone,
  //   };
  // } else if (name === "phone") {
  //   return {
  //     fname: prevalue.fname,
  //     lname: prevalue.lname,
  //     email: prevalue.email,
  //     phone: value,
  //   };
  // }
  //   });
  // };

  // const button = (event) => {
  //   event.preventDefault();
  // };

  return (
    <>
      <div>
        {/* <Todo /> */}
        {/* <Todolist /> */}
      </div>
      <div style={{marginTop:"20px"}}>
        {/* <Mincomponent /> */}
      </div>
      <div>
        {/* <DesignApp/> */}
      </div>
      <div>
      {/* <RouterMainCompo/> */}
      </div>
      <div><TodoListPractise/></div>
    </>
    // <>
    //   {/* <div>
    //     <h1>{count}</h1>
    //     <button onClick={inNum}>click</button>
    //   </div>
    //   <div>
    //     <h1>{crntime}</h1>
    //     <button onClick={getime}>Get time</button>
    //   </div>
    //   <div>
    //     <button onClick={chngbg} onDoubleClick={chngbg2}>
    //       {chng}
    //     </button>
    //   </div> */}
    //   <form onSubmit={button}>
    //     <div>
    //       <h1>
    //         Hello {fullname?.fname} {fullname?.lname}
    //       </h1>

    //       <h2> {fullname?.email}</h2>
    //       <h2>{fullname?.phone}</h2>

    //       <input
    //         type="text"
    //         placeholder="Enter Your Name"
    //         name="fname"
    //         onChange={inputName}
    //         value={fullname?.fname}
    //       />

    //       <input
    //         type="text"
    //         placeholder="Enter Your LastName"
    //         name="lname"
    //         onChange={inputName}
    //         value={fullname?.lname}
    //       />

    //       <input
    //         type="email"
    //         placeholder="Enter Your Email"
    //         name="email"
    //         onChange={inputName}
    //         value={fullname?.email}
    //       />

    //       <input
    //         type="number"
    //         placeholder="Enter Your Number"
    //         name="phone"
    //         onChange={inputName}
    //         value={fullname?.phone}
    //       />
    //       <br />
    //       <button type="submit">Submit</button>
    //     </div>
    //   </form>
    // </>
  );
};
export default App;
