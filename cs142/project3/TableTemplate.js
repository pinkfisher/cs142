"use strick";

class TableTemplate{
    static fillIn(id, dict, columnName){
        var table = document.getElementById(id);

        //process the header
        var header = table.rows.item(0);
        var re = new Cs142TemplateProcessor(header.innerHTML);
        header.innerHTML = re.fillIn(dict);

        //get the column number if columnName specified
        if(columnName !== undefined){
            var colNum;
            for(var k = 0; k < header.cells.length; k++){
                if(header.cells[k].innerHTML === columnName){
                    colNum = k;
                }
            }
        }
        

        //no columnName argument is specified, the method should process the entire table.
        if(columnName === undefined){
            for(var i = 1; i < table.rows.length; i++){
                for(var j = 0; j < header.cells.length; j++){
                    var cur = table.rows.item(i).cells.item(j);
                    re = new Cs142TemplateProcessor(cur.innerHTML);
                    cur.innerHTML = re.fillIn(dict);
                }
            }  //process specific columnName
        } else {
            for(var i = 1; i < table.rows.length; i++){
                    var cur = table.rows.item(i).cells.item(colNum);
                    re = new Cs142TemplateProcessor(cur.innerHTML);
                    cur.innerHTML = re.fillIn(dict);
                }
                
        }

        //the specified columnName is not matched, the method should return without replacing any text in the columns.
       
        table.style.visibility = 'visible';
    }
}