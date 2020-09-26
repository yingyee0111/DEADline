window.addEventListener('load', function () {

var a =  document.getElementsByClassName("PlannerApp large")[0].getElementsByClassName("Day-styles__root planner-day");
var assignments = {};
var class_declared = [];
var i;
for (i = 0; i < a.length; i++){

	date = a[i].childNodes[0].childNodes[1].textContent.split(", ")[0];
	var b = a[i].querySelectorAll("div div.Grouping-styles__root.planner-grouping");
	for (j = 0; j < b.length; j++){
		var classname = b[j].querySelector("a span.Grouping-styles__title").textContent;
		if (class_declared.indexOf(classname) < 0){
			class_declared.push(classname);
			assignments[classname] = [];
		}
		var c = b[j].querySelectorAll("ol li");
		for (k = 0; k < c.length; k++){
			var deadline = c[k].querySelectorAll("div > div.PlannerItem-styles__layout > div > div.PlannerItem-styles__secondary.PlannerItem-styles__secondary_no_badges > div.PlannerItem-styles__metrics > div.PlannerItem-styles__due > span > span");
			if (deadline.length>0 && deadline[0].textContent.includes("Due")){
				var assignmentname = c[k].querySelector("div > div.PlannerItem-styles__layout > div > div.PlannerItem-styles__details.PlannerItem-styles__details_no_badges > div.PlannerItem-styles__title > a > span > span:nth-child(2)").textContent;
				var dueDate = deadline[0].textContent.split("Due: ")[1];
				var dueDate = date.concat(" at ", dueDate);
				assignments[classname].push([assignmentname, dueDate]);
			}
		}
	}
}

var m;
for (m = 0; m < class_declared.length; m++){
	if (assignments[class_declared[m]].length > 0) {
		var data = [class_declared[m], assignments[class_declared[m]]];
		chrome.runtime.sendMessage({
			url: class_declared[m],
			data: data
		})
	}	
}
})
