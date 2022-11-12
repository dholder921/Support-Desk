import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa"
import {toast} from "react-toastify"
import {useSelector, useDispatch} from 'react-redux'
import { register, reset } from "../features/auth/authSlice"
import {useNavigate} from 'react-router-dom'
import Spinner from "../components/Spinner";



function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

const {name, email, password, password2} = formData

const dispatch = useDispatch()
const navigate = useNavigate()
const {user, isLoading, isSuccess, message, isError} = useSelector(state => state.auth)

useEffect(()=>{
  if(isError){
    toast.error(message)
  }

  //redirect when logged in
  if(isSuccess || user){
    navigate('/')
  }
  dispatch(reset())
}, [isError,isSuccess,user,message,navigate,dispatch,reset])

const onChange = (e) => {
  setFormData((prevState)=>({ ...prevState, [e.target.id]: e.target.value,}))
}

const onSubmit = (e) => {
  e.preventDefault()

  if(password !== password2){
    toast.error("Passwords don't match")
  } else {
    const userData = {
      name, email, password
    }
    dispatch(register(userData))
  }
}

if(isLoading){
  return <Spinner/>
}

  return (
    <>
      <section className="heading">
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please create an account</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={onChange}
              placeholder="Enter you name"
              required
            />
            <input
              type="text"
              className="form-control"
              id="email"
              value={email}
              onChange={onChange}
              placeholder="Enter you email"
              required
            />
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={onChange}
              placeholder="Enter you password"
              required
            />
            <input
              type="password"
              className="form-control"
              id="password2"
              value={password2}
              onChange={onChange}
              placeholder="Confirim password"
              required
            />
          </div>
          <div className="form-group">
            <button className="btn btn-block">Submit</button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Register;

