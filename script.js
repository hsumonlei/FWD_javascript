var popped = 0;

document.addEventListener('click',function(e){
    console.log(e.target);
    if(e.target.className === "ballon"){
        e.target.style.backgroundColor = 'white';
        e.target.textContent = "POP!";
        popped++;
        getAll();
    }
});

    //to check all ballons are popped
    function getAll(){
        console.log(popped);
        if (popped === 8){
           // console.log("All Done");
           var ballondiv = document.querySelector('#ballon-div');
           ballondiv.innerHTML = '';
           var noballondiv = document.querySelector('#no-ballons');
           noballondiv.style.display ='block';

        }
    }