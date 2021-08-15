import React, {useRef} from "react"
import './App.css';
import { useForm } from "react-hook-form"


function App() {

  const { register, watch, formState: { errors }, handleSubmit } = useForm();
  console.log(watch('email'))
  const password = useRef();
  password.current = watch("password");
  const onSubmit = (data) => {
    console.log(data);

  }


  
  return (
    <div className="App">
     <form onSubmit={handleSubmit(onSubmit)}>
      <label>Email</label>
      <input name="email" type="email" {...register("email", {required: true, pattern: /^\S+@\S+$/i})} />
      {errors.email && <p>이메일 실패</p>}
     
      <label>Name</label>
      <input name="name" type="text" {...register("name", {required: true, maxLength: 10})} />
      {errors.name && errors.name.type === "required" && <p>This field is required</p>}
      {errors.name && errors.name.type === "maxLength" && <p>your input exceed maximum length</p>}
      
      <label>Password</label>
      <input name="password" type="password" {...register("password", { required : true, minLength : 6})} />
      {errors.password && errors.password.type === "required" && <p>This field is required</p>}
      {errors.password && errors.password.type === "minLength" && <p>비밀번호 6글자 이상"</p>}

      <label>Password Confirm</label>
      <input name="password_Confirm" type="password" {...register("password_Confirm", { required : true, validate : (value) => value === password.current })} />
      {errors.password_Confirm && errors.password_Confirm?.type === "required" && <p>"This field is required"</p>}
      {errors.password_Confirm && errors.password_Confirm?.type === "validate" && <p>비밀번호 6글자 이상</p>}
      <input type="submit" />
    </form>
    </div>
  );
}

export default App;
