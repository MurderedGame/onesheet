import './mySheets.css'
import {db} from "../../fs/firebaseConfig";
import React, { Component, useEffect, useState } from 'react';
import { Container } from '../../components/Container';
import {addDoc, collection, getDocs, getFirestore} from "firebase/firestore";

const MySheets = () => {
  const triggerText = 'Create Sheet';
  const onSubmit = (event) => {
    event.preventDefault(event);
    addDoc(collection(db, "sheets"), {
      name: event.target.name.value,
      class: event.target.class.value,
      race: event.target.race.value,
      str: event.target.str.value,
      dex: event.target.dex.value,
      con: event.target.con.value,
      int: event.target.int.value,
      wis: event.target.wis.value,
      cha: event.target.cha.value
      }
    ).then(r => alert("Added!"));
  };

  const [sheets, setSheets] = useState([]);
    const collectionRef = collection(db, "sheets")
    useEffect(() => {
        const getSheetList = async () => {
            try {
                const data = await getDocs(collectionRef);
                const filteredData = data.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id
                }));
                setSheets(filteredData);
                console.log(filteredData);
            }catch (e) {
                console.error(e);
            }
        };
        getSheetList().then(r => console.log("done"));
    }, []);
  
  return (
    <>
    <div className="container">
        <h3 className="p-3 text-center">Your Library of Sheets</h3>
        <table className="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Class</th>
                    <th>Race</th>
                </tr>
            </thead>
            <tbody>
                    {sheets && sheets.map(sheet =>
                        <tr key={sheet.id}>
                            <td>{sheet.name}</td>
                            <td>{sheet.class}</td>
                            <td>{sheet.race}</td>
                            <td>{sheet.str}</td>
                            <td>{sheet.dex}</td>
                            <td>{sheet.con}</td>
                            <td>{sheet.int}</td>
                            <td>{sheet.wis}</td>
                            <td>{sheet.cha}</td>
                        </tr>
                    )}
            </tbody>
        </table>
    </div>
    <div className="character">
    <Container triggerText={triggerText} onSubmit={onSubmit} />
    </div>
    </>
);
}

export default MySheets