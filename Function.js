function color_change(){
	var color = prompt("What color?")
	if(color!="" && color!=null){
		this.style.backgroundColor=color
    }
    if(color == "white"){
    	document.body.style.backgroundColor = "black"
    }else{
    	document.body.style.backgroundColor = "white"	
    }
}