function SectionHeading({title, subtitle, align = "center", className = "", }){
    const alignment = {
        left: "text-left",
        center: "text-center",
        right: "text-right",
    };
    
    return(
        <div className={`mb-12 ${alignment[align]} ${className}`}>
            <h2 className="text-4xl font-bold text-slate-900">{title}</h2>
            {subtitle && (
                <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">{subtitle}</p>
            )}
        </div>
    );
}

export default SectionHeading;