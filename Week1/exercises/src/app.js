import React from 'react';
import ReactDOM from 'react-dom';
import delivery from './imgs/f-delivery.png';
import coin from './imgs/coin.png';
import chat from './imgs/chat.png';
import {HobbyList} from './hobbies';
import {Guarantee} from './customers';
import {Counter} from './higher10';


//exercise 1
// export class App extends React.Component{
//     render(){
//         return <HobbyList/>;
//     }
// }


//exercise 2
// export class App extends React.Component{
//     render(){
//         return (
//             <div style={{display:'flex', textAlign:'center', justifyContent:'space-around', margin:'auto'}}>
//                 <Guarantee title="Free Shipping" img={delivery} />
//                 <Guarantee title="100% Money back" img={coin} />
//                 <Guarantee title="Online support 24/7" img={chat} />
//             </div>
//         );
//     }
// }


//exercise 3
// export class App extends React.Component{
//     render(){
//         return <Counter/>;
//     }
// }