class Config {
  public port = 8080;
  public rootUrl = `/`;
  public domain = process.env.NODE_ENV === 'development' ? 'localhost' : process.env.PUBLIC_URL;
}

export default new Config();
