class Home {
  public static index(req, res, next): any {
    res.json({
      message: "User Service"
    });
  }
}

export default Home;
