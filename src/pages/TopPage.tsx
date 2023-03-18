import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

export const TopPageApp = () => {
  return (
    <div className="mt-16 flex flex-col items-center space-y-10">
      <div className="flex flex-col space-y-4">
        <div className="mb-2 text-center">Material-UI and React Learn by building projects</div>
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
      <div className="flex flex-col space-y-4">
        <div className="mb-2 text-center">
          React - The Complete Guide (incl Hooks, React Router, Redux)
        </div>
        <div className="flex flex-wrap items-center justify-center gap-5">
          <Button variant="outlined" component={Link} to="/react-the-complete-guide/expenses">
            Expenses
          </Button>
          <Button variant="outlined" component={Link} to="/react-the-complete-guide/course-goals">
            Course Goals
          </Button>
          <Button variant="outlined" component={Link} to="/react-the-complete-guide/modal">
            Modal
          </Button>
          <Button variant="outlined" component={Link} to="/react-the-complete-guide/login-logout">
            Login Logout
          </Button>
          <Button variant="outlined" component={Link} to="/react-the-complete-guide/food-order">
            Food Order
          </Button>
          <Button variant="outlined" component={Link} to="/react-the-complete-guide/http-request">
            Http Request
          </Button>
          <Button variant="outlined" component={Link} to="/react-the-complete-guide/custom-hooks">
            Custom Hooks
          </Button>
          <Button variant="outlined" component={Link} to="/react-the-complete-guide/forms">
            Forms
          </Button>
          <Button
            variant="outlined"
            component={Link}
            to="/react-the-complete-guide/food-order-forms-and-http">
            Food Order Forms and Http
          </Button>
          <Button
            variant="outlined"
            component={Link}
            to="/react-the-complete-guide/state-management">
            State Management
          </Button>
          <Button
            variant="outlined"
            component={Link}
            to="/react-the-complete-guide/state-management-advanced">
            State Management Advanced
          </Button>
          <Button variant="outlined" component={Link} to="/react-the-complete-guide/react-router">
            React Route
          </Button>
          <Button
            variant="outlined"
            component={Link}
            to="/react-the-complete-guide/react-router-practice">
            React Router Practice
          </Button>
          <Button variant="outlined" component={Link} to="/react-the-complete-guide/authentication">
            Authentication
          </Button>
          <Button variant="outlined" component={Link} to="/react-the-complete-guide/animation">
            Animation
          </Button>
          <Button
            variant="outlined"
            component={Link}
            to="/react-the-complete-guide/contextapi-and-hooks">
            Context API and Hooks
          </Button>
          <Button variant="outlined" component={Link} to="/react-the-complete-guide/testing">
            Testing
          </Button>
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        <div className="mb-2 text-center">Firebase Authentication</div>
        <div className="flex flex-wrap items-center justify-center gap-5">
          <Button variant="outlined" component={Link} to="/firebase-authentication/basics">
            Basics
          </Button>
        </div>
      </div>
    </div>
  );
};

//      <Route path="authentication/*" element={<Authentication />} />
//      <Route path="animation" element={<Animation />} />
//      <Route path="contextapi-and-hooks/*" element={<ContextApiAndHooks />} />
//      <Route path="testing/*" element={<Testing />} />
