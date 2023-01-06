
function submitbtn(){
    let btn
    var name=document.getElementById("name").value.trim()
    var mail=document.getElementById("email").value.trim()
    var mob=document.getElementById("mobile").value.trim()
    var message=document.getElementById("message").value.trim()
    var sub=document.getElementById("subject").value.trim()

    if(name===""||mail===""||mob===""||message==="" || sub==="")
    {
        alert("Please fill all fields")
        btn =false;
    }
    else if(!/^([a-zA-Z0-9\_.]+)@([a-zA-Z0-9]+).([a-z]+).([a-z]+)?$/.test(mail))
    {
        alert("Please re-check at email")
        btn =false;
     }
     else if(!/^\d+$/.test(mob))
     {
        alert("Please enter your phone number correctly")
        btn =false;
     }
     else if(!/^[a-zA-Z]$/.test(name))
     {
        alert("Please enter your phone number correctly")
        btn =false;
     }


    return btn;

}
