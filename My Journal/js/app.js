
    $(document).ready(function(){
        console.log("ready")
   var Journal = Array();
   var Entity = function(Author, Title, Content)
   {
        this.Title = Title;
        this.Author = Author;
        this.Content = Content;
        this.ToEntry = function ()
        {
            return  `<div class="col-md-3 col-sm-6">
    <div class="thumbnail">
         
            <div class="caption">
                <h3>${this.Title}</h3>
                <p>${this.Author}</p>
                <p>
                   ${this.Content}
                </p>
            </div>
                </div>
    </div>`;


        }
   }

function DisplayJournal()
{
        $('#journal').html('');
        var entry = "";
        for (var i = 0; i < Journal.length; i++)
        {
            entry += Journal[i].ToEntry();
        }
        $('#journal').html(entry); 
    }

$("#button_add").click(function(){
    var Title = $('#title').val();
    var Author = $('#author').val();
    var Content = $("#content").val();
    var NewEntity = new Entity(Author, Title, Content);
    Journal.push(NewEntity);
    console.log(Journal);
    DisplayJournal();
});

        });