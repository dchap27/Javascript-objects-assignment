function NotesApplication(author,notes){
	this.author = author;
	this.notes = [];

	this.create = function(note_content){
            this.notes.push(note_content);
		};
		
		listNotes = function(note_id,Note_content,author){
			var note_id = function position(){
				for (var i=0; i<notes.length; i++){
					pos=notes.indexOf(notes[i]);
			}
			console.log("Note ID: "+note_id);
			console.log(Note_content);
			console.log("By Author "+ author);
		};
		getNote_id = function(note_id){
			return content[note_id];
		};
	};
};
}

Apps = new NotesApplication('ahmad',"how are you doing");