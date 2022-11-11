import Buttons from "./Buttons";
import Table from 'react-bootstrap/Table';


const DUMMYDATA=[
    {
        id:'1',
        name:'Stephen',
        lname:'Johnson',
        age:'22',
        item:'Apple'
    },
    {
        id:'2',
        name:'Olga',
        lname:'Robberts',
        age:'22',
        item:'Ball'
    },
    {
        id:'3',
        name:'Raphael',
        lname:'Hann',
        age:'22',
        item:'Boat'
    },
    {
        id:'4',
        name:'Stephanie',
        lname:'Blake',
        age:'19',
        item:'Pie'
    }
];


function Users(){
    return(
        <div>
        <Table striped bordered hover>
        <thead>
            <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Item</th>
            </tr>
        </thead>
        <tbody>
            {DUMMYDATA.map(user => (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.lname}</td>
                    <td>{user.age}</td>
                    <td>{user.item}</td>
                </tr>
            ))}
        </tbody>
        </Table>
        </div>
        
    );
}

export default Users;