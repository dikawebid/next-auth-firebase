import { Center, Text } from '@chakra-ui/react';
import LandingLayout from '../layouts/Landing';
import styles from '../styles/Home.module.css';

const Home = () => {
  const head = {
    title: 'Home | Undang Kamu',
    desc: 'Undang Kamu adalah Undangan Digital Online Kekinian, bisa untuk mengundang pernikahan anda dan acara-acara lain.',
  };

  return (
    <LandingLayout head={head}>
      <Center height="100vh">
        <Text>Undang Kamu</Text>
      </Center>
    </LandingLayout>
  );
};

export default Home;
