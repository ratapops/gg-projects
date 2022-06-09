import Head from "next/head";
import Link from "next/link";
// import { createFirebaseApp } from "../firebase/clientApp";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useEffect } from "react";

// const app = createFirebaseApp();

// const getUser = async () => {
//   const db = getFirestore(app);
//   const docRef = doc(db, "users", "aIj08MaLmoMOXTDdwQBB");
//   const docSnap = await getDoc(docRef);

//   if (docSnap.exists()) {
//     console.log("Document data:", docSnap.data());
//   } else {
//     // doc.data() will be undefined in this case
//     console.log("No such document!");
//   }
// };

export default function Home() {
  const pagesPath = {
    crypto: "/crypto-prices",
  };
  return (
    <div>
      <div>
        <Head>
          <title>GG - Projects</title>
          <link rel="icon" href="favicon.ico" />
        </Head>
      </div>

      <div className="h-screen text-center bg-gradient-to-r from-cyan-500 to-blue-500  py-8">
        <h1 className="text-2xl font-bold">
          Hello everyone please select one of my projects :)
        </h1>

        <div className="flex flex-col items-center">
          {/* <button
            type="button"
            className=" border rounded my-4 py-2 bg-white hover:bg-orange-400"
            onClick={getUser}
          >
            01
          </button> */}
          <Link href={pagesPath.crypto}>
            <button
              type="button"
              className=" border rounded my-4 py-2 bg-white hover:bg-orange-400"
            >
              02
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
