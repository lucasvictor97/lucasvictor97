var tmi = require('tmi.js');
var options = 
{
	options: 
	{
		debug: true
	},
	connection: 
	{
		cluster: "aws",
		reconnect: true
	},
	identity: 
	{
		username: "lucasvictor_c",
		password: "oauth:960r7elb96gdugojfzm25u4b5i55hf",  
	},
	channels: ['#gaules', '#cachorro1337c', '#stereonline', '#deercheerup', '#zanfas_cenegal", '#sr_thulium', '#saullo', '#StereOfflineX', '#brusanada', '#Dilera', '#skyzaooofps', '#umbrinquedo', '#zigueira', '#murilo_rt', '#jeffaocs', '#csrfps', '#PlayHard', '#brnwowzk1', '#skipnho',] //ADICIONA OS CANAIS AQ COM '#NOME'
};

var client = new tmi.client(options);

	client.connect();
	client.on("connected", function (address, port)
	{
		console.log("address: " + address + " port: " + port);
		client.action("999mateus", "Hello 999mateus!")
	});
