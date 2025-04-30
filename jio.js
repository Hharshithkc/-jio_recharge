let otpg;

function page()
{
    window.location.href="page2.html";
}

function verify()
{
    let num=document.getElementById("num").value;
     if(num.length==0)
     {
        alert("Please Enter A Number");
        return false;
     }
     else if(num.length>10)
     {
        alert("Please Enter A Number Less Than 10 Digits");
        return false;
     }
     else if(isNaN(num))
     {
        alert("only numbers are allowed");
        return false;
     }
     else if(num<0)
     {
        alert("Please Enter A Positive Number");
        return false;
     }
     
     else if(num.length<10)
     {
        alert("Please Enter A Number Greater Than 10 Digits");
        return false;
     }

     else
     {
        page();
        alert("number is valid");
      
     }

    }


    
    function snd()
    {
        optg=Math.floor(100000+Math.random()*900000);
        alert("Your OTP is: "+optg);
        document.getElementById("btn3").disabled=true;
        document.getElementById("btn3").style.backgroundColor="grey"; 
    }

    function resend() {
      otpg = Math.floor(100000 + Math.random() * 900000); // Corrected 'math' to 'Math'
      alert("Your OTP is: " + otpg);
  }        

      function verifyotp()
      {
         if(otpg=="")
         {
            alert("Please Generate OTP First");
            return false;
         }
         
         else if(otpg==document.getElementById("otp1").value) 
            {
               alert("OTP is verified successfully"); 
               window.location.href="page3.html"; 
            } 
         else
            {
               alert("Invalid OTP"); 
               return false;
            }  
         
      }