function Main(){

buttonCreation(pages);





}
pages= setUpLibary();
Main();

function buttonCreation(sites){
curPage = window.location.href;
flag = 0;
cnt = 0;
for( i=0; i<sites.length;i++){
      if(sites[i].url.toUpperCase()==curPage.toUpperCase()){
	  flag++;
	  cnt = i;
	  }
}

if(flag){
  //create the button
  prvBtn=document.createElement("button");
  nxtBtn=document.createElement("button");
  prvBtn.innerHTML = "Previous Page";
  nxtBtn.innerHTML = "Next Page";
  var prvUrl = "window.location.href="+sites[cnt].previous_url;
  prvBtn.onclick=prvUrl;
  prvBtn.addEventListener('click',function(){window.location.href=sites[cnt].previous_url;});
  nxtBtn.addEventListener('click',function(){window.location.href=sites[cnt].next_url;});
  if(!(sites[cnt].previous_url=="Na")){
  document.getElementsByTagName("html")[0].appendChild(prvBtn);
  }
  if(!(sites[cnt].next_url=="Na")){
  document.getElementsByTagName("html")[0].appendChild(nxtBtn);
  }
  if(flag >= 2){
	  //Output the Link occurs twice in the library
	  
  }
  
}


}


function setUpLibary(){
lead ="http://2018.igem.org/Team:Purdue/";
pages =[];
pages.push(new setup(lead+"History",lead+"Team","Na"));
pages.push(new setup(lead+"Team",lead+"Description",lead+"History"));
pages.push(new setup(lead+"Description",lead+"Human_Practices",lead+"Team"));
pages.push(new setup(lead+"Human_Practices",lead+"Genetic_Pathway",lead+"Description"));
pages.push(new setup(lead+"Genetic_Pathway",lead+"Design",lead+"Human_Practices"));
pages.push(new setup(lead+"Design",lead+"Safety",lead+"Genetic_Pathway"));
pages.push(new setup(lead+"Safety",lead+"Experiments",lead+"Design"));
pages.push(new setup(lead+"Experiments",lead+"Collaborations",lead+"Safety"));
pages.push(new setup(lead+"Collaborations",lead+"Public_Engagement",lead+"Experiments"));
pages.push(new setup(lead+"Public_Engagement",lead+"Applied_Model",lead+"Collaborations"));
pages.push(new setup(lead+"Applied_Model",lead+"Hardware",lead+"Public_Engagement"));
pages.push(new setup(lead+"Hardware",lead+"Results",lead+"Applied_Model"));
pages.push(new setup(lead+"Results",lead+"Parts",lead+"Hardware"));
pages.push(new setup(lead+"Parts",lead+"Model",lead+"Results"));
pages.push(new setup(lead+"Model",lead+"Acknowledgement",lead+"Parts"));
pages.push(new setup(lead+"Acknowledgement","http://igem.org/2018_Judging_Form?team=Purdue",lead+"Model"));
// Add each page to this libary
return pages


}
function setup(url, next_url, previous_url){
this.url = url;
this.next_url = next_url;
this.previous_url = previous_url;
}
