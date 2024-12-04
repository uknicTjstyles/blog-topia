import { useEffect} from 'react';
import { useRouter } from 'next/navigation';
import { FC } from 'react';


const Logout: FC = () => {
  const router = useRouter();


  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Clear local storage and redirect
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      router.push('/'); // Redirect to home
      
    }
    
  }, [router]);

  return <>
   
  </>;
};

export default Logout;
