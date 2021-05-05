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
		password: "oauth:dr440jsarn64of6o7ex4v4qfx25sld",  
	},
	channels: ['#gaules', '#stereonline', '#deercheerup', '#zanfas_cenegal", '#sr_thulium', '#saullo', '#StereOfflineX', '#brusanada', '#Dilera', '#skyzaooofps', '#umbrinquedo', '#velhovamp1', '#zigueira', '#pescocofino', '#murilo_rt', '#jeffaocs', '#csrfps', '#PlayHard', '#mibrtv', '#brnwowzk1', '#furiatv', '#skipnho',] //ADICIONA OS CANAIS AQ COM '#NOME'
};

var client = new tmi.client(options);

	client.connect();
	client.on("connected", function (address, port)
	{
		console.log("address: " + address + " port: " + port);
		client.action("999mateus", "Hello 999mateus!")
	});
