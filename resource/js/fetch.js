// Trang lấy json dymmy: https://jsonplaceholder.typicode.com/posts

let postApi = 'https://jsonplaceholder.typicode.com/posts';
fetch(postApi).then(function(response){
	return response.json(); // JSON.parse: JSON -> Javascript type
}).then(function(posts){
	let htmls = posts.map(function(post){
		return `<li>
			<h2>${post.title}</h2>
			<p>${post.body}</p>
		</li>`;
	});
	let html = htmls.join('');
	document.getElementById('lst-posts').innerHTML = html;
}).catch(function(error){
	alert('Có lỗi liên kết dữ liệu.');
});