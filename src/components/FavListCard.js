import updateModal from './updateModal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//import Form from 'react-bootstrap/Form';

import { useState } from 'react';
function FavListCard(props){
  const [showFlag, setshowFlag] = useState(false);
  function handleShowFlag() {
    setshowFlag(true);
  }
  function handleCloseFlag() {
    setshowFlag(false);}
  
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
          <Button variant="primary" onClick={()=>{handleShowFlag()}}> update</Button>
        </Card.Body>
      </Card>
      <updateModal handleShowFlag={handleShowFlag} handleCloseFlag={handleCloseFlag} showFlag={showFlag} item={item}/>
     </>
     
        );
     })}
     
    </>
 )
}
export default FavListCard;