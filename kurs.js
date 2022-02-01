const popupOpen = document.querySelectorAll('.js-popup-open');
const modals = document.querySelectorAll('.modal');
const closeButton = document.querySelectorAll('.close-btn');

//LISTENERS
closeButton.forEach(button => button.addEventListener('click', () => {removeModals()}));

popupOpen.forEach((popup, i) => {
    popup.addEventListener('click', () => { 
        showModal(i);
    });
});


// FUNCTIONS


function showModal(index) {
    removeModals();
    modals[index].style.display='block';
}

function removeModals() {
    modals.forEach(modal => modal.style.display='none');
}



const formaregistracija = document.getElementById('formaregistracija');
const korisnickoime = document.getElementById('korisnickoime');
const lozinka = document.getElementById('lozinka');
const potvrdalozinke = document.getElementById('potvrdalozinke');
const mejl = document.getElementById('mejl');
const ime = document.getElementById('ime');
const prezime = document.getElementById('prezime');
const datumrodjenja = document.getElementById('datumrodjenja');
const broj = document.getElementById('broj');

formaregistracija.addEventListener('submit',e => {
    e.preventDefault();

    validateInputs();

});

const setError = (element,message) => {
const inputControl = element.parentElement;
const errorDisplay = inputControl.querySelector('.error');

errorDisplay.innerText = message;
inputControl.classList.add('error');
inputControl.classList.remove('success')
}
const setSucess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isNameValid = ime => {
const re = /[A-Z][a-zA-Z]+$/
return re.test(ime);
}

const isUsernameValid = korisnickoime => {
const re = /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/
return re.test(korisnickoime)
}

const isPassValid = lozinka => {
const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
return re.test(lozinka)
}

const isMejlValid = mejl => {
const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
return re.test(mejl)
}

const isMobileValid = broj => {
const re = /^(\+381)?(\s|-)?6(([0-6]|[8-9])\d{8}|(77|78)\d{7}){1}$/
return re.test(broj);
}

const validateInputs = () => {
    const korisnickoimeVrednost = korisnickoime.value.trim();
    const lozinkaVrednost = lozinka.value.trim();
    const potvrdalozinkeVrednost = potvrdalozinke.value.trim();
    const mejlVrednost = mejl.value.trim();
    const imeVrednost = ime.value.trim();
    const prezimeVrednost = prezime.value.trim();
    const datumrodjenjaVrednost = datumrodjenja.value.trim();
    const brojVrednost = broj.value.trim();
    
     if (korisnickoimeVrednost === '') {
        setError(korisnickoime,'Obavezno polje');
    } else if (!isUsernameValid(korisnickoimeVrednost)) {
        setError(korisnickoime,"Korisnicko ime ne sme sadrzati _ ili .,vec samo slova i brojeve,mora biti dugacko od 8 do 20 karaktera");
    } else {
        setSucess(korisnickoime);
    }

    if (lozinkaVrednost === '') {
        setError(lozinka,'Obavezno polje!');
    } else if (!isPassValid(lozinkaVrednost)) {
        setError(lozinka,'Ovo ne moze biti lozinka,minimun 8 karaktera,barem 1 slovo i jedan broj!');
    } else  {
        setSucess(lozinka)
    }
    
  if (potvrdalozinke === '') {
      setError(potvrdalozinke,'Molim vas potvrdite lozinku!') 
 } else if (lozinkaVrednost !== potvrdalozinkeVrednost) {
     setError(potvrdalozinke,"Ne podudaraju se");

  } else {
      setSucess(potvrdalozinke)
      }

     if (mejlVrednost === '') {
        setError(mejl,'Polje je obavezno!');
 } else if (!isMejlValid(mejlVrednost)) {
     setError(mejl,"Nije validan mejl!");
 } else {
     setSucess(mejl);
 }

  if (imeVrednost === '') {
        setError(ime,'Ime je obavezno!');
    } else if (!isNameValid(imeVrednost)) {
        setError(ime,"Ime sadrzi samo slova!");
    } else {
        setSucess(ime);
    }

    if (prezimeVrednost === '') {
        setError(prezime,'Prezime je obavezno!');
    } else if (!isNameValid(prezimeVrednost)) {
        setError(prezime,"Prezime sadrzi samo slova!");
    } else {
        setSucess(prezime);
    }

    if (brojVrednost === '') {
     setError(broj,"Polje je obavezno!");
    } else if (!isMobileValid(brojVrednost)) {
        setError(broj,"Nije validan mobilni");
    } else {
        setSucess(broj)
  }
    

    }


let firebaseURL = "https://druga-kontrolna-default-rtdb.europe-west1.firebasedatabase.app/";
let coursesURL = firebaseURL + "kursevi.json";

let request = new XMLHttpRequest();

