$(document).ready(function(){
	
	$("div#form1").append(			// Creating Form div and adding <h2> and <p> paragraph tag in it.
		$("<h3/>").text("Contactez-nous"),
		$("<p/>").text("Indiquez votre nom, votre e-mail et laissez-nous un message. Nous vous contacterons au plus vite!"),	
 
        $("<form/>",{action:'#', method:'#'}).append(   // Create <form> tag and appending in html div form1.
		$("<input/>", {type:'text', id:'vname', name:'name', placeholder:'Nom'}),  // Creating input element with attribute
		$("<input/>", {type:'text', id:'vemail', name:'email', placeholder:'Email'}),
		$("<textarea/>", {rows:'5px', cols:'27px', type:'text', id:'vmsg', name:'msg', placeholder:'Message'}),
		$("<br/>"),
		$("<input/>", {type:'submit', id:'submit', value:'Envoyer'})
		)
	  )
  
});	
