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
		password: "oauth:3n9yvbgphk2rrmfka7ese9q65yzi5f",  
	},
	channels: ['#gaules', '#fluyr', '#cogu', '#recruta_xnavyzzz', '#marcobc', '#waveigl', '#eu_sou_um_brinquedo', '#rzeragod_', '#velhovamp1', '#zigueira', '#pescocofino', '#luquet4', '#leogullo', '#johnpittertv', '#murilo_rt', '#jeffaocs', '#csrfps', '#mibrtv', '#marcaorx', '#brnwowzk1', '#Vovo', '#furiatv', '#stereonline', '#skipnho', '#skipnholive', '#saullo', '#mch_agg',] //ADICIONA OS CANAIS AQ COM '#NOME'
};

var client = new tmi.client(options);

	client.connect();
	client.on("connected", function (address, port)
	{
		console.log("address: " + address + " port: " + port);
		client.action("999mateus", "Hello 999mateus!")
	});
