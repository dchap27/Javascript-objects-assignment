/*
Assignment: creating OOP code required for implementing a note taking application
*/

// specs code
describe("noteApp", function() {
    var noteApp;

	beforeEach(function(){
	    var author = author;
	    var notes = notes;
	 	noteApp = new NotesApplication(author,notes);
    });


	describe("Noteapp ",function(){
	    it("should have an author", function(){
	        var author = 'Ahmad';
	        expect(noteApp.author).toEqual(author);
	    //expect(noteApp.create('babies')).toEqual(['Ade loves','babies']);
	 	});
	});
	 
	describe("Noteapplication ", function() {
	    it("should have notes", function() {
	        var notes = ['books'];
	        expect(noteApp.notes).toEqual(notes);
	    });
	});
	 
	describe("Authors name ", function(){
	    it("should be a string ", function() {
		    spyOn(noteApp, "author");
		    noteApp.author("string");
		    expect(noteApp.author.calls()).toBe("string");
	   });
	});

});