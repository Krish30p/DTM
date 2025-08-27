import React, { useEffect } from "react";
import { useRef, useState } from "react";


const Manager = () => {
  const ref = useRef()
  const [form, setform] = useState({site:"" , username:"" , password:""})
  const [passwordArray, setpasswordArray] = useState([])

  useEffect(() => {
    let password = localStorage.getItem("password");
    if(password){
      setpasswordArray(JSON.parse(password))
    }  
  }, [])
  





  const showpassword = () => {
    // alert("Show the password");
    if(ref.current.src.includes("icons/eyecross.png")){
    ref.current.src = "icons/eye.png"}
    else{
      ref.current.src = "icons/eyecross.png"
    }

    
  }
  const savePassword = () => {
    setpasswordArray([...passwordArray, form])
    localStorage.setItem("password" , JSON.stringify([...passwordArray, form]))
    console.log([...passwordArray , form])
    
  } 
  const handleChange =  (e) => {
    setform({...form , [e.target.name]: e.target.value})
  }
  
  
  

  
  
  return (
    <div>
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>

      <div className="mycontainer ">
        <h1 className="text-4xl text font-bold text-center">
          <span className="text-green-500"> &lt;</span>
          <span className="text-white">CLASS</span>
          <span className="text-green-500 ">WEB/&gt;</span>
        </h1>
        <p className="text-blue-600 text-lg text-center">
          Your Campus Helper
        </p>
        <div className="text-white flex flex-col p-4 gap-5 items-center">
          {/* <input value={form.site} onChange={handleChange} placeholder="Enter Website url"
            className="rounded-full border border-gray-400 w-full p-4 py-1 not-[]:"
            type="text"
            name="site"
            id="" */}
          {/* /> */}
          <div className="flex w-full justify-between gap-5">
            <input value={form.username} onChange={handleChange} placeholder="Enter StudentID"
              className="rounded-full border border-gray-400 w-full p-4 py-1 not-[]:"
              type="text"
              name="username"
              id=""
            />
            <div className="relative">
            <input value={form.password} onChange={handleChange} placeholder="Enter Password"
              className="rounded-full border border-gray-400 w-full p-4 py-1 not-[]:"
              type="text"
              name="password"
              id=""
            />
            <span className="absolute right-[3px] top-[2px] cursor-pointer" onClick={showpassword}>
              <img ref={ref} className="p-1.5 "width={30} src="icons/eye.png" alt="eye"  style={{ filter: "brightness(0) invert(1)"}}/>
            </span>

           </div> 
          </div>
          <button onClick={savePassword} className="flex justify-center items-center bg-green-900 hover:bg-green-800 rounded-full px-2 py-2 w-fit border-2 border-green-900">
          {/* <lord-icon
    // src="https://cdn.lordicon.com/vjgknpfx.json"
    trigger="hover"
    stroke="light"
    colors="primary:#ffffff,secondary:#9ce5f4">
</lord-icon> */}
          Login</button>
        </div>
      </div>
    </div>
  );
};

export default Manager;
