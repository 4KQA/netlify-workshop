import React from 'react';

import Hero from "../components/Hero/Hero";

  export default function Home({products}) {
    const [hydrated, setHydrated] = React.useState(false);
    React.useEffect(() => {
      setHydrated(true);
    }, []);
    if(!hydrated) {
      return null;
    } 
    return (
      <>
      <Hero products={products} />
      </>
  );
}
