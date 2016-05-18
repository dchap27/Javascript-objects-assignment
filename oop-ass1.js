function NotesApplication(author,notes){
	this.author = author;
	this.notes = notes;

	this.create = function(content){
		this.content=content;
        return (this.notes.push(this.content));
		};
	this.listNotes = function(){
		for (var i=0; i<this.notes.length; i++){
					pos=this.notes.indexOf(notes[i]);
					console.log("[Notes ID]:" + "["+ pos +"]" +"\n"+ notes[i]+ "\n"+ "By author: "+ this.author);
					//console.log(notes[i] + pos);
			}
	};
}
