import { useRouter } from 'next/router';

export default function Product() {
  const router = useRouter();
  const { slug } = router.query; // dynamically get the slug from URL

  return <h1>Product Page: {slug}</h1>;
}
