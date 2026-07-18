function Card({children, className="", hover = false, onClick,}){
    
    const baseStyles = "rounded-2xl border border-slate-200 bg-white p-6 shadow-sm";
    
    const hoverStyles = hover ? "transition-all duration-300 hover:-translate-y-1 hover:shadow-lg" : "";

    return(
        <div onClick={onClick} className={`${baseStyles} ${hoverStyles} ${className}`}>
            {children}
        </div>
    );
}

export default Card;