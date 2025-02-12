import MainButton from '../../components/ui/Buttons/MainButton/MainButton';
import SecondaryButton from '../../components/ui/Buttons/SecondaryButton/SecondaryButton';

export default function Home() {
  return (
    <main className='page'>
      <h1>Portal Page</h1>
      <MainButton>Button</MainButton>
      <SecondaryButton isLoading>Secondary Button</SecondaryButton>
    </main>
  );
}
