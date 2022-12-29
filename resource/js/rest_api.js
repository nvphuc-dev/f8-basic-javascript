let courseApi = "http://localhost:3000/coures";
let editFormData;

function start(){
	// getCourses(function(courses){
	// 	renderCourses(courses);
	// });
	getCourses(renderCourses);
}

start();


// Functions
function clearForm(){
	document.querySelector('input[name="title"]').value = "";
	document.querySelector('textarea[name="description"]').value = "";
}

function getFormData() {
	return {
		title: document.querySelector('input[name="title"]').value,
		description: document.querySelector('textarea[name="description"]').value
	}
}

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

function editCourseCall(id){
	// Call get course details by id API
	fetch(courseApi +'/?id=' + id, {
		method: "GET"
	}).then((res)=>res.json()).then((response)=>{
		console.log("Edit info", response);
		editFormData =  response[0];
		setFormData(editFormData.title, editFormData.description);
	});
}

function setFormData(title, description){
	document.querySelector('input[name="title"]').value = title;
	document.querySelector('textarea[name="description"]').value = description;
}

// callled this function when user click on button
function submitForm() {
	if(!editFormData) handleCreateForm(); // if the editFormData is undefined then call handleCreateForm()
	else handleEditCourse();
}

function handleEditCourse(){
	let formData = getFormData();
	formData['id'] = editFormData.id; // get id from selected course
	
	fetch(courseApi, {
		method: "POST",
		headers: {
			"Content-Type":"application/json"
		},
		body:JSON.stringify(formData)
	}).then((res)=>res.json()).then((response)=>{
		clearForm();
		getData();
	});
}

function handleCreateForm(){
	let formData = getFormData();
	storeCourse(formData, function(){
		getCourses(renderCourses);
		clearForm();
	});
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
						<span class="btn btn--sm btn--info" onclick=editCourseCall(${course.id})>Sửa</span>
					</p>
				</div>
			</li>
		`;
	});
	listCourses.innerHTML = htmls.join('');
}