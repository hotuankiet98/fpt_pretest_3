var studentInfoId=document.getElementById("info-student-id");
window.onload = () => {
    // studentInfoId.innerHTML=document.write("<h2>Student Information</h2>")
//     studentInfoId.innerHTML="<div><h2>Student Information Successful Registration</h2>"+
//                             "<br>Name:"+localStorage.name+
//                             "<br>Gender:"+localStorage.gender+
//                             "<br>Address:"+localStorage.address+
//                             "<br>Email:"+localStorage.email+
//                             "<br>Phone:"+localStorage.phone+
//                             "<br>Qualification:"+localStorage.qualification+
//                             "</div>"
 
  studentInfoId.innerHTML=  "<div><h2>Student Information Successful Registration</h2>"+
                            "<table><tr><td>Name:</td><td>"+localStorage.name+"</td></tr>"+
                            "<tr><td>Gender:</td><td>"+localStorage.gender+"</td></tr>"+
                            "<tr><td>Address:</td><td>"+localStorage.address+"</td></tr>"+
                            "<tr><td>Email:</td><td>"+localStorage.email+"</td></tr>"+
                            "<tr><td>Phone:</td><td>"+localStorage.phone+"</td></tr>"+
                            "<tr><td>Qualification:</td><td>"+localStorage.qualification+"</td></tr>"+
                            "</table><br><a href='./signup.html'><h3>Click here to return to Student Page</h3></a></div>"
                            
};   
