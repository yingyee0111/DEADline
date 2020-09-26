document.addEventListener('DOMContentLoaded', function() {
	
	const bg = chrome.extension.getBackgroundPage();
	var hi =["hi"];
	Object.keys(hi).forEach(function (url) {
		const div_main = document.createElement('div');
		div_main.setAttribute("class", "container-fluid");
		var div_main2 = document.createElement('div');
		div_main2.setAttribute("class", "row m-3");

		var struct= bg.deadlines;
		var urls = Object.keys(struct);
		var i;
		for (i = 0; i < urls.length; i++) {
			url = urls[i];
			//main course container
			var newCourseDiv = document.createElement('div');
			newCourseDiv.setAttribute("class", "col-sm-12 col-md-4 col-lg-4");
			var newCourseForm = document.createElement('form');
			newCourseForm.setAttribute("class", "border rounded p-3 m-2")

			//course name
			var courseNameP = document.createElement('p');
			courseNameP.innerHTML = struct[url][0];
			courseNameP.style.fontWeight = 'bold';
			courseNameP.style.color = "blue";
			courseNameP.style.fontSize ="large";
			newCourseForm.appendChild(courseNameP);

			//loop assignments
			var data = struct[url][1];
			var j;
			for (j=0; j<data.length; j++){
				//Assignment Name
				var newAssDiv = document.createElement('div');
				var AssNameP = document.createElement('p');
				AssNameP.innerHTML = data[j][0];
				AssNameP.style.fontWeight = 'bold';
				newAssDiv.appendChild(AssNameP);

				var datesDiv = document.createElement('div');

				var dueDiv = document.createElement('div');
				var dueP = document.createElement('p');
				dueP.innerHTML = "Due Date: "+ data[j][1];
				dueDiv.appendChild(dueP);

				datesDiv.appendChild(dueDiv);

				newAssDiv.appendChild(datesDiv);


				newCourseForm.appendChild(newAssDiv);
				newCourseDiv.appendChild(newCourseForm);
			}

			div_main2.appendChild(newCourseDiv);

			
		}

		//div.textContent = `${url}: ${bg.deadlines[url]}`
		div_main.appendChild(div_main2);
		document.body.appendChild(div_main);
		console.log(Object.keys(bg.deadlines).length);
	})
	
}, false)