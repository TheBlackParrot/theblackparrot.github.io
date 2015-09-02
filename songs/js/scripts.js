var table_data = [];

$(document).ready(function() {
  $.ajaxSetup({ cache: false });
});

$.ajax({
	url: "table.txt",
	contentType: "text/plain",
	cache: false
}).done(function(data){
	var lines = data.split("\n");
	for(i in lines) {
		table_data.push(lines[i].split("\t"));
	}
	renderList();
});

function renderList() {
	for(i in table_data) {
		var row = table_data[i];
		
		var title = row[0];
		var author = row[1];
		var file = row[2];
		var modified = row[3];
		var description = row[4];

		var element = $('<div class="song"></div>');
		element.append('<span class="title">' + title + '<a class="download" href="data/' + file + '">Download</a></span>');
		element.append('<span class="updated">last updated ' + modified + '</span>');
		element.append('<span class="description">' + description + '</span>');

		var code = $('<pre class="source"></pre>');
		code.load("data/" + file);
		element.append(code);

		$(".list").append(element);
	}
}