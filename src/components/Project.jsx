import { Users } from "lucide-react";
import { Card } from "./ui/card"; 

const projects = [
  {
    id: 1,
    title: "AutoLock",
    teamSize: 1,
    imageUrl: "/autolock.png",
    type: "python",
  },
  {
    id: 2,
    title: "McGill Booking",
    teamSize: 3,
    imageUrl: "/mcgill_booking.png",
    type: "React(html,css,js), XAMMP(php), AWS",
  },
  {
    id: 3,
    title: "Study Group",
    teamSize: 2,
    imageUrl: "/study.png",
    type: "Flutter(dart), Firebase",
  },
];

export default function Projects() {
  return (
    <div className="w-full max-w-screen-xl mx-auto p-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card key={project.id} className="group relative overflow-hidden rounded-lg">
            <div className="aspect-video relative">
              <img 
                src={project.imageUrl || "/placeholder.svg"} 
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              
              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    {project.type && <span className="text-sm text-white/80">{project.type}</span>}
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1 bg-black/50 text-white px-2 py-1 rounded">
                      <Users className="h-4 w-4" />
                      <span className="text-sm">{project.teamSize}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}