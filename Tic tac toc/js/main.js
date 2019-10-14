
let palyerX = [];
var palyerO =[]
//palyer = "hi" ;//prompt ('Your name'); // take this from user name 
//palyer = "no";//prompt ('Your name','');
let marker = ["X" , "O"]; //how i cant replece this with option of emojy look later 
let urTurn = 0;
let stop = false;
let winerMatch =
[
[0 ,1 ,2 ,3 ],
[4 ,5 ,6 , 7 ],
[8 ,9 ,10 ,11 ],
[12, 13, 14, 15],
[0 , 4 , 8 , 12 ],
[1 , 5 , 9 ,13 ],
[2 , 6 , 10 , 14 ],
[3 , 7 , 11, 15 ],
[3 ,6, 9, 12 ],
[0 , 5 , 10 ,15 ]]; 




$('body').on('click', function(event){
    let id = event.target.id
    console.log(event.target.id)
});

$('.click').on('click', function(event){
    console.log(stop)
    if(!stop){
        if (event.target.innerText == '') {
            $(this).html(`<span> ${marker[urTurn]} </span> `)
            if (urTurn == 0){
                palyerX.push(Number(event.target.id) )
                console.log("Player X ")
                console.log(palyerX )

                checkWin(palyerX)
            } else {
                palyerO.push(Number(event.target.id) ) 
                console.log("Player O ")
                console.log(palyerO )
                checkWin(palyerO)
            } 
        swichPleyers(); 
        }
        else if (event.target.innerText != '') {
            alert("already teken")
        }
    }
   });

function swichPleyers() {
        if (urTurn == 0 ) { 
            urTurn = 1;
        }
        else { 
            urTurn = 0; 
            }
    }


// let winerMatch =
// [
// [0,1,2],
// [3,4,5],
// [6,7,8],
// [0,3,6],
// [1,4,7],
// [2,5,8],
// [0,4,8],
// [2,4,6]]; 





function checkWin(palye)
 { let j =0 ;
  for (let i=0; i< winerMatch.length; i++)
 {
     let win=true;
        if(palye.includes(winerMatch[i][j]) &&  palye.includes(winerMatch[i][j+1]) && palye.includes(winerMatch[i][j+2]) && palye.includes(winerMatch[i][j+3]) ){
          alert(marker[urTurn] + "win")
         stop = true;
            return win;

        }
 } return false 
}
    
  



