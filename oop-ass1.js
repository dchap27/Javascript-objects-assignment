function NotesApplication(author,notes){
	this.author = author;
	this.notes = notes;

	this.create = function(content){
		this.content=content;
        return (this.notes.push(this.content));
		};
	this.listNotes = function(){
		for (var i=0; i<this.notes.length; i++){
					note_id=this.notes.indexOf(notes[i]);
					console.log("[Notes ID]:" + "["+ note_id +"]" +"\n"+ notes[i]+ "\n"+ "By author: "+ this.author);
			}
	};
	this.getNote = function(note_id){
		this.note_id = note_id;
		var contents = this.notes[this.note_id];
		return contents;
	};
}
