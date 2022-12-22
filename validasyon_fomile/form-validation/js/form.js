function printError(Id, Msg) {
    document.getElementById(Id).innerHTML = Msg;
}

function validateForm1() {

    const fname = document.Form.fname.value;
    const lname = document.Form.lname.value;
    const email = document.Form.email.value;
    const mobile = document.Form.mobile.value;
    const password = document.Form.password.value;
    const password2 = document.Form.password2.value;

    // const country = document.Form.country.value;
    // const gender = document.Form.gender.value;
    

    // const nameErr = emailErr = mobileErr = idType = genderErr = true;
    let fnameErr=true;
    let lnameErr = true;
    let emailErr = true;
    let mobileErr = true;
    let passwordErr =true
    let passwordErr2 =true;

    

    if(fname == "") {
        printError("fnameErr", "Please enter your firstname");
        const elem = document.getElementById("name");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
    } else {
        const regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(fname) === false) {
            printError("fnameErr", "Please enter a valid name");
            const elem = document.getElementById("name");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else {
            printError("fnameErr", "");
            fnameErr = false;
            const elem = document.getElementById("name");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");

            
        }
    }
    
    if(lname == "") {
        printError("lnameErr", "Please enter your lastname");
        const elem = document.getElementById("lname");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
    } else {
        const regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(lname) === false) {
            printError("lnameErr", "Please enter a valid name");
            const elem = document.getElementById("lname");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else {
            printError("lnameErr", "");
            lnameErr = false;
            const elem = document.getElementById("lname");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");

            
        }
    }

    if(email == "") {
        printError("emailErr", "Please enter your email address");
         const elem = document.getElementById("email");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
    } else {
        
        const regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
            const elem = document.getElementById("email");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else{
            printError("emailErr", "");
            emailErr = false;
             const elem = document.getElementById("email");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");

        }
    }
    
 
    if(mobile == "") {
        printError("mobileErr", "Please enter your mobile number");
        const elem = document.getElementById("mobile");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
    }else if(mobile.length ==8){
        console.log(mobile.length);
        printError("mobileErr", "");
        mobileErr = false;
        const elem = document.getElementById("mobile");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");

    }else {
        printError("mobileErr", "Please enter a valid 8 digit mobile number");
        const elem = document.getElementById("mobile");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
    }

    if(password == "" && password2  == "") {
        printError("passwordErr", "Please enter your password");
        printError("passwordErr2", "Please enter your password");

        const elem = document.getElementById("password");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");

            const elem2 = document.getElementById("password2");
            elem2.classList.add("input-2");
            elem2.classList.remove("input-1");
    }else if(password == "" && password2  !== "") {
        printError("passwordErr", "");
        const elem = document.getElementById("password");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");

            const elem2 = document.getElementById("password2");
            elem2.classList.add("input-1");
            elem2.classList.remove("input-2");
    }else if(password !== "" && password2  == "") {
    printError("passwordErr2", "Please confirm your password");
    const elem = document.getElementById("password");
        elem.classList.add("input-1");
        elem.classList.remove("input-2");

        const elem2 = document.getElementById("password2");
            elem2.classList.add("input-2");
            elem2.classList.remove("input-1");
}
else if(password !==  password2 ) {
    printError("passwordErr", "Password dont match");
    const elem = document.getElementById("password");
        elem.classList.add("input-2");
        elem.classList.remove("input-1");

        printError("passwordErr2", "Password dont match");
    const elem2 = document.getElementById("password2");
        elem2.classList.add("input-2");
        elem2.classList.remove("input-1");
}
    else {
        printError("passwordErr", "");
        passwordErr = false;
        passwordErr2 = false;

        const elem = document.getElementById("password");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");
    
            printError("passwordErr2", "");
        const elem2 = document.getElementById("password2");
            elem2.classList.add("input-1");
            elem2.classList.remove("input-2");   
    }
    // if((fnameErr || lnameErr || emailErr || mobileErr || idType || genderErr) == true) {
    if((fnameErr && lnameErr && emailErr && mobileErr && passwordErr && passwordErr2) == true)
       return true;
    else if((fnameErr || lnameErr || emailErr || mobileErr || passwordErr || passwordErr2) == true)
        return true;
    return false
};


function validateForm2() {
    let idType = document.Form2.idType.value;
    // console.log(idType);
    let id1 = document.Form2.id1.value;
    const gender = document.Form2.gender.value;
    const checkbox = document.getElementsByClassName('input-checkbox');

    let idTypeErr = true ;
    let idErr = true;
    let genderErr = true;
    let checkboxErr = true;
    
    if(idType == " ") {
        printError("idTypeErr", "Please select a choice");
        const elem = document.getElementById("idType");
            elem.classList.add("input-4");
            elem.classList.remove("input-3");
    } else {
        printError("idTypeErr", "");
        idTypeErr = false;
        const elem = document.getElementById("idType");
            elem.classList.add("input-3");
            elem.classList.remove("input-4");
    }
    if(idType === 'NIF'){
        
        console.log(id1.length)
        if (id1.length === 10) {
            // console.log(id.length);
            idErr = false;
            printError("idErr", "");
            const elem = document.getElementById("id1");
            elem.classList.add("input-3");
            elem.classList.remove("input-4");
        }else{
            console.log('nok');
            const elem = document.getElementById("id1");
            printError("idErr", "Please  Nif can only 10 number");
            elem.classList.add("input-4");
            elem.classList.remove("input-3");
        }
    }else if(idType ==' '){
        console.log('anvm m')
        printError("idErr", "Please choose NiN or NIF");
        const elem = document.getElementById("id1");
        elem.classList.add("input-4");
        elem.classList.remove("input-3");
    }else{
        console.log('NIN')
        if (id1.length == 12) {
            console.log('ok');
            idErr = false;
            printError("idErr", "");
            const elem = document.getElementById("id1");
            elem.classList.add("input-3");
            elem.classList.remove("input-4");
            
        }else{
            console.log('nok');
            const elem = document.getElementById("id1");
            printError("idErr", "Please  NIN can only 12 number");
            elem.classList.add("input-4");
            elem.classList.remove("input-3");
        }
    }
    // console.log(id);
    if(gender !== "male" && gender !== 'female'){
    console.log(gender) 
        printError("genderErr", "Please select your gender");
        const elem = document.getElementById("gender");
            elem.classList.add("input-4");
            elem.classList.remove("input-3");
    } else {
        printError("genderErr", "");
        genderErr = false;
        const elem = document.getElementById("gender");
            elem.classList.add("input-3");
            elem.classList.remove("input-4");
    }
    // checkbox
    const nodeChoices = form.querySelectorAll('input[name=choice]:checked')
    let choices = []
    // rekipere chak valè pou chak nod ki kwoche
    for(let i = 0; i<nodeChoices.length;i++){
          choices.push( nodeChoices[i].value )
        }
        console.log(choices);
//    console.log(checkbox.value);
    if((idTypeErr && idErr && genderErr ) == true)
       return true;
    else if((idTypeErr || idErr || genderErr) == true)
        return true;
    return false
}

// const allInput = document.querySelectorAll('input')
// console.log(allInput);
// console.log(allInput);
// allInput.forEach((el) => {
//   el.onfucus = function(event){
//     event.classList.remove("flou")
//     event.classList.add("fokis")
//     console.log(event);
//   }
// })
// allInput.forEach((el) => {
//     el.onblur = function(event){
//         event.classList.remove("fokis")
//         event.classList.add("flou")
//       console.log(event);
//     }
//   })
// ment.getElementById('step-2').style.display = 'none'



let non,siyati,imel,telefon,modpas,idtip,id,seks,intere;

const form = document.getElementById('step-1')
console.log(form);
form.addEventListener('submit', function(event){
  event.preventDefault()
//   console.log(validateForm2());
    let validation = validateForm1()
    if(validation == false){
        console.log('li bon');
          // rekipere done yo
  const data = new FormData(form); 

        document.getElementById('step-1').style.display = 'none'
        document.getElementById('step-2').style.display = 'block'
        // const infos = document.getElementById('infos')
        non = data.get('fname')
        console.log(non);
        siyati = data.get('lname')
        console.log(siyati);
        imel = data.get('email')
        console.log(imel);
        telefon = data.get('mobile')
        console.log(telefon);
        modpas = data.get('password')
        console.log(modpas);

        // const name = data.get('lname')
        // let information ={Non:{data.get('fname')},Siyati:{data.get('lname')},Imel:{data.get('email')},Phone:`+509 ${data.get('mobile')}`,Modpas: `${data.get('password')`};
        // // eleman.append()
        // const nodeChoices = form.querySelectorAll('input[name=choice]:checked')
        // let choices = []
        // // rekipere chak valè pou chak nod ki kwoche
        // for(let i = 0; i<nodeChoices.length;i++){
        //       choices.push( nodeChoices[i].value )
        //     }
        const form2 = document.getElementById('step-2')
        console.log(form2);
        form2.addEventListener('submit', function(event){
          event.preventDefault()
          let validation2 = validateForm2()
          console.log(validation2);

          if(validation2 == false){
            console.log('li bon');//   
            document.getElementById('step-2').style.display = 'none'
            document.getElementById('step-3').style.display = 'block'
            // Ka gen plizyè ki kwoche.
            const nodeChoices = Form2.querySelectorAll('input[name=choice]:checked')
            console.log(nodeChoices);
            let choices = []
            // rekipere chak valè pou chak nod ki kwoche
            for(let i = 0; i<nodeChoices.length;i++){
                    choices.push( nodeChoices[i].value )
                    console.log(choices);
                }
            const idtip =idType.value
            const id =id1.value
            const seks =Form2.gender.value
            infos.innerHTML =`Non: ${non}</br> Siyati: ${siyati}</br> Imel: ${imel}</br> Telefon: +509 ${telefon}</br>Modpas: ${modpas}</br>Id-Tip: ${idtip}</br> NIF/NIN: ${id}</br> Seks: ${seks} </br>Intere: ${choices}`
            // console.log(infos);
            }

        })        
    }else{
        console.log('li pa bon');
    }
   
})


// 

// const next = document.getElementById('register-form')
// form.onsubmit = function(event){
//   event.preventDefault()
//   validateForm() 

//   // rekipere done yo
//   const data = new FormData(form); 

// //   let result = document.getElementById('result')
// document.getElementById('step-1').style.display = 'none'
//         document.getElementById('step-2').style.display = 'block'
// console.log( 
  
// }