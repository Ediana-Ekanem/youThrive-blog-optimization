import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

// Manual Form
const SignUp = () => {
  let [userName, setUserName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [gender, setGender] = useState("male");
  let [terms, setTerms] = useState(false);
  let [show, setShow] = useState("password");

  const handleSubmit = (e) => {
    e.preventDefault();

    let toDb = {
      userName,
      email,
      password,
      gender,
      terms,
    };
    console.log(toDb);
    // Clear input fields
    setUserName("");
    setEmail("");
    setPassword("");
    setGender("male");
    setTerms(false);
    setShow("password");
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen  mt-32 mb-10">
        <div className=" border py-10 px-10 rounded-lg  ">
          <h1 className="font-bold text-3xl text-center text-cyan-600 mb-5 ">
            SIGN UP
          </h1>
          <form onSubmit={(e) => handleSubmit(e)}>
            <fieldset className="flex flex-col text-lg mb-3">
              <label htmlFor="userName " className="mb-1">
                Full Name:
              </label>
              <div className=" flex justify-between  items-center border  px-3 py-2  border-slate-500 rounded">
                <input
                  type="text"
                  className="border-none outline-none w-full"
                  name="userName"
                  id="userName"
                  value={userName}
                  placeholder="Enter full name"
                  onChange={(e) => setUserName(e.target.value)}
                  required
                />
                <FaUserCircle size={20} color="#0c92b2" />
              </div>
            </fieldset>
            <fieldset className="flex flex-col  text-lg mb-5">
              <label htmlFor="userName" className="mb-1">
                Email:
              </label>
              <div className="flex justify-between  items-center border  px-3 py-2  border-slate-500 rounded">
                <input
                  type="email"
                  className="border-none outline-none w-full"
                  name="email"
                  id="email"
                  value={email}
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <MdEmail size={20} color="#0c92b2" />
              </div>
            </fieldset>
            <fieldset className="flex flex-col  text-lg mb-5">
              <label htmlFor="password" className="bold mb-1">
                Password:
                <span
                  className="bg-cyan-600 text-white py-1 px-2 rounded ms-2 text-sm"
                  onClick={() =>
                    setShow(show === "password" ? "text" : "password")
                  }
                >
                  {show === "password" ? "hide" : "show"}
                </span>
              </label>
              <div className="flex justify-between  items-center border  px-3 py-2  border-slate-500 rounded">
                <input
                  type={show}
                  className="border-none outline-none w-full"
                  name="password"
                  id="password"
                  value={password}
                  placeholder="Enter your strong password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <RiLockPasswordFill size={20} color="#0c92b2" />
              </div>
            </fieldset>
            <fieldset className=" text-lg mb-3 space-x-2">
              <span>Gender:</span>
              <label htmlFor="male">Male</label>
              <input
                type="radio"
                value="male"
                name="gender"
                id="male"
                onChange={(e) => setGender(e.target.value)}
                checked={gender === "male"}
              />
              <label htmlFor="female">Female</label>
              <input
                type="radio"
                value="female"
                name="female"
                id="female"
                onChange={(e) => setGender(e.target.value)}
                checked={gender === "female"}
              />
            </fieldset>
            <fieldset className=" text-[17px] mb-3 space-x-2 flex items-center">
              <input
                type="checkbox"
                name="terms"
                id="terms"
                value={terms}
                placeholder="enter your strong password"
                onChange={(e) => setTerms(e.target.checked)}
                required
              />
              <label htmlFor="terms">
                By clicking you accept our <Link>Terms and conditions</Link>
              </label>
            </fieldset>
            <div align="center">
              <button
                className=" bg-cyan-600 rounded hover:bg-cyan-500 transition-all text-white font-semibold py-2 px-5 flex justify-center items-center text-lg mt-5"
                type="submit"
              >
                Sumbit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
