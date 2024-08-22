import Link from 'next/link';
import HeroName from '@/components/HeroName.js';

const page = () => {

  return (
    <>
      <h1>Home Page</h1>
      <Link href='/about'>Go to About</Link>
      <HeroName />
    </>
  );
}

export default page