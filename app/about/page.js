import Link from 'next/link';

const page = () => {
    return (
    <>
        <h1>About page</h1>
        <Link href='/'>Go to Home</Link>
    </>
    );
}

export default page;