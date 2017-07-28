$(document).ready(function () {
    console.log("ready")

    function Journal() { // Create a Journal constructor.  
        this.entries = []; // That has a property called 'entries' with a value equal to an empty array.
    }

    let MyJournal = new Journal();

    console.log(MyJournal);

    $("#tag_button").click(function () {
        $("#journal").empty();
        var results = $("#mySearch").val();
        console.log(results);
        
        
        for (var i = 0; i < MyJournal.entries.length; i++) { // We have access to each entry.
            for (var j = 0; j < MyJournal.entries[i].tags.length; j++) { // We have access to the tags of each entry.
                if (results === MyJournal.entries[i].tags[j]){
                    let output = "";
                    output += '<div class="output">'
                    output += '<p>'+MyJournal.entries[i].title+'</p>'
                    output += '<p>'+MyJournal.entries[i].author+'</p>'
                    output += '<p>'+MyJournal.entries[i].content+'</p>'
                    output += '<p>'+MyJournal.entries[i].tags+'</p>'
                    output += '</div>'
            
                    $('#journal').append(output);
                }
                
              

            }        
        }

    });


    var Entity = function (author, title, content, tags) { 
        this.title = title;
        this.author = author;
        this.content = content;
        this.tags = tags;  
        this.ToEntry = function () {
            return `<div class="col-md-3 col-sm-6">
    <div class="thumbnail">
         
            <div class="caption">
                <h3>${'titile: ' + this.title}</h3>
                <p>${'author: ' + this.author}</p>
                <p>${'tags: ' + this.tags}</p>
                <p>
                   ${'content:' + this.content}
                </p>

            </div>
                </div>
    </div>`;


        }
    }
    let newEntry = new Entity('bill', 'testline', 'tag', 'contentstuff');

    console.log(newEntry);

    function DisplayJournal() {
        $('#journal').html('');
        var entry = "";
        for (var i = 0; i < MyJournal.entries.length; i++) {
            entry += MyJournal.entries[i].ToEntry();
        }
        $('#journal').html(entry);
    }

    $("#button_add").click(function () {
        var title = $('#title').val();
        var author = $('#author').val();
        var content = $("#content").val();
        var tags = $("#tags").val();
        var tagsarray = tags.split(", ");
       
        console.log(MyJournal);

        var NewEntity = new Entity(author, title, content, tagsarray);
        MyJournal.entries.push(NewEntity);
        console.log(MyJournal);

        DisplayJournal();
    });

});