import React from 'react'
import {useForm} from 'react-hook-form';

function Login() {
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
const condition_length = {
    required: "You need to fill out form!",
            minLength: {
                value: 2,
                message: "Min of 2 characters!"
            }, 
            maxLength:{
                value: 20,
                message: "Max of 20 characters!"
            }
}

return (
    <div className="Login">
    <h1>Login</h1>
    <form onSubmit={handleSubmit(onSubmit)}>

    <label>
        Login:
    <input type="text" placeholder="Email" {
        ...register("Email", {required: true, pattern: /^\S+@\S+$/i})
        } />
    </label>
    <div style={{height: 40}}>
        {errors?.login && <p>{errors?.login?.message || 'Error!'}</p>}
    </div>

    <label>
        Password:
    <input type="text" placeholder="Password"
        {...register('password',{
        condition_length,
        pattern: ( /^[A-Za-z1-9-{+-/.,*^}]+$/i),
        })}
    />
    </label>
    <div style={{height: 40}}>
        {errors?.password && <p>{errors?.password?.message || 'You can use letters,numbers and values {+ - / * , ^ . }'}</p>}
    </div>

    <input type="submit" value= "Login" disabled={!isValid}/>
    </form>
    </div>
);
}

export {Login};
