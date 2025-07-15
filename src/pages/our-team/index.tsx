import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const OurTeam = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">Our Expert Team</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Meet our team of highly skilled and experienced healthcare professionals dedicated to your well-being.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Team members will be added here */}
        <p className="text-center text-gray-500">Team members coming soon...</p>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Join Our Team</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          We're always looking for talented healthcare professionals to join our team.
        </p>
        <Button asChild>
          <Link to="/contact#careers">
            View Current Openings
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default OurTeam;
