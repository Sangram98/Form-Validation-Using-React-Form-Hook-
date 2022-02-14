import React from "react";
import "./App.css";
import { useForm } from "react-hook-form"; 
import classNames from 'classnames'  

function App() {
  const { register, handleSubmit,formState: { errors } } = useForm({
    mode:"onSubmit"                    
  });
  console.log(errors);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="App">
      <div className="container py-2">
        <div className="row text-center w-50 shadow-lg p-5 mx-auto rounded ">
          <form action="" onSubmit={handleSubmit(onSubmit)}>



            {/* name  */}
            <div className="form-group">
              <input
                type="text"
                className={classNames("form-control", {"is-invalid":errors.fullname})}
                id="fullname"
                placeholder="Enter Your Full Name"
                name="fullname" 
                {...register('fullname', { required: true,minLength: 4 })}
              autoComplete="off"/>
              <small className="form-text  text-danger">
                 {errors.fullname?.type === 'required' && "Fullname name is required"}
              </small>
              <small className="form-text  text-danger">
                 {errors.fullname?.type === 'minLength' && "Plz Enter more than 4 charecters for fullname"}
              </small>
            </div>




            <div className="form-group">
              <input
                type="text"
                className={classNames("form-control", {"is-invalid":errors.email})}
                id="email"
                placeholder="Enter Your E-mail Address"
                name="email"
                {...register('email',{required:true,pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })}
              autoComplete="off"/>
               <small className="form-text  text-danger">
                 {errors.email?.type === 'required' && "Email name is required"}
              </small>
              <small className="form-text  text-danger">
                 {errors.email?.type === 'pattern' && "email is not in proper format"}
              </small>
            </div>



            {/* phone */}
            <div className="form-group">
              <input
                type="texts"
                className={classNames("form-control", {"is-invalid":errors.phone})}
                id="phone"
                placeholder="Enter Your Phone Number"
                name="phone"
                {...register('phone', { required: true,pattern:/^[0-9]{10}$/ })}
              autoComplete="off"/>
              <small className="form-text  text-danger">
                 {errors.phone?.type === 'required' && "Mobile number is required"}
              </small>
              <small className="form-text  text-danger">
                 {errors.phone?.type === 'pattern' && "Mobile number only contain 10 digit numbers "}
              </small>

            </div>



            {/* password */}
            <div className="form-group">
              <input
                type="text"
                className={classNames("form-control", {"is-invalid":errors.password})}
                id="password"
                placeholder="Enter Your Password"
                name="password"
                {...register('password', { required: true,pattern:/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/ })}
                autoComplete="off"
              />
              <small className="form-text  text-danger">
                 {errors.password?.type === 'required' && "*passoword  is required"}
              </small>
              <small className="form-text  text-danger">
                 {errors.password?.type === 'pattern' && "Must contain at least one number and -one uppercase and lowercase letter, and at least 8 or more characters "}
              </small>
            </div>



            {/* select */}
            <div className="form-group">
              <select
                 className={classNames("form-control text-center", {"is-invalid":errors.state})}
                id="state"
                name="state"
                {...register('state', { required: true })}
                autoComplete="off">
                <option value="">--Select Your state--</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Assam">Assam</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Punjab">Punjab</option>
              </select>
              <small className="form-text  text-danger">
                 {errors.state?.type === 'required' && "state is required"}
              </small>
            </div>





            {/* gender */}
            <div className="form-group">
              <div className="form-check form-check-inline">
                <input
                 className="form-check-input"
                 {...register('gender',{required:true})}
                  type="radio"
                  id="male"
                  value="male"
                  name="gender"
               
                />
                <label className="form-check-label" htmlfor="male">
                  male
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                className="form-check-input"
                {...register('gender',{required:true})}
                  type="radio"
                  id="female"
                  value="female"
                  name="gender"
                
                />
                <label className="form-check-label" htmlfor="female">
                  female
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
               className="form-check-input"
               {...register('gender',{required:true})}
                  type="radio"
                  id="other"
                  value="other"
                  name="gender"
                
                />
                <label className="form-check-label" htmlfor="other">
                  other
                </label>
                <small className="form-text  text-danger ms-2">
                 {errors.gender?.type === 'required' && "Plz choose your gender"}
              </small>
              </div><br />
             
            </div>
             






            {/* condition */}
            <div className="form-group">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="tnc"
                  {...register('tnc', { required: true })}
                  name="tnc"
                />
                <label className="form-check-label" htmlfor="tnc">
                  I agree all terms & conditions
                </label>
                <small className="form-text  text-danger ms-3">
                 {errors.tnc?.type === 'required' && "plz choose the field"}
                </small>
              </div>
            </div>
           



            <button className="btn btn-info btn-sm float-start" type="submit">
              Create New Account
            </button>
            <button className="btn btn-warning btn-sm float-end" type="reset">
              Clear the form
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
