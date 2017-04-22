  function checkInputData()
  {
    var firstName = document.getElementById('first-name');
    var lastName = document.getElementById('last-name');
    var email = document.getElementById('email');
    var agreement = document.getElementById('agreement');

    var errorFirstName = "";
    var errorLastName = "";
    var errorEmail = "";
    var errorAgreement = "";

    var error = false;

    if (firstName.value.length < 3)
    {
      errorFirstName = "* Incorrect First Name, it must be at list 3 letters";
      error = true;
    }
    if (lastName.value.length < 5)
    {
      errorLastName += "* Incorrect Last Name, it must be at list 5 letters";
      error = true;
    }
    if (email.value.length === 0)
    {
      errorEmail += "* Email address can not be empty";
      error = true;
    }
    else if (email.value.indexOf('@') < 1 ||  email.value.lastIndexOf('.') < 1)
    {
      errorEmail += "* Incorrect email address";
      error = true;
    }
    if (agreement.checked == false)
    {
      errorAgreement += "* You must agree with terms of service";
      error = true;
    }

    document.getElementById('labelErrorFirstName').innerHTML = errorFirstName;
    document.getElementById('labelErrorLastName').innerHTML = errorLastName;
    document.getElementById('labelErrorEmail').innerHTML = errorEmail;
    document.getElementById('labelErrorAgreement').innerHTML = errorAgreement;

    if(error == false)
    {
      alert("Thank you! Your application has been submitted!");
    }
  }
