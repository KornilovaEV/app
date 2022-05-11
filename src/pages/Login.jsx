
import React from 'react'
import {useForm} from 'react-hook-form'
import {useLocation, useNavigate} from 'react-router-dom';
import {useAuth} from '../hook/useAuth';

function Login() {
    const location = useLocation();
    const navigate = useNavigate();
    const {singin} = useAuth();

    const fromPage = location.state?.from?.pathname || '/';

    const {
        register,
        formState: {
            errors, isValid,
        },
        //reset,
        } = useForm({
            mode: "onBlur"
        });

        

        const condition_length = {
            required: "You need to fill out form!",
                    minLength: {
                        value: 2,
                        message: "Min of 8 characters!"
                    }, 
                    maxLength:{
                        value: 20,
                        message: "Max of 20 characters!"
                    }
        }
    


    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        /*const user = {
            login: form.login.value,
            password: form.password.value
        }*/
        const user = form.password.value;
        
        singin(user, () => navigate(fromPage, {replace: true})); //нельзя вернуться по кнопке назад на стр реги 
    };



    return (
        <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>

        {/*
        <label>
            Login:
        <input name="login" placeholder="Need form email@mail.com" {
            ...register("login",
            {
                required: true, pattern: /^\S+@\S+$/i
            })
            } />
        </label>
        <div style={{height: 40}}>
            {errors?.login && <p>{errors?.login?.message || 'Error!'}</p>}
        </div>   */} 

        <label>
            Password:
        <input name="password"  type="text" placeholder="Password"
            {...register('password',
            condition_length,
            {
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
