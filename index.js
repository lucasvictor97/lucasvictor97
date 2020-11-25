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
		username: "lucasvictor97",
		password: "oauth:aschkd09bjetl6719gblt7ppndw1r6",  
	},
	channels: ['#gaules', '#stereonline', '#davyjones', '#gaguinhoo157', '#rainbow6br', '#rainbow6', '#waveigl', '#umbrinquedo', '#velhovamp1', '#zigueira', '#pescocofino', '#murilo_rt', '#jeffaocs', '#csrfps', '#mibrtv', '#brnwowzk1', '#Vovo', '#furiatv', '#skipnho', '#skipnholive', '#saullo', '#mch_agg',] //ADICIONA OS CANAIS AQ COM '#NOME'
};

var client = new tmi.client(options);

	client.connect();
	client.on("connected", function (address, port)
	{
		console.log("address: " + address + " port: " + port);
		client.action("999mateus", "Hello 999mateus!")
	});
