function getUsers() {
  return getFetch('https://jsonplaceholder.typicode.com/users');
}

function getUserPosts(userId) {
  return getFetch('https://jsonplaceholder.typicode.com/posts', {
    userId: userId,
  });
}

function getFetch(url, params = {}) {
  return axios({
    url: url,
    method: 'GET',
    params: params,
  }).then((res) => res.data);
}

getUsers().then((users) => {
  users.forEach((user) => {
    getUserPosts(user.id).then((posts) => {
      console.log(user.name);
      console.log(posts.length);
    });
  });
});

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './style.css';

// function getUsers() {
//   return getFetch('https://jsonplaceholder.typicode.com/users');
// }

// function getUserPosts(userId) {
//   return getFetch('https://jsonplaceholder.typicode.com/posts', {
//     userId: userId,
//   });
// }

// function getFetch(url, params = {}) {
//   return axios({
//     url: url,
//     method: 'GET',
//     params: params,
//   }).then((res) => res.data);
// }

// export default function App() {
//   const [usersList, setUsersList] = useState([]);

//   useEffect(async () => {
//     const res = await getUsers();
//     // console.log(res);
//     setUsersList(res);
//   }, []);

//   useEffect(async () => {
//     usersLists.forEach((user) => {
//       getUserPosts(user.id).then((posts) => {
//         console.log(posts);
//       });
//     });
//   }, []);

//   console.log(usersList);
//   return (
//     <div>
//       <h1>List of users</h1>
//       {usersList.map((user) => {
//         console.log(user);
//         return (
//           <div>
//             <p>{user.name}</p>
//             <p>{user.email}</p>
//             <p>{user.username}</p>
//           </div>
//         );
//       })}
//     </div>
//   );
// }
