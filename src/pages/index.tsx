import Head from "next/head";
import Link from "next/link";
// import { createFirebaseApp } from "../firebase/clientApp";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import DateTime from "../components/DateTime";

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
  const columns = [
    {
      name: "Title",
      selector: (row: any) => row.title,
      sortable: true,
    },
    {
      name: "Year",
      selector: (row: any) => row.year,
    },
  ];

  const data = [
    {
      id: 1,
      title: "Beetlejuice",
      year: "1988",
    },
    {
      id: 2,
      title: "Ghostbusters",
      year: "1984",
    },
  ];

  const handleChange = ({ selectedRows }: any) => {
    // You can set state or dispatch with something like Redux so we can use the retrieved data
    console.log("Selected Rows: ", selectedRows);
  };

  return (
    <div>
      <div>
        <Head>
          <title>GG - Projects</title>
          <link rel="icon" href="favicon.ico" />
        </Head>
      </div>

      <DateTime></DateTime>

      <DataTable
        columns={columns}
        data={data}
        selectableRows
        onSelectedRowsChange={handleChange}
      />
      
      <Link href="/api/auth/login">
        <a>Login</a>
      </Link>
    </div>
  );
}
