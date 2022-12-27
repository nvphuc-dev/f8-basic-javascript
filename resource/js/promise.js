let users = [
	{
		id: 1,
		name: 'Kenvin Nguyen'
	},
	{
		id: 2,
		name: 'Son Dang'
	},
	{
		id: 3,
		name: 'Teresa Teng'
	},
	//....
];

let comments = [
	{
		id: 1,
		user_id: 3,
		comment: 'Ra chưa vậy anh?'
	},
	{
		id: 2,
		user_id: 2,
		comment: 'Ra rồi em ơi :)'
	},
	{
		id: 3,
		user_id: 3,
		comment: 'Tuyệt lắm anh ^^.'
	}
];

// 1. Lấy comments
// 2. Từ comments lấy ra user_id
// từ user_id lấy ra user tương ứng

// Fake API // giả sử làm giả API
function getComments(){
	return new Promise(function(resolve){
		setTimeout(function(){
			resolve(comments);
		}, 1000);
	})
}

function getUsersByIds(userIds){
	return new Promise(function(resolve){
		let result = users.filter(function(user){
			return userIds.includes(user.id);
		});
		setTimeout(function(){
			resolve(result);
		}, 1000);
	});
}

getComments().then(function(comments){
	let userIds = comments.map(function(comment){
		return comment.user_id;
	});

	return getUsersByIds(userIds).then(function(users){
		return {
			users: users,
			comments: comments
		};
	});
}).then(function(data){
	let listComments = document.getElementById('lst-comments');
	let html = '';
	data.comments.forEach(function(comment){
		let user = data.users.find(function(user){
			return user.id === comment.user_id;
		});
		html += `<li>${user.name}: ${comment.comment}</li>`;
	});
	listComments.innerHTML = html;
});

// Nắm vững kiến thức sau:
// 1. Array
// 2. Function, callback
// 3. Promise
// 4. DOM
