import { useState } from "react";

interface orderValue {
    name: string,
    count: number,
    photoId: number,
    isChecked: boolean,
    photoLineId: string,
    blockId: number,
    quantity: number,
    id: number,
    photo_type: number,
    is_photobook: boolean,
    is_digital: boolean,
    promo_code: string

}
const RegForm = (props) => {

    return (
        <div className="my-0 mx-auto desktop:w-[600px] tablet:w-[360px] mobile:w-4/5">
            <form onSubmit={(e)=>props.getFormData(e)} className="flex flex-col gap-[10px]" method="post">
                <input 
                    className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                    type="text"
                    onChange={(e)=>props.handleChange(e)}
                    value={props.formRegData.login}
                    name="login" 
                    placeholder="Логин для входа"/>
                <input 
                    className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                    type="text"
                    onChange={(e)=>props.handleChange(e)}
                    value={props.formRegData.name}
                    name="name"
                    placeholder="Отображаемое имя"/>
                <input 
                    className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                    type="text"
                    onChange={(e)=>props.handleChange(e)}
                    value={props.formRegData.email}
                    name="email"
                    placeholder="E-mail"/>
                <input 
                    className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                    type="text"
                    onChange={(e)=>props.handleChange(e)}
                    value={props.formRegData.pass}
                    name="pass"
                    placeholder="Пароль"/>
                <input 
                    className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                    type="text"
                    onChange={(e)=>props.handleChange(e)}
                    value={props.formRegData.confirmPass}
                    name="confirmPass"
                    placeholder="Повтортите пароль..."/>
                <button 
                    className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 p-2 hover:bg-[#39E639] hover:text-white">
                        Зарегистрироваться
                </button>
            </form>
        </div>
    );
}

export default RegForm;