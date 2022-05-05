import React from 'react'
import {useForm} from 'react-hook-form';

function Registration() {
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
    <div className="Registration">
    <h1>Registration</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
    <label>
        FirstName:
    <input placeholder="Your FirstName"
        {...register('firstName',{
            condition_length,
            pattern: (/^[A-Za-z]+$/i )
        })}
    />
    </label>
    <div style={{height: 40}}>
        {errors?.firstName && <p>{errors?.firstName?.message || 'Error!'}</p>}
    </div>
    
    <label>
        LastName:
    <input placeholder="Your LastName"
        {...register('lastName',{
            condition_length, 
            pattern: (/^[A-Za-z]+$/i )
        })}
    />
    </label>
    <div style={{height: 40}}>
        {errors?.lastName && <p>{errors?.lastName?.message || 'Error!'}</p>}
    </div>

    <label>
        Login:
    <input placeholder="Email"
        {...register('login',{
            condition_length,
            pattern: (/^[A-Za-z1-9]+$/i )
        })}
    />
    </label>
    <div style={{height: 40}}>
        {errors?.login && <p>{errors?.login?.message || 'Error!'}</p>}
    </div>

    <label>
        Password:
    <input placeholder="Password"
        {...register('password',{
        condition_length,
        pattern: ( /^[A-Za-z1-9-{+-/.,*^}]+$/i),
        })}
    />
    </label>
    <div style={{height: 40}}>
        {errors?.password && <p>{errors?.password?.message || 'You can use letters,numbers and values {+ - / * , ^ . }'}</p>}
    </div>

    <input type="submit" value= "Registration" disabled={!isValid}/>
    </form>
    </div>
);
}

export {Registration};
