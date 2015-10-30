var config= require( "./webpack.config.dev")
var fs= require( "fs")
var Koa= require( "koa")
var koaWebpackDevMiddleware= require( "koa-webpack-dev-middleware")
var koaWebpackHotMiddleware= require( "koa-webpack-hot-middleware")
var path= require( "path")
var webpack= require( "webpack")

var app= new Koa()
var compiler= webpack( config)

app.use( koaWebpackDevMiddleware(
	compiler,
	{
		noInfo: true,
		publicPath: config.output.publicPath
}))

app.use( koaWebpackHotMiddleware( compiler))

var indexFile= path.join( __dirname, "index.html")
app.use( function*( next){
	if( this.url== "/"|| this.url== "/index.html"){
		this.response.type= "text/html"
		this.body= fs.createReadStream(indexFile)
	}
	yield next
})

app.listen( 3000, "localhost", function( err) {
	if ( err) {
		console.log( err)
		return
	}
	console.log( "Listening at http://localhost:3000")
})
