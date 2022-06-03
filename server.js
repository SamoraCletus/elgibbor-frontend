// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/build'));
app.use(favicon(__dirname + '/build/favicon.ico'));
app.get('/*', function (req, res) {  
res.setHeader('Cache-Control', 'no-store, no-cache, must-           revalidate, proxy-revalidate, max-age=0')                           res.sendFile(path.join(__dirname + '/build/index.html'));
});