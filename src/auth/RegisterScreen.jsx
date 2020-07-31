import React from 'react'

const RegisterScreen = () => {
    return (
        <div className="login">
            <h1 className="login__title">Register</h1>
            <form className="login__form">
                <div className="login__group">
                    <i className="login__icon far fa-user"></i>
                    <input
                        type="text"
                        placeholder="NAME"
                        name="name"
                        className="login__input"
                        autoComplete="OFF"
                    />
                </div>
                <div className="login__group">
                    <i className="login__icon far fa-user"></i>
                    <input
                        type="text"
                        placeholder="USERNAME"
                        name="username"
                        className="login__input"
                        autoComplete="OFF"
                    />
                </div>
                <div className="login__group login__group--password">
                    <i className="login__icon far fa-eye"></i>
                    <input
                        type="password"
                        placeholder="PASSWORD"
                        name="password"
                        className="login__input"
                    />
                    {/* <a href="#" className="login__label">
                        FORGOT PASSWORD
                    </a> */}
                </div>
                <button
                    type="submit"
                    className="btn btn--primary btn--block">
                    Register
                </button>
                {/* <div className="input-checkbox input-checkbox--right">
                    <input 
                        type="checkbox"
                        className="input-checkbox__check"
                        id="check"
                    />
                    <label 
                        htmlFor="check"
                        className="input-checkbox__label"
                    >Remember me</label>
                </div> */}
            </form>
        </div>
    )
}

export default RegisterScreen
