import { useForm } from "react-hook-form"
import './App.css'

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors , isSubmitting},
  } = useForm();

  async function onSubmit(data){
    //api call ko simulate
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log("Submitting the data", data);
  }

  return (

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label >Fist Name:</label>
          <input{...register("firstName", {required :true ,
           minLength: {value:3 , message:'Min length at least 3'} ,
            maxLength:{ value:6 , message:"Max length 6"}})}/>
          {errors.firstName && <p>{errors.firstName.message}</p>}
        
        </div>
        <br />
        <div>
          <label >Middle Name:</label>
          <input  {...register("MiddleName")} />
        </div>
        <br />
        <div>
          <label >Last Name:</label>
          <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
        </div>
        <br />
        <input type='submit'  value={isSubmitting ? "Submitting":"submit"}/>
      </form>
  )
}

export default App
