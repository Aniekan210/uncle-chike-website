import Link from 'next/link';

const page = () => {

  return (
    <>
      <h1>Home Page</h1>
      <Link href='/about'>Go to About</Link>
    </>
  );
}

export default page