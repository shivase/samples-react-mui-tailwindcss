import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

export const TopPageApp = () => {
  return (
    <div className="mt-16 flex flex-col items-center space-y-10">
      <div className="flex flex-col space-y-4">
        <div className="mb-2">Material-UI and React Learn by building projects</div>
        <div className="flex flex-wrap items-center justify-center gap-5">
          <Button variant="outlined" component={Link} to="/creative">
            Creative Agency
          </Button>
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        <div className="mb-2 text-center">Tailwind CSS From Scratch Learn By Building Projects</div>
        <div className="flex flex-wrap items-center justify-center gap-5">
          <Button variant="outlined" component={Link} to="/tailwindcss-from-scratch/sandbox">
            TailwindCSS Sandbox
          </Button>
          <Button variant="outlined" component={Link} to="/tailwindcss-from-scratch/mini-projects">
            Mini Projects
          </Button>
          <Button variant="outlined" component={Link} to="/tailwindcss-from-scratch/clipboard">
            Clipboard Website
          </Button>
          <Button variant="outlined" component={Link} to="/tailwindcss-from-scratch/loopstudios">
            Loopstudios Website
          </Button>
          <Button variant="outlined" component={Link} to="/tailwindcss-from-scratch/shortly">
            Shortly Website
          </Button>
          <Button variant="outlined" component={Link} to="/tailwindcss-from-scratch/testimonial">
            Testimonial Grid Project
          </Button>
          <Button variant="outlined" component={Link} to="/tailwindcss-from-scratch/fylo">
            Fylo Website with Color Picker
          </Button>
          <Button variant="outlined" component={Link} to="/tailwindcss-from-scratch/bookmark">
            Bookmark Manager Website
          </Button>
        </div>
      </div>
    </div>
  );
};
