import * as React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import {db} from "../../fs/firebaseConfig";
import { useEffect, useState } from 'react';
import { Container } from '../../components/Container';
import {addDoc, collection, getDocs, getFirestore} from "firebase/firestore";

const Library = () => {
  const [classes, setClasses] = useState([]);
    const classCollectionRef = collection(db, "classes")
    useEffect(() => {
        const getClassList = async () => {
            try {
                const data = await getDocs(classCollectionRef);
                const filteredData = data.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id
                }));
                setClasses(filteredData);
                console.log(filteredData);
            }catch (e) {
                console.error(e);
            }
        };
        getClassList().then(r => console.log("done"));
    }, []);

  const [races, setRaces] = useState([]);
    const raceCollectionRef = collection(db, "races")
    useEffect(() => {
        const getRaceList = async () => {
            try {
                const data = await getDocs(raceCollectionRef);
                const filteredData = data.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id
                }));
                setRaces(filteredData);
                console.log(filteredData);
            }catch (e) {
                console.error(e);
            }
        };
        getRaceList().then(r => console.log("done"));
    }, []);
  
  const [spells, setSpells] = useState([]);
    const spellCollectionRef = collection(db, "spells")
    useEffect(() => {
        const getSpellList = async () => {
            try {
                const data = await getDocs(spellCollectionRef);
                const filteredData = data.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id
                }));
                setSpells(filteredData);
                console.log(filteredData);
            }catch (e) {
                console.error(e);
            }
        };
        getSpellList().then(r => console.log("done"));
    }, []);

  return (
    <Tab.Container id="library" defaultActiveKey="class">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="class">Classes</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="race">Races</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="spell">Spells</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="class">
              <div className="container">
                <h3 className="p-3 text-center">All Classes Available</h3>
                <table className="table table-striped table-bordered">
                  <tbody>
                    {classes && classes.map(x =>
                      <tr key={x.id}>
                        <td>{x.name}</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="race">
            <div className="container">
              <h3 className="p-3 text-center">All Races Available</h3>
              <table className="table table-striped table-bordered">
                <tbody>
                  {races && races.map(x =>
                    <tr key={x.id}>
                      <td>{x.name}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            </Tab.Pane>
            <Tab.Pane eventKey="spell">
            <div className="container">
              <h3 className="p-3 text-center">All Spells Available</h3>
              <table className="table table-striped table-bordered">
                <tbody>
                  {spells && spells.map(x =>
                    <tr key={x.id}>
                      <td>{x.name}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  )
};

export default Library;