import Link from 'next/link';
import AnimatedSquare from '@/components/AnimatedSquare/AnimatedSquare.js';

const page = () => {

  return (
    <>
      <h1>Home Page</h1>
      <Link href='/about'>Go to About</Link>
      <AnimatedSquare />
    </>
  );
}

export default page