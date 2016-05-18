function NotesApplication(author,notes){
	this.author = author;
	this.notes = notes;

	this.create = function(content){
		this.content=content;
        return (this.notes.push(this.content));
		};
		
}
