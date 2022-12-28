let courseApi = "http://localhost:3000/coures";

function start(){
	// getCourses(function(courses){
	// 	renderCourses(courses);
	// });
	getCourses(renderCourses);
	handleCreateForm();
}

start();


// Functions
function getCourses(callback){
	fetch(courseApi).then(function(response){
		return response.json();
	}).then(callback);
}

function storeCourse(data, callback){
	let options = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	};

	fetch(courseApi, options).then(function(response){
		response.json();
	}).then(callback);
}

function handleDeleteCourse(id){
	let options = {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json'
		}
	};

	fetch(courseApi + '/' + id, options).then(function(response){
		response.json();
	}).then(function(){
		let courseItem = document.querySelector('.lst-courses-id-' + id);
		if(courseItem){
			courseItem.remove();
		}
	});
}

function handleCreateForm(){
	let btn = document.querySelector('#create');
	btn.onclick = function(){
		let title = document.querySelector('input[name="title"]').value;
		let description = document.querySelector('textarea[name="description"]').value;
		let formData = {
			title: title,
			description: description
		}
		storeCourse(formData, function(){
			getCourses(renderCourses);
		});
	}
}

function renderCourses(courses){
	let listCourses = document.querySelector('#lst-courses');
	let htmls = courses.map(function(course){
		return `
			<li class="lst-courses-id-${course.id}">
				<div class="lst-courses__inner">
					<h4>${course.title}</h4>
					<p>${course.description}</p>
					<p class="lst-courses__actions">
						<span class="btn btn--sm btn--danger" onclick=handleDeleteCourse(${course.id})>Xóa</span>
						<span class="btn btn--sm btn--info">Edit</span>
					</p>
				</div>
			</li>
		`;
	});
	listCourses.innerHTML = htmls.join('');
}