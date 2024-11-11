import React, { SyntheticEvent, useState } from "react";
import AuthForm from "../../components/auth-form/AuthForm";
import RegForm from "../../components/auth-form/RegForm";

const Auth = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [isAuth, setAuth] = useState<boolean>(false);

    const [formRegData, setFormRegData] = useState({
        login: '',
        name: '',
        email: '',
        pass: '',
        confirmPass: ''
    });

    const [formAuthData, setFormAuthData] = useState({
        login: '',
        pass: '',
    })

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        isAuth ? setFormAuthData({ ...formAuthData, [name]: value }) : setFormRegData({ ...formRegData, [name]: value });
    }
    const getFormData = (e:SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
        e.preventDefault();
        console.log(formRegData)
        console.log(formAuthData)
    }
    return (
        <div className="w-[100vw] h-[100vh] py-[150px] bg-black/20">
            {isAuth ?
                <AuthForm
                    getFormData={getFormData}
                    formAuthData={formAuthData}
                    handleChange={handleChange}
                /> :
                <RegForm
                    getFormData={getFormData}
                    formRegData={formRegData}
                    handleChange={handleChange}
                />
            }
        </div>
    );
}

export default Auth;