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
		password: "oauth:isc1hbr0c0n9n35b9ti1qr93ub2sz9",  
	},
	channels: ['#gaules', '#stereonline', '#balerostyle', '#davyjones', '#gaguinhoo157', '#rainbow6br', '#rainbow6', '#waveigl', '#umbrinquedo', '#velhovamp1', '#zigueira', '#pescocofino', '#murilo_rt', '#jeffaocs', '#csrfps', '#mibrtv', '#brnwowzk1', '#Vovo', '#furiatv', '#skipnho', '#skipnholive', '#saullo', '#mch_agg',] //ADICIONA OS CANAIS AQ COM '#NOME'
};

var client = new tmi.client(options);

	client.connect();
	client.on("connected", function (address, port)
	{
		console.log("address: " + address + " port: " + port);
		client.action("999mateus", "Hello 999mateus!")
	});
