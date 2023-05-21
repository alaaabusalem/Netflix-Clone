import ModalUpdate from './ModalUpdate';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ModalDelet from'./ModalDelet';
//import Form from 'react-bootstrap/Form';

import { useState } from 'react';
function FavListCard(props){
  const [itemFlag, setitemFlag] = useState({});
  const [showFlag, setshowFlag] = useState(false);
  const [showFlagDelet, setshowFlagDelet] = useState(false);
  function handleShowFlag() {
    setshowFlag(true);
  }
  function handleCloseFlag() {
    setshowFlag(false);
    setitemFlag({});
  }
  function handleShowFlagDelet() {
    setshowFlagDelet(true);
     
  }
  function handleCloseFlagDelet() {
    setshowFlagDelet(false);
    setitemFlag({});
  }
  
 return(
    <>
    {props.favlist.map(item=>{
      return (
     <>
     <Card style={{ width: '18rem' }} Key={item.id} border="primary">
        <Card.Img variant="top" src={item.poster_path} alt='image' />
        
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>
          {item.release_date}
          </Card.Text>
         
          <Card.Text>
            {item.overview}
          </Card.Text>
          <Card.Header>Your Comment</Card.Header>
          <Card.Text>
            {item.comment}
          </Card.Text>
          <Button variant="primary" onClick={()=>{handleShowFlag();setitemFlag(item);}}> update</Button>
          <Button variant="danger" onClick={()=>{handleShowFlagDelet();setitemFlag(item);}}> Delet</Button>
        </Card.Body>
      </Card>
      
     </>
     
        );
     })}
     <ModalUpdate handleShowFlag={handleShowFlag} handleCloseFlag={handleCloseFlag} showFlag={showFlag} item={itemFlag}/>

     <ModalDelet handleShowFlagDelet={handleShowFlagDelet} handleCloseFlagDelet={handleCloseFlagDelet} showFlagDelet={showFlagDelet} item={itemFlag}/>    </>
 )
}
export default FavListCard;