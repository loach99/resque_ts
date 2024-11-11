const AuthForm = (props) => {

    return (
        <div className="my-0 mx-auto desktop:w-[600px] tablet:w-[360px] mobile:w-4/5">
            <form onSubmit={(e)=>props.getFormData(e)} className="flex flex-col gap-[10px]" action="">
                <input 
                    className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                    type="text"
                    onChange={(e)=>props.handleChange(e)}
                    value={props.formAuthData.login}
                    name="login"
                    placeholder="Введите логин"/>
                <input 
                    className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                    type="text"
                    onChange={(e)=>props.handleChange(e)}
                    value={props.formAuthData.pass}
                    name="pass"
                    placeholder="Введите пароль"/>
                <button 
                    className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 p-2 hover:bg-[#39E639] hover:text-white">
                        Вход
                </button>
            </form>
        </div>

    );
}

export default AuthForm;