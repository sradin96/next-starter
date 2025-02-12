import Banner from '../components/containers/Banner/Banner';
import MainButton from '../components/ui/Buttons/MainButton/MainButton';
import SecondaryButton from '../components/ui/Buttons/SecondaryButton/SecondaryButton';

export default function Home() {
  return (
    <main className='page'>
      <h1>Home Page</h1>
      <MainButton>Button</MainButton>
      <Banner />
      <SecondaryButton isLoading>Secondary Button</SecondaryButton>
    </main>
  );
}
