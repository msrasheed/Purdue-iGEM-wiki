function Main(){

pages= setUpLibary();
buttonCreation(pages);





}


function buttonCreation(sites){
curPage = window.location.href;
flag = 0;
cnt = 0;
for( i=0; i<sites.length();i++){
      if(sites[i].url.uppercase()==curPage.uppercase()){
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
  prvBtn.href = sites[cnt].previous_url;
  nxtBtn.href = sites[cnt].next_url;
  if(!(sites[cnt].previous_url=="Na")){
  document.append(prvBtn);
  }
  if(!(sites[cnt].next_url=="Na")){
  document.append(nxtBtn);
  }
  if(flag >= 2){
	  //Output the Link occurs twice in the libary
	  
  }
}


}


function setUpLibary(){
lead ="http://2018.igem.org/Team:Purdue/";
pages =[];
pages.append(new setup(lead+"History",lead+"Team","Na"));
pages.append(new setup(lead+"Team",lead+"Description",lead+"History"));
pages.append(new setup(lead+"Description",lead+"Human_Practices",lead+"Team"));
pages.append(new setup(lead+"Human_Practices",lead+"Genetic_Pathway",lead+"Description"));
pages.append(new setup(lead+"Genetic_Pathway",lead+"Design",lead+"Human_Practices"));
pages.append(new setup(lead+"Design",lead+"Safety",lead+"Genetic_Pathway"));
pages.append(new setup(lead+"Safety",lead+"Experiments",lead+"Design"));
pages.append(new setup(lead+"Experiments",lead+"Collaborations",lead+"Safety"));
pages.append(new setup(lead+"Collaborations",lead+"Public_Engagement",lead+"Experiments"));
pages.append(new setup(lead+"Public_Engagement",lead+"Applied_Model",lead+"Collaborations"));
pages.append(new setup(lead+"Applied_Model",lead+"Hardware",lead+"Public_Engagement"));
pages.append(new setup(lead+"Hardware",lead+"Results",lead+"Applied_Model"));
pages.append(new setup(lead+"Results",lead+"Parts",lead+"Hardware"));
pages.append(new setup(lead+"Parts",lead+"Model",lead+"Results"));
pages.append(new setup(lead+"Model",lead+"Acknowledgement",lead+"Parts"));
pages.append(new setup(lead+"Acknowledgement","http://igem.org/2018_Judging_Form?team=Purdue",lead+"Model"));
// Add each page to this libary
return pages


}
function setup(url, next_url, previous_url){
this.url = url;
this.next_url = next_url;
this.previous_url = previous_url;
}