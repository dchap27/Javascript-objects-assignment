function NotesApplication(author,notes){
	this.author = author;
	this.notes = notes;

	this.create = function(content){
		this.content=content;
        return (this.notes.push(this.content));// adds new content to the list of notes
		};
	this.listNotes = function(){
		for (var i=0; i<this.notes.length; i++){
					note_id=this.notes.indexOf(notes[i]); // gets the index number for each notes
					console.log("[Notes ID]:" + "["+ note_id +"]" +"\n"+ notes[i]+ "\n"+ "By author: "+ this.author);
			}
	};
	this.getNote = function(note_id){
		this.note_id = note_id;
		return this.notes[this.note_id];
	};

	this.delete = function(note_id){
		this.note_id = note_id;
		this.notes.splice(this.notes.indexOf(notes[note_id]),note_id); // removes the notes with index "note_id"
		return (this.notes);// returns the new list of notes
	};
}
