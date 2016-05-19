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
	    
	 	});
	 
	    it("should have notes", function() {
	        var notes = ['books'];
	        expect(noteApp.notes).toEqual(notes);
	    });
	});
	 
	describe("Noteapp ", function(){
	    it("should have an array of notes ", function() {
            //noteApp.notes('Ata');
            //#expect(person.setName.calls.argsFor(0)).toBe("string");
            expect(typeof(noteApp.notes)).toBe("object");
	   });
	});

	describe("Notes application ", function() {
		it("should be able to create notes ", function() {
            var content = "a new content";
            expect(noteApp.create(content)).toEqual(['books','a new content']);
		});
	});

});