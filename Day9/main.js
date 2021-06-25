var row='<tr>';
for(i=0;i<6;i++){
    row+='<td><i class="material-icons">person</i><td>';
}
row+='</tr>';
var content='';
for(i=0;i<6;i++){
    content+=row;
}
document.getElementById('tab').innerHTML=content;
var count_empty=36;
var count_filled=0;
document.getElementById('show').innerHTML=''+count_empty;
document.getElementById('show1').innerHTML=''+count_filled;
var box=document.querySelectorAll('i');
box.forEach( (link) => {
    link.addEventListener("click", function() {
        if(link.classList.contains('seatfilled')){
            link.classList.remove('seatfilled');
            link.innerHTML='person';
            count_empty++;
            count_filled--;
            document.getElementById('show').innerHTML=''+count_empty;
            document.getElementById('show1').innerHTML=''+count_filled;
        }
        else{
            link.classList.add('seatfilled');
            link.innerHTML='person_off';
            count_filled++;
            count_empty--;
            document.getElementById('show').innerHTML=''+count_empty;
            document.getElementById('show1').innerHTML=''+count_filled;
        }
})});
