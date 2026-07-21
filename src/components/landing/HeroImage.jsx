import Card from "../ui/Card";
import Badge from "../ui/Badge";

function HeroImage(){
    return(
        <div className="relative">
            <Card className="overflow-hidden rounded-3xl shadow-2xl">
                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                    <h2>TrackMyJob Dashboard</h2>
                    <Badge variant="success">
                        Active
                    </Badge>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-4">
                    <Card className="p-4">
                        <p className="text-sm text-slate-500">Applications</p>
                        <h3 className="mt-2 text-2xl font-bold">48</h3>
                    </Card>

                    <Card className="p-4">
                        <p className="text-sm text-slate-500">Interviews</p>
                        <h3 className="mt-2 text-2xl font-bold">12</h3>
                    </Card>

                    <Card className="p-4">
                        <p className="text-sm text-slate-500">Offers</p>
                        <h3 className="mt-2 text-2xl font-bold">3</h3>
                    </Card>
                </div>

                <div className="mt-8">
                    <h3 className="mb-4 font-semibold">
                        Recent Applications
                    </h3>
                    <div className="space-y-3">
                        <div className="flex items-center justify-between rounded-lg bg-slate-50 p-3">
                            <span>Google</span>
                            <Badge variant="success">Applied</Badge>
                        </div>
                        <div className="flex items-center justify-between rounded-lg bg-slate-50 p-3">
                            <span>Microsoft</span>
                            <Badge variant="warning">Interview</Badge>
                        </div>
                        <div className="flex items-center justify-between rounded-lg bg-slate-50 p-3">
                            <span>Amazon</span>
                            <Badge variant="danger">Rejected</Badge>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
}

export default HeroImage;