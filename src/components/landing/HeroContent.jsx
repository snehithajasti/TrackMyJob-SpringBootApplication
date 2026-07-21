import { ArrowRight, PlayCircle} from "lucide-react";
import Button from "../ui/Button";
import {Link} from "react-router-dom";

function HeroContent(){
    return(
        <div className="space-y-8">
            <div className="inline-flex items-center rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700">
                Smart Job Tracking Platform
            </div>

            <div className="space-y-4">
                <h1 className="text-5xl font-bold leading-tight text-slate-900 lg:text-6xl"> 
                    Track Your Job Search 
                    <span className="block text-indigo-600">
                        Like Never Before
                    </span>
                </h1>
                <p className="max-w-xl text-lg leading-8 text-slate-600">Organize your applications, interviews, offers, and rejections from one modern dashboard. Stay focused and land your dream job faster.</p>
            </div>

            <div className="flex flex-wrap gap-4">
                <Link to="/register">
                  <Button>
                    Get Started
                    <ArrowRight size={18} />
                  </Button>
                </Link>
                <Button variant="outline">
                    <PlayCircle size={18}/>
                    Live Demo
                </Button>
            </div>

            <div className="flex flex-wrap gap-10 pt-6">
                <div>
                    <h3 className="text-3xl font-bold text-slate-900">
                        500+
                    </h3>
                    <p className="text-slate-600">Applications Tracked</p>
                </div>
                <div>
                    <h3 className="text-3xl font-bold text-slate-900">95%</h3>
                    <p className="text-slate-600">Success Tracking</p>
                </div>
                <div>
                    <h3 className="text-3xl font-bold text-slate-900">
                        24/7
                    </h3>
                    <p className="text-slate-600">
                        Access Anywhere
                    </p>
                </div>
            </div>
        </div>
    );
}

export default HeroContent;