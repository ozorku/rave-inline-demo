const API_publicKey = "PUBLIC TEST KEY";

function payWithRave() {
 var email = document.getElementById("email_input").value;
 var amount = 2000;

 /* This checks if email input is valid */
 checkEmail =
  email.length < 256 &&
  /^[^@]+@[^@]+[A-Za-z0-9]{2,}\.[^@]+[A-Za-z0-9]{2,}$/.test(email);

 // check if email is valid
 if (!checkEmail) {
  alert("Please provide a valid email");
  return;
 } else {
  var x = getpaidSetup({
   PBFPubKey: API_publicKey,
   customer_email: email,
   amount,
   customer_phone: "234099940409",
   currency: "NGN",
   txref: "rave-123456",
   meta: [
    {
     metaname: "flightID",
     metavalue: "AP1234"
    }
   ],
   onclose: function() {},
   callback: function(response) {
    var txref = response.tx.txRef; // collect txRef returned and pass to a 					server page to complete status check.
    console.log("This is the response returned after a charge", response);
    if (
     response.tx.chargeResponseCode == "00" ||
     response.tx.chargeResponseCode == "0"
    ) {
     // redirect to a success page
    } else {
     // redirect to a failure page.
    }

    x.close(); // use this to close the modal immediately after payment.
   }
  });
 }
}
