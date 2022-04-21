import React from 'react'
import {useForm} from 'react-hook-form';

function App() {
  const {
  register,
  formState: {
    errors, isValid,
  },
  handleSubmit,
  reset,
  } = useForm({
    mode: "onBlur"
  });

const onSubmit = (data) => {
  alert(JSON.stringify(data))
  reset();
}


  return (
    <div className="App">
    <h1>Registration</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        FirstName:
      <input 
        {...register('firstName',{
          required: "You need to fill out form!",
          minLength: {
            value: 2,
            message: "Minimum of 2 characters!"
          }
        })}
      />
      </label>
      <div style={{height: 40}}>
        {errors?.firstName && <p>{errors?.firstName?.message || 'Error!'}</p>}
      </div>
      
      <label>
        LastName:
      <input 
        {...register('lastName',{
          required: "You need to fill out form!",
          minLength: {
            value: 2,
            message: "Minimum of 2 characters!"
          }
        })}
      />
      </label>
      <div style={{height: 40}}>
        {errors?.lastName && <p>{errors?.lastName?.message || 'Error!'}</p>}
      </div>

      <input type="submit" disabled={!isValid}/>
    </form>
    </div>
  );
}

export default App;
