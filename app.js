var dataOnloadPage = new Date(),
    dayDataOnloadPage = dataOnloadPage.getDate(),
    monthDataOnloadPage = dataOnloadPage.getMonth() + 1,
    yearDataOnloadPage = dataOnloadPage.getFullYear();
document.querySelector("input[thrnrhhlCalendar]").addEventListener("click", () => {
    if (document.getElementById("calendar")) document.getElementById("calendar").remove();
    else {
        let e = document.querySelector("input[thrnrhhlCalendar]").getBoundingClientRect(),
            t = document.createElement("div");
        (t.id = "calendar"),
            (t.dataset.view = "1"),
            t.classList.add("black"),
            (t.style.left = e.left + "px"),
            document.querySelector("input[thrnrhhlCalendar]").after(t),
            createCalendar(calendar, yearDataOnloadPage, monthDataOnloadPage);
    }
});
const callCalendar = (e) => (
    e.color,
    document.querySelector("#calendar").classList.contains("black")
        ? (document.querySelector("#calendar").classList.remove("black"), document.querySelector("#calendar").classList.add(e.color))
        : (document.querySelector("#calendar").classList.remove("white"), document.querySelector("#calendar").classList.add(e.color)),
    "1" == e.null && funcGetTimepicker(e.null),
    e
);
function createCalendar(e, t, a) {
    var n = a - 1,
        l = new Date(t, n),
        r = new Date(),
        c = r.getDate(),
        d = r.getMonth(),
        o = r.getFullYear(),
        u =
            '\n    <span class="author">©  thrnrhhl</span>\n    <div>\n      <span id="prev">\n        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none"> \n            <path d="M14 11.6667C14 12.9553 12.9553 14 11.6667 14L2.33333 14C1.04467 14 4.76837e-07 12.9553 4.76837e-07 11.6667L4.76837e-07 2.33333C4.76837e-07 1.04467 1.04467 4.76837e-07 2.33333 4.76837e-07L11.6667 4.76837e-07C12.9553 4.76837e-07 14 1.04467 14 2.33333L14 11.6667Z" fill="#F8F9FA"/> \n            <path d="M4.90869 7.52547L8.2301 10.3402C8.6682 10.7114 9.33334 10.3946 9.33334 9.81468L9.33334 4.18532C9.33334 3.60539 8.6682 3.28858 8.2301 3.65985L4.90869 6.47453C4.586 6.74799 4.586 7.25201 4.90869 7.52547Z" fill="#323B43"/> \n        </svg>\n      </span>\n      <select id="month"></select>\n      <select id="year"></select>\n      <span id="next"> \n        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none"> \n            <path d="M0 2.33333C0 1.04467 1.04467 0 2.33333 0H11.6667C12.9553 0 14 1.04467 14 2.33333V11.6667C14 12.9553 12.9553 14 11.6667 14H2.33333C1.04467 14 0 12.9553 0 11.6667V2.33333Z" fill="#F8F9FA"/> \n            <path d="M9.09131 6.47453L5.7699 3.65985C5.3318 3.28858 4.66666 3.60539 4.66666 4.18532L4.66666 9.81468C4.66666 10.3946 5.3318 10.7114 5.7699 10.3402L9.09131 7.52547C9.414 7.25201 9.414 6.74799 9.09131 6.47453Z" fill="#323B43"/> \n        </svg> \n      </span>\n    </div>\n    <table>\n      <tr>\n        <th>пн</th>\n        <th>вт</th>\n        <th>ср</th>\n        <th>чт</th>\n        <th>пт</th>\n        <th>сб</th>\n        <th>вс</th>\n      </tr>\n      <tr>\n    ',
        s = [];
    for (v = 0; v < funcGetDayWeek(l); v++) {
        var h = new Date(new Date(new Date().setMonth(n)).setDate(-v)).getDate();
        s.push(h);
    }
    for (var i = s.reverse(), v = 0; v < i.length; v++) u += '<td class="last">' + i[v] + "</td>";
    for (; l.getMonth() == n; )
        l.getDate() == c && l.getMonth() == d && t == o ? (u += '<td class="today">' + l.getDate() + "</td>") : (u += '<td class="otherDate">' + l.getDate() + "</td>"),
            funcGetDayWeek(l) % 7 == 6 && (u += "</tr><tr>"),
            l.setDate(l.getDate() + 1);
    var g = [];
    for (v = funcGetDayWeek(l); v < 7; v++) {
        var m = new Date(new Date(new Date().setMonth(n)).setDate(v)).getDate();
        g.push(m);
    }
    if (0 != funcGetDayWeek(l))
        for (v = funcGetDayWeek(l); v < 7; v++) {
            u += '<td class="next">' + (m = new Date(new Date(new Date().setMonth(n)).setDate(v - funcGetDayWeek(l) + 1)).getDate()) + "</td>";
        }
    (u += "</tr></table>"), (e.innerHTML = u), funcGetSelectCalendar(a, t), funcGetDateMonthYear(), callCalendar(objthrnrhhl);
}
const funcGetDayWeek = (e) => {
        var t = e.getDay();
        return 0 == t && (t = 7), t - 1;
    },
    funcGetSelectCalendar = (e, t) => {
        var a = document.getElementById("month"),
            n = document.getElementById("year"),
            l = new Date(),
            r = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
        for (i = 0; i < r.length; i++) {
            l.setMonth([i]);
            var c = '<option data-value="' + r[l.getMonth()] + '" value="' + (l.getMonth() + 1) + '">' + r[l.getMonth()] + "</option>";
            a.innerHTML += c;
        }
        for (i = 1920; i < 2100; i++) {
            var d = `<option value="${i}">${i}</option>`;
            n.innerHTML += d;
        }
        var o = new Date(),
            u = Number(e) - 1;
        o.setMonth(u), o.setFullYear(t), (a.value = o.getMonth() + 1), (n.value = o.getFullYear()), funcChangeSelectCalendar();
    },
    funcChangeSelectCalendar = () => {
        var e = document.getElementById("month"),
            t = document.getElementById("year"),
            a = document.getElementById("next"),
            n = document.getElementById("prev");
        (t.onchange = () => {
            var a = t.value,
                n = e.value;
            (t.value = a), createCalendar(calendar, a, n);
        }),
            (e.onchange = () => {
                var a = e.value,
                    n = t.value;
                (e.value = a), (t.value = n), createCalendar(calendar, n, a);
            }),
            (a.onclick = () => {
                var a = Number(e.value) + 1,
                    n = t.value;
                13 == a ? ((a = 1), (n = Number(n) + 1)) : (a = a), (e.value = a), (t.value = n), createCalendar(calendar, n, a);
            }),
            (n.onclick = () => {
                var a = Number(e.value) - 1,
                    n = t.value;
                0 == a ? ((a = 12), (n = Number(n) - 1)) : (a = a), (e.value = a), (t.value = n), createCalendar(calendar, n, a);
            });
    },
    funcGetDateMonthYear = () => {
        var e = document.querySelector("input[thrnrhhlCalendar]"),
            t = document.getElementsByClassName("otherDate"),
            a = document.getElementById("month"),
            n = document.getElementById("year"),
            l = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
        [].forEach.call(t, (t) => {
            t.onclick = () => {
                var r = t.innerHTML,
                    c = l[Number(a.value) - 1],
                    d = Number(a.value) - 1,
                    o = n.value;
                e.setAttribute("data-value", o + "-" + d + "-" + r), e.setAttribute("value", r + " " + c + " " + o), console.log(r + " " + c + " " + o);
            };
        });
    };









// var monthSelectCalendar; // document.getElementById("month")
// var yearSelectCalendar;  // document.getElementById("year") 
// var calendarCalendar;    // document.getElementById("calendar")
// var calendarPrev;
// var calendarNext;
// var dataOnloadPage = new Date();
// var dayDataOnloadPage = dataOnloadPage.getDate();
// var monthDataOnloadPage = dataOnloadPage.getMonth() + 1;
// var yearDataOnloadPage = dataOnloadPage.getFullYear();


// document.querySelector("input[data-thrnrhhl-calendar]").addEventListener("click", () => {
//     if(document.getElementById("calendar")) {
//         document.getElementById("calendar").remove();
//     } else {
//         let coords = document.querySelector("input[data-thrnrhhl-calendar]").getBoundingClientRect();
//         let div = document.createElement("div");
//         div.id = "calendar";
//         div.dataset.view = "1";
//         div.classList.add("black");
//         div.style.left = coords.left + "px";
//         document.querySelector("input[data-thrnrhhl-calendar]").after(div);
//         createCalendar(calendar, yearDataOnloadPage, monthDataOnloadPage);
//     }
// });


// const callCalendar = (props) => {
//     if (props.color == "black" || "white") {
//         if(document.querySelector("#calendar").classList.contains("black")) {
//             document.querySelector("#calendar").classList.remove("black");
//             document.querySelector("#calendar").classList.add(props.color);
//         } else {
//             document.querySelector("#calendar").classList.remove("white");
//             document.querySelector("#calendar").classList.add(props.color);
//         }
//     } else {
//         console.log("Calendar class is incorrect"); 
//     }

//     (props.null == "1") ? funcGetTimepicker(props.null) : null;
//     return props;
// }



//  function createCalendar(elem, year, month) {
//     var mon = month - 1;
//     var d = new Date(year, mon);
//     var todayDate = new Date();
//     var today = todayDate.getDate();
//     var monthToday = todayDate.getMonth();
//     var yearToday = todayDate.getFullYear();
//     var table = `
//     <span class="author">©  thrnrhhl</span>
//     <div>
//       <span id="prev">
//         <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none"> 
//             <path d="M14 11.6667C14 12.9553 12.9553 14 11.6667 14L2.33333 14C1.04467 14 4.76837e-07 12.9553 4.76837e-07 11.6667L4.76837e-07 2.33333C4.76837e-07 1.04467 1.04467 4.76837e-07 2.33333 4.76837e-07L11.6667 4.76837e-07C12.9553 4.76837e-07 14 1.04467 14 2.33333L14 11.6667Z" fill="#F8F9FA"/> 
//             <path d="M4.90869 7.52547L8.2301 10.3402C8.6682 10.7114 9.33334 10.3946 9.33334 9.81468L9.33334 4.18532C9.33334 3.60539 8.6682 3.28858 8.2301 3.65985L4.90869 6.47453C4.586 6.74799 4.586 7.25201 4.90869 7.52547Z" fill="#323B43"/> 
//         </svg>
//       </span>
//       <select id="month"></select>
//       <select id="year"></select>
//       <span id="next"> 
//         <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none"> 
//             <path d="M0 2.33333C0 1.04467 1.04467 0 2.33333 0H11.6667C12.9553 0 14 1.04467 14 2.33333V11.6667C14 12.9553 12.9553 14 11.6667 14H2.33333C1.04467 14 0 12.9553 0 11.6667V2.33333Z" fill="#F8F9FA"/> 
//             <path d="M9.09131 6.47453L5.7699 3.65985C5.3318 3.28858 4.66666 3.60539 4.66666 4.18532L4.66666 9.81468C4.66666 10.3946 5.3318 10.7114 5.7699 10.3402L9.09131 7.52547C9.414 7.25201 9.414 6.74799 9.09131 6.47453Z" fill="#323B43"/> 
//         </svg> 
//       </span>
//     </div>
//     <table>
//       <tr>
//         <th>пн</th>
//         <th>вт</th>
//         <th>ср</th>
//         <th>чт</th>
//         <th>пт</th>
//         <th>сб</th>
//         <th>вс</th>
//       </tr>
//       <tr>
//     `;
//     var arrLastDayMonth = [];
//     for (i = 0; i < funcGetDayWeek(d); i++) {
//         var last = new Date(new Date(new Date().setMonth(mon)).setDate(-i)).getDate();
//         arrLastDayMonth.push(last);
//     }
//     var reverseArrLastDayMonth = arrLastDayMonth.reverse();
//     for (var i = 0; i < reverseArrLastDayMonth.length; i++) {
//         table += '<td class="last">' + reverseArrLastDayMonth[i] + '</td>';
//     }
//     while (d.getMonth() == mon) {
//         (d.getDate() == today && d.getMonth() == monthToday && year == yearToday)
//             ? table += '<td class="today">' + d.getDate() + '</td>'
//             : table += '<td class="otherDate">' + d.getDate() + '</td>';

//         (funcGetDayWeek(d) % 7 == 6) ? table += '</tr><tr>' : null ;
//         d.setDate(d.getDate() + 1);
//     }
//     var arrNextDayMonth = [];
//     for (i = funcGetDayWeek(d); i < 7; i++) {
//         var next = new Date(new Date(new Date().setMonth(mon)).setDate(i)).getDate();
//         arrNextDayMonth.push(next);
//     }
//     if (funcGetDayWeek(d) != 0) {
//         for (var i = funcGetDayWeek(d); i < 7; i++) {
//             var next = new Date(new Date(new Date().setMonth(mon)).setDate((i - funcGetDayWeek(d)) + 1)).getDate();
//             table += '<td class="next">' + next + '</td>';
//         }
//     }
//     table += '</tr></table>';
//     elem.innerHTML = table;
//     funcGetSelectCalendar(month, year);
//     funcGetDateMonthYear();
//     callCalendar(obj);
// }


// const funcGetDayWeek = (date) => {
//     var day = date.getDay();
//     if (day == 0) day = 7;
//     return day - 1;
// }
// const funcGetSelectCalendar = (param1, param2) => {
//     monthSelectCalendar = document.getElementById("month");
//     yearSelectCalendar = document.getElementById("year");
//     var dateSelectCalendar = new Date();
//     var months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
//     for (i = 0; i < months.length; i++) {
//         months[dateSelectCalendar.setMonth([i])];
//         var strMonth = '<option data-value="' + months[dateSelectCalendar.getMonth()] + '" value="' + (dateSelectCalendar.getMonth()+1) + '">' + months[dateSelectCalendar.getMonth()] + '</option>';
//         monthSelectCalendar.innerHTML += strMonth;
//     }
//     for (i = 1920; i < 2100; i++) {
//         var strYear = `<option value="${i}">${i}</option>`;
//         yearSelectCalendar.innerHTML += strYear;
//     }
//     var nowMonth = new Date();
//     var valM = Number(param1) - 1;
//     nowMonth.setMonth(valM);
//     nowMonth.setFullYear(param2);
//     monthSelectCalendar.value = nowMonth.getMonth() + 1;
//     yearSelectCalendar.value = nowMonth.getFullYear();
//     funcChangeSelectCalendar();
// };
// const funcChangeSelectCalendar = () => {
//     monthSelectCalendar = document.getElementById("month");
//     yearSelectCalendar = document.getElementById("year");
//     calendarNext = document.getElementById("next");
//     calendarPrev = document.getElementById("prev");
//     yearSelectCalendar.onchange = () => {
//         var valueYear= yearSelectCalendar.value;
//         var valueMonth = monthSelectCalendar.value;
//         yearSelectCalendar.value = valueYear;
//         createCalendar(calendar, valueYear, valueMonth);
//     };
//     monthSelectCalendar.onchange = () => {
//         var valueMonth = monthSelectCalendar.value;
//         var valueYear= yearSelectCalendar.value;
//         monthSelectCalendar.value = valueMonth;
//         yearSelectCalendar.value = valueYear;

//         createCalendar(calendar, valueYear, valueMonth);
//     };
//     calendarNext.onclick = () => {
//         var valueMonth = Number(monthSelectCalendar.value) + 1;
//         var valueYear= yearSelectCalendar.value;
//         if( valueMonth == 12+1 ) {
//             valueMonth = 1;
//             valueYear = Number(valueYear)+1;
//         } else {
//             valueMonth = valueMonth;
//         }
//         monthSelectCalendar.value = valueMonth;
//         yearSelectCalendar.value = valueYear;
//         createCalendar(calendar, valueYear, valueMonth);
//     }

//     calendarPrev.onclick = () => {
//         var valueMonth = Number(monthSelectCalendar.value) - 1;
//         var valueYear= yearSelectCalendar.value;
//         if( valueMonth == 0 ) {
//             valueMonth = 12;
//             valueYear = Number(valueYear)-1;
//         } else {
//             valueMonth = valueMonth;
//         }
//         monthSelectCalendar.value = valueMonth;
//         yearSelectCalendar.value = valueYear;
//         createCalendar(calendar, valueYear, valueMonth);
//     }
// };
// const funcGetDateMonthYear = () => {
//     var input = document.getElementById("calendarData");
// var td = document.getElementsByClassName("otherDate");
// var monthSelectCalendar= document.getElementById("month");
//     var yearSelectCalendar = document.getElementById("year");
//     var months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
// [].forEach.call(td, (elem) => {
//     elem.onclick = () => {
//         var tdValue = elem.innerHTML;
//         var monthValue = months[Number(monthSelectCalendar.value)-1]; 
//         var dataValueMonthValue = Number(monthSelectCalendar.value)-1;
//         var yearValue = yearSelectCalendar.value; 
//         input.setAttribute("data-value", yearValue + '-' + dataValueMonthValue + '-' + tdValue)
//         input.setAttribute("value", tdValue + ' ' + monthValue + ' ' + yearValue)
//         console.log(tdValue + ' ' + monthValue + ' ' + yearValue);
//     };
// });
// };
// document.addEventListener("click", (event) => {
//     if (document.querySelector("input[data-thrnrhhl-calendar]").contains(event.target)) {
//         if (document.getElementById("calendar")) {
//             document.getElementById("calendar").remove();
//         } else {
//             let coords = document.querySelector("input[data-thrnrhhl-calendar]").getBoundingClientRect();
//             let div = document.createElement("div");
//             div.id = "calendar";
//             div.dataset.view = "1";
//             div.classList.add("black");
//             div.style.left = coords.left + "px";
//             document.querySelector("input[data-thrnrhhl-calendar]").after(div);
//             createCalendar(calendar, yearDataOnloadPage, monthDataOnloadPage);

//         }
//     }
//     else if (document.querySelector("#calendar")) {
//         var cnd = document.querySelector("#calendar");
//         if (!cnd.contains(event.target)) {
//             cnd.remove();
//         };
//     }
// });

