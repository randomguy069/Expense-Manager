import * as firebase from 'firebase';
import moment from 'moment';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

   
  
firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {firebase,googleAuthProvider,database as default};


// database.ref('expenses').on('child_added',(snapshot)=>{
//   console.log(snapshot.key,snapshot.val());
// });
// // database.ref('expenses').on('child_changed',(snapshot)=>{
// //   console.log(snapshot.key,snapshot.val());
// // });

// // database.ref('expenses').on('child_removed',(snapshot)=>{
// //   console.log(snapshot.key, snapshot.val());
// // })


// // database.ref('expenses').on('value',(snapshot)=>{
// //     const expenses = [];
// //   snapshot.forEach((childSnapshot)=>{
// //     expenses.push({
// //       id: childSnapshot.key,
// //       ...childSnapshot.val()
// //     });
// //   });
// //   console.log(expenses);
// // });

// // database.ref('expenses').once('value').then((snapshot)=>{
// //   const expenses = [];
// //   snapshot.forEach((childSnapshot)=>{
// //     expenses.push({
// //       id: childSnapshot.key,
// //       ...childSnapshot.val()
// //     });
// //   });
// //   console.log(expenses);
// // });
// // database.ref('expenses').push({
// //   description: 'Gobi',
// //   note: 'Rhea looted',
// //   amount: 60,
// //   createdAt: 2000
// // });



// // database.ref('notes/-LyoqMwgLYyQkUy7YoGM/').set({
// //   body: 'Die'
// // })






// /// database.ref('notes').push({
// //   food: 'Pizza',
// //   ingredients: 'Basil, Cheese, Base'
// // })

// // const firebaseNotes= {
// //   notes: {
// //      id1: {id:12,
// //       title: 'Eat Pizza',
// //       body: 'Pizza left over'},
// //       id2: {
// //         id:13,
// //   title: 'Eat Pasta',
// //   body: 'Pasta left over'
// //       }
// //   }
// // }

// // const notes = [{
// //   id:12,
// //   title: 'Eat Pizza',
// //   body: 'Pizza left over'
// // },{
// //   id:13,
// //   title: 'Eat Pasta',
// //   body: 'Pasta left over'
// // }];
// // database.ref('notes').set(notes);
// // database.ref().on('value',(snapshot)=>{
// //   const val = snapshot.val();
// //   console.log(`${val.name} works as ${val.job.title} at ${val.job.company} stationed at ${val.location}`)
// // })



// // const onValueChange =  database.ref().on('value',(snapshot)=>{
// //   console.log(snapshot.val());
// // },(e)=>{
// //   console.log("Error while fetching",e);
// // });
// // setTimeout(()=>{
// //   database.ref('age').set(39);
// // },3500);
// // setTimeout(()=>{
// //   database.ref().off(onValueChange);
// // },7000);
// // setTimeout(()=>{
// //   database.ref('age').set(99);
// // },10500);
// // database.ref('location/city').once('value').then((snapshot)=>{
// //   const val = snapshot.val();
// //   console.log(val);
// // }).catch((e)=>{
// //   console.log(e);
// // });


// // database.ref().set({
// //     name: 'Kaami 7',
// //     age: 23,
// //     stressLevel: 6,
// //     job: {
// //       title: 'Solution Architect',
// //       company: 'Vodafone'
// //     },
// //     isSingle: true,
// //     location: {
// //       city: 'Bengaluru',
// //       state: 'Karnataka',
// //       country: 'India'
// //     }
// // });
// // // database.ref().set('Man Utd');
// // database.ref('age').set(27);
// // database.ref('location/city').set('Mangaluru')
// // database.ref('attributes').set({
// //   height: '176cm',
// //   weight: '80kg'
// // });

// // database.ref('skills/programming').set({
// //       scripting : 'JS, NodeJS, Python',
// //       databasess: 'MongoDB, SQL'
// //     }).then(()=>{
// //       console.log("Data saved")
// //     }).catch((e)=>{
// //       console.log("Task failed",e);
// //     })

// // // database.ref('isSingle').remove().then(()=>{
// // //   console.log("removed");
// // // }).catch((e)=>{
// // //   console.log("Task failed",e);
// // // })


// // // database.ref().remove().then(()=>{
// // //   console.log("removed");
// // // }).catch((e)=>{
// // //   console.log("Task failed",e);
// // // })
// // //console.log('Request made to change the data');
// // database.ref('age').set(null).then(()=>{
// //   console.log("Age removed");
// // }).catch((e)=>{
// //   console.log(e);
// // })
// // database.ref().update({
// //   name: 'Ainsley',
// //   age: 69,
// //   job: 'Sol Architect',
// //   isSingle: null
// // }).then(()=>{
// //   console.log('Update performed')
// // }).catch((e)=>{
// //   console.log(e);
// // });
// // database.ref().update({
// //   job:'Product Owner',
// //   'location/city':'Buffalo'
// // }).then(()=>{
// //   console.log('Update performed')
// // }).catch((e)=>{
// //   console.log(e);
// // });
// // database.ref().update({
// //   stressLevel: 9,
// //   'job/company': 'Amazon',
// //   'location/city': 'Seattle'
// // }).then(()=>{
// //   console.log('Update performed')
// // }).catch((e)=>{
// //   console.log(e);
// // });