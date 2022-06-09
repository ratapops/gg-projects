function Crypto({ data }) {
    console.log(data)

  return (
    <div>
      <h1>Crypto page</h1>
    </div>
  );
}



// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get data
  const res = await fetch("https://api.bitkub.com/api/market/ticker");
  const data = await res.json();
  console.log(data)

  // By returning { props: { data } }, the HomePage component
  // will receive `data` as a prop at build time
  return {
    props: { data },
  };
}


export default Crypto
