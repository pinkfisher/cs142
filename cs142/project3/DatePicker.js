"use strict";


class DatePicker{
    constructor(id, callback){
        this.id = id;
        this.callback = callback;
    }

    //create calendar, and replaces the contests of the date picker's div
    render(date){
        var body = document.getElementById(this.id);
        body.appendChild(this.buildCalendar(date));
    }
    
    
    buildCalendar(date) {
        //generate a table
        var table = document.createElement("table");
        table.setAttribute("class","table");


        
        //first row: table header:  < Month Year > 
        var tableBody = document.createElement("tbody");
        tableBody.setAttribute("id","header");
        var row1 = document.createElement("tr");
        var months_name = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
        var header = ["<", months_name[date.getMonth()] + " " + date.getFullYear(), ">"];

        for(var i = 0; i < 3; i++){
            var cell1 = document.createElement("th");
            cell1.innerHTML = header[i];
            //event for < & >
            if(i === 0){
                cell1.setAttribute("id","prev");
                cell1.addEventListener("click", () => {
                    table.remove();
                    date.setMonth(date.getMonth() - 1);
                    this.render(date);
                });
            }
            if(i === 2){
                cell1.setAttribute("id","next");
                cell1.addEventListener("click", () => {
                    table.remove();
                    date.setMonth(date.getMonth() + 1);
                    this.render(date);
                });
            }
            row1.appendChild(cell1);
        }
        tableBody.appendChild(row1);
        table.appendChild(tableBody);

       
        


        //second row: weekday names
        var row2 = document.createElement("tr");
        row2.setAttribute("id", "th");
        var weekday_names = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
        for(var j = 0; j < 7; j++){
            var cell2 = document.createElement("td");
            cell2.innerHTML = weekday_names[j];
            row2.appendChild(cell2);
        }
        tableBody.appendChild(row2);

        //rest rows: normal days
        var startDate = new Date(date.getFullYear(), date.getMonth(), 1);
        var curDate = new Date(startDate.getTime());
        
        //last month day: (i.e. start date in this calendar)
        curDate.setDate(-startDate.getDay() + 1);

        var rowIndex = 2;
        while (true) {
            var row = table.insertRow(rowIndex);
            rowIndex = rowIndex + 1;
            
            for (var i = 0; i < 7; ++ i) {
                var cell = row.insertCell(i);
                cell.innerHTML = curDate.getDate();

                if (curDate.getMonth() === date.getMonth()) {
                    cell.setAttribute("id", "CurMonth");
                        let ob = {
                            month: curDate.getMonth() + 1,
                            day: cell.innerHTML,
                            year: curDate.getFullYear()
                        };
                    cell.addEventListener("click", () => {
                        this.callback(this.id, ob);
                    });
                } else {
                    cell.setAttribute("id", "OtherMonth");
                }

                curDate.setDate(curDate.getDate() + 1);
            }

            // exit the loop
            if (curDate.getMonth() != date.getMonth()) {
                break;
            }
        }

        return table;
    }
};




