import { useAuth } from '../../store/auth-context';
import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';

const Home = () => {
  const ctx = useAuth();

  return (
    <Card className="my-8 mx-auto w-[90%] max-w-[40rem] p-12 text-center">
      <h1>Welcome back!</h1>
      <Button type="button" onClick={ctx.onLogout}>
        Logout
      </Button>
    </Card>
  );
};

export default Home;
