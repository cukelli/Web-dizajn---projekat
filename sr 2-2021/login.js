  $(document).ready(function() {

    let firebase = 'https://web-druga-kontrolna-default-rtdb.europe-west1.firebasedatabase.app/';

    let request = new XMLHttpRequest(); 

    let korisnickaimena = []   
    let lozinke = [] 

    let korisnici = {}  
    

    request.onreadystatechange = function (){  
        if (this.readyState == 4){
            if (this.status == 200){
                
                korisnici = JSON.parse(request.responseText);   
                console.log(korisnici)
                
                for (let i in korisnici){   
        
                    korisnickaimena.push(korisnici[i].korisnickoIme);
                    lozinke.push(korisnici[i].lozinka);
                }
            }
        
        }
       
    }
    request.open('GET', firebase + '/korisnici.json');  
    request.send();
   
    console.log(korisnickaimena,lozinke);



$("#Dugme").click(function(){

    // Prvo treba da definisemo promjenljive korisnickoime i lozinka, tj da preuzmemo vrijednosti koje je
    // korisnik unio. Input elementima u koje korisnik unosi korisnicko ime i lozinku smo dodijelili id-jeve, kako
    // bismo mogli preuzeti njihove vrijednosti (179. i 184. linija koda u index.html)
   let korisnickoime = document.getElementById("korisnickoImeLogin").value.trim();
   let lozinka = document.getElementById("lozinkaLogin").value.trim();

   
   
    const isUsernameValid = (korisnickoime) => {
        const re = /^(?=.{3,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/
        return re.test(korisnickoime) 
    }

    const isPassValid = (lozinka) => {

        
        const re = /^[0-9a-zA-Z]{8,}$/
      
        return re.test(lozinka)
    }

   




    if(isUsernameValid(korisnickoime)==false){
        alert("Molim vas unesite podatke!");
      
        return;
    }

  

  

    if(isPassValid(lozinka)==false){
        alert("Molimo Vas unesite validne podatke!");
        return;
    }

    doesUsernameExist = true;
    isPassCorrect = true;

    //obzirom da su korisnickaimena niz stringova,za provjeru koristimo funkciju indexof,
    // koja vraca index elementa u nizu ako se isti nalazi u tom nizu ili vraca -1 ako se ne nalazi
    if(korisnickaimena.indexOf(korisnickoime)===-1){
           
            doesUsernameExist = false;
        }
        else{

            x = korisnickaimena.indexOf(korisnickoime);
              if(lozinka != lozinke[x]){
           
            isPassCorrect = false;
        }
        }
        
       

        if (doesUsernameExist == false) {
            alert('Molimo Vas unesite validne podatke!');

        } else if (isPassCorrect == false) {
            alert('Molimo Vas unesite validne podatke!')
        } else {
            
            alert("Uspesno ste se prijavili")

            window.location.reload();

        }

       
    });

  })
      


 


  