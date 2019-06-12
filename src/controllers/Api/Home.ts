class Home {
	public static index(req, res, next): any {
		res.json({
			message: "Hello World"
		});
	}
}

export default Home;