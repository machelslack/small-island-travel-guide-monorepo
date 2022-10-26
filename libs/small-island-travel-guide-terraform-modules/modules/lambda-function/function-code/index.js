const hosts = [
	"Schindlers List",
	"Shawshank Redemption",
	"Batman The Dark Knight",
	"Spider-Man : No Way Home",
	"Avengers",
];

exports.handler = async (event) => {
	return {
		statusCode: 200,
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ hosts }), //sending the array of movies as stringified JSON in the response
	};
};