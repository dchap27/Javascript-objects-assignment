'use strict';

function NotesApplication(author,notes){
	this.author = author;
	this.notes = notes;

	this.create = function(content){
		this.content=content;
        return (this.notes.push(this.content));// adds new content to the list of notes
		};
	this.listNotes = function(){
		for (var i=0; i<this.notes.length; i++){
					var note_id=this.notes.indexOf(notes[i]); // gets the index number for each notes
					console.log("[Notes ID]: " + note_id +"\n"+ notes[i]+ "\n"+ "By author: "+ this.author);
			}
	};
	this.getNote = function(note_id){
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
		}
	};

	this.delete = function(note_id){
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
	this.edit = function(note_id,new_content){
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
	/*this.search = function(search_text){
		
	};*/
}

var apps = new NotesApplication("Ahmad",['football','basketball','judo','chess','scrabble']);
apps.edit(4, 'baby');
