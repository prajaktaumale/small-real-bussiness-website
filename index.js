var navstatus = 0; //0 means hidden and 1 means show
function openNav()
{
    if(!navstatus){
    $('.maindiv').css('width','15%') //jquery statement
    $('.dropdown').css('display','block')
    navstatus = 1
    }
    else{
        $('.maindiv').css('width','0')
        $('.dropdown').css('display','none')
        navstatus = 0
    }
}
var offerstatus = 0;
function openVoucher()
{
    if(!offerstatus){
        $('.offer1').css('display','block')
        offerstatus = 1
    }
    else{
        $('.offer1').css('display','none')
        navstatus = 0
    }
}
var timingstatus = 0;
function openTiming(){
    if(!timingstatus){
        $('.display-timing').css('display','block')
        timingstatus = 1
    }
    else{
        $('.display-timing').css('display','none')
        timingstatus = 0
    }
}