function Input({label, type="text", placeholder="", value, onChange, name, required = false, disabled = false, className="",}){
    
    return(
        <div className={`fle flex-col gap-2 ${className}`}>
            {label && (
                <label
                  htmlFor={name}
                  className="text-sm font-medium text-slate-700"
                >
                    {label}
                </label>
            )}

            <input 
               id={name}
               name={name}
               type={type}
               placeholder={placeholder}
               value={value}
               onChange={onChange}
               required={required}
               disabled={disabled}
               className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 outline-none transition-all duration-200 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 disabled:cursor-not-allowed disabled:bg-slate-100"
            />
        </div>
    );
}

export default Input;