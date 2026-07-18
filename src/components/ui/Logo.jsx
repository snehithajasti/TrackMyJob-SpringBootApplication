function Logo({className=""}){
    return(
        <div className={`flex items-center gap-2 ${className}`}>
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 text-xl font-bold text-white">T</div>
            <div>
                <h1 className="text-xl font-bold text-slate-900">TrackMyJob</h1>
                <p className="text-xs text-slate-500">Job Application Tracker</p>
            </div>
        </div>
    );
}

export default Logo;