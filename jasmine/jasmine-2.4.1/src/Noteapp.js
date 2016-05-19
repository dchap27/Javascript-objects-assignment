// source code
'use strict';
function NotesApplication(author,notes){
	this.author = 'Ahmad';
	this.notes = ['books'];
}

NotesApplication.prototype.create = function(content) {
	this.content=content;
    this.notes.push(this.content);// adds new content to the list of notes
    return this.notes;
};

NotesApplication.prototype.listNotes = function(){
	for (var i=0; i<this.notes.length; i++){
		var note_id=this.notes.indexOf(this.notes[i]); // gets the index number for each notes
		console.log("[Notes ID]: " + note_id +"\n"+ this.notes[i]+ "\n"+ "By author: "+ this.author);
	}
	return this.notes;
};

NotesApplication.prototype.getNote = function(note_id){
	this.note_id = note_id;
	var note_idArr = [];
	for (var i=0; i<this.notes.length; i++){
				note_idArr.push(i); // adds the index i into the array of note_id indexes
		}
	if (note_id in note_idArr){
		return this.notes[this.note_id];
	}
	else{
		console.log("no content matches id " + note_id);
		return "no matching notes";
	}
};

NotesApplication.prototype.delete = function(note_id){
	this.note_id = note_id;
	var note_idArr = [];
	for (var i=0; i<this.notes.length; i++){
				note_idArr.push(i); // adds the index i into the array of note_id indexes
		}
	if (note_id in note_idArr){
		//var deleted_content = this.notes[note_id];
		this.notes.splice(this.notes.indexOf(notes[note_id]),note_id); // removes the notes with index "note_id"
		console.log("content "+ note_id + " deleted successfully" + "\n");
	    return (this.notes);// returns the new list of notes
	}
	else{
		console.log("no content matches id " + note_id);
	}
	
};

NotesApplication.prototype.edit = function(note_id,new_content){
	this.note_id = note_id;
	this.new_content = new_content;
	var note_idArr = [];
	for (var i=0; i<this.notes.length; i++){
				note_idArr.push(i); // adds the index i into the array of note_id indexes
		}
	if (note_id in note_idArr){
		var edited_content = (this.notes[this.note_id] = this.new_content);
	    return (edited_content);
	}
	else{
		console.log("no content matches id " + note_id);
	}
};

NotesApplication.prototype.search = function(search_text){
		this.search_text = search_text;
		var keywords = search_text.split(" ");
		var notesArrContains = [];
		var notesFound = false;
		while (notesFound === false){
			for (var i=0; i<this.notes.length; i++){
				for (var j=0; j<keywords.length; j++){
				    if(this.notes[i].includes(keywords[j])){
					    if (notesArrContains.includes(this.notes[i])){
					    	notesArrContains;
					    }
					    else{
						    notesArrContains.push(this.notes[i]);
				    	}
				    }
					else if (j===keywords.length){
						break;
					}
					
				}
			notesFound = true;
			}
		}
		return notesArrContains;
	};