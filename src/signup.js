
function submitInfo() {
    var name=$("#username").val();
    var gender=$(".gender:checked").val();
    var address=$("#address").val();
    var email=$("#email").val();
    var phone=$("#phone").val();
    var qualification=$(".qualification option:selected").val();
    // alert("Name:"+name+"\nGender:"+gender+"\nAddress:"+address+"\nEmail:"+email+"\nPhone:"+phone+"\nQualification:"+qualification);
    localStorage.name=name;
    localStorage.gender=gender;
    localStorage.address=address;
    localStorage.email=email;
    localStorage.phone=phone;
    localStorage.qualification=qualification;
}