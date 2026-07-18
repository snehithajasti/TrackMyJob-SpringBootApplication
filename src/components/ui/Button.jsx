function Button({children, type="button", variant="primary", className="", onClick, disabled= false,}){
    
    const baseStyles = "inline-flex items-center justify-center rounded-lg px-5 py-2.5 font-medium transition duration-200 focus:outline-none";

    const variants = {
        primary: "bg-indigo-600 text-white hover:bg-indigo-700",
        secondary: "bg-slate-200 text-slate-900 hover:bg-slate-300",
        outline: "border border-indigo-600 text-indigo-600 hover:bg-indigo-50",
        danger: "bg-red-600 text-white hover:bg-red-700",
    };
    return(
        <button type={type} onClick={onClick} disabled={disabled} className={`${baseStyles} ${variants[variant]} ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`}>
            {children}
        </button>
    );
}

export default Button;