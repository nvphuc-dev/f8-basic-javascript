let courseApi = "http://localhost:3000/coures";

function start(){
	// getCourses(function(courses){
	// 	renderCourses(courses);
	// });
	getCourses(renderCourses);
}

start();


// Functions
function getCourses(callback){
	fetch(courseApi).then(function(response){
		return response.json();
	}).then(callback);
}

function renderCourses(courses){
	let listCourses = document.querySelector('#lst-courses');
	let htmls = courses.map(function(course){
		return `
			<li>
				<div class="lst-courses__inner">
					<h4>${course.title}</h4>
					<p>${course.description}</p>
				</div>
			</li>
		`;
	});
	listCourses.innerHTML = htmls.join('');
}