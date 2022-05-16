
import React, {useState} from 'react'
import {useForm} from 'react-hook-form'


function Forms({title, handleClick}) {
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState('');
    const {
        register,
        formState: {errors, }} = useForm({
        mode: "onBlur"});

    const condition_length = {
        required: "You need to fill out form!",
            minLength: {
                value: 8,
                message: "Min of 8 characters!"
            }, 
            maxLength:{
                value: 20,
                message: "Max of 20 characters!"
            }
    }
    return (
        <div>
        <input
                type="email"
                value={email}
                placeholder="Input email@email.com"
                {...register("email",
                {required: true, pattern: /^\S+@\S+$/i}
                )}
                onChange={(e) => setEmail(e.target.value)}
            />
        
        <div style={{height: 40}}>
            {errors?.email && <p>{errors?.email?.message || 'Error!'}</p>}
        </div>

        <input 
        type="password"
        value={password}
        placeholder="Password"
            {...register('password',
            condition_length,
            {
                pattern: ( /^[A-Za-z1-9-{+-/.,*^}]+$/i),
            })}
        onChange={(e) => setPassword(e.target.value)} 
        />
        <div style={{height: 40}}>
            {errors?.password && <p>{errors?.password?.message || 'You can use letters,numbers and values {+ - / * , ^ . }'}</p>}
        </div>

        <input onClick={() => handleClick(email, password)} type="submit" value= {title} />
        </div>
    );
}

export {Forms};
