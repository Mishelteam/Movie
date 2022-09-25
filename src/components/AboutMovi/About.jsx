// import React, {useEffect, useState} from 'react';
// import { useLocation } from 'react-router-dom';
// import axios from 'axios';

// const About = () => {
//     const props = useLocation()
//     const id = props.state.id
//     const [data, setData] = useState([])
//     useEffect(() => {
//          axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=acfaeb6837638498f011e5e16a9e305d&language=en-US`)
//         .then(res => {
//             setData(res.data);
//             console.log(res.data);
//         })
//         .catch(err => {
//             console.log(err);
//         })
//     }, []);

//     return (
//         <div>
//             {
//                 (data.length != 0) ?
//                 <>Waiting</>
//                 :
//                 <>
//                 {
//                   data.map((item, index)=> {
//                     return(
//                         <div>
//                             <h1>{item.name}</h1>
//                             <p>{item.status}</p>
//                         </div>
//                     )
//                 })   
//                 }
//                 </>
               
//             }
//         </div>
//     );
// }

// export default About;
