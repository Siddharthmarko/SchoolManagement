import { useId } from "react";

let dataBase = [
    {
  _id: 0,
  FirstName: "Rajesh",
  LastName: "Kumar",
  EmailAddress: "rajeshkumar@gmail.com",
  Password: "1234",
  createdOn: "10/03/2024",
  Groups: [
    // first group
    { _id: 0,
      Name: "शिक्षा समूह - दिल्ली", 
      Address: "C-45, वसंत विहार, नई दिल्ली, दिल्ली 110057", 
      Contact_No: "9811234567", 
      EmailId: "shikshasamuhdelhi@gmail.com",
      CreatedBy: "राजेश कुमार", 
      Schools: [
       
        { _id: 0,
          Name: "सरस्वती विद्या मंदिर", 
          Address: "E-23, द्वारका, नई दिल्ली, दिल्ली 110075",
          ContactNo: "9123456780",  
        },
          
        { _id: 1,
          Name: "दिल्ली पब्लिक स्कूल", 
          Address: "B-4, वसंत कुंज, नई दिल्ली, दिल्ली 110070",
          ContactNo: "9876543210",
        }
      ]
    }
  ]
},
];

// delete group 
export function deleteGroup(user_id, idx){
  let arr = dataBase[user_id].Groups;
  // console.log(arr);
  arr.splice(idx, 1);
  // console.log(arr);
}

// find user
export function getUser(email, passWord){
  let user = dataBase.find((item) => {
    return item.EmailAddress === email && item.Password === passWord;
  });

  if (user) {
    return user._id; 
  } else {
    return "user not found"; 
  }
}

// all group by userdid
export function allGroup(user_id){
  return dataBase[user_id].Groups;
}

// all schools by userid and group id
export function allschools(user_id, id){
  id = parseInt(id); 
  let userGroups = dataBase[user_id].Groups;
  // console.log(" ye raha group this = ",userGroups);
  const groupIndex = userGroups.findIndex(group => group._id === id);
  let rt = userGroups[groupIndex].Schools;
  return rt;
}

// getDate by id
// we can also get index of group from map funcion in the Group.jsx
export function getGroup(user_id, id){
  id = parseInt(id); 
  let userGroups = dataBase[user_id].Groups;
  const groupIndex = userGroups.findIndex(group => group._id === id);
  return userGroups[groupIndex];
}

// get particular schools
export function getSchool(user_id, groupid, id){
  id = parseInt(id); 
  let userGroupsSchools = dataBase[user_id].Groups[groupid].Schools;
  return userGroupsSchools[id];
}

// submit group
export function submitGroup(user_id, id, new_data){

  if(id){
    id = parseInt(id); 
    let userGroups = dataBase[user_id].Groups;
    const groupIndex = userGroups.findIndex(group => group._id === id);
    Object.assign(userGroups[groupIndex], new_data);
  }
  else {
    let groupArr = dataBase[user_id].Groups;
    let maxId = Math.max(...groupArr.map(group => group._id), 0);

    let data = {
      _id: maxId+1,
      Name: new_data.Name,
      Address: new_data.Address,
      Contact_No: new_data.Contact_No,
      EmailId: new_data.EmailId,
      CreatedBy: new_data.CreatedBy, 
      Schools: [],
    }
    groupArr.push(data);
  }
  alert("done");
   
  }
  // SUBMIT SCHOOLS
export function submitSchool(user_id, groupid, id, new_data){

  if(id !== '-1'){
    id = parseInt(id); 
    let userGroupsSchools = dataBase[user_id].Groups[groupid].Schools;
    Object.assign(userGroupsSchools[id], new_data);
  }
  else {
    let schoolArr = dataBase[user_id].Groups[groupid].Schools;
    let maxId = Math.max(...schoolArr.map(school => school._id), 0);

    let data = {
      _id: maxId+1,
      Name: new_data.Name,
      Address: new_data.Address,
      ContactNo: new_data.ContactNo,
    }
    schoolArr.push(data);
  }
  alert("done");
   
  }