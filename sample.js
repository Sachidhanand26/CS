var http=require("http");
function samp(request, response)
{
    response.writeHead(200,{"Content-Type":"text/html"});
    response.write("Hello"); response.write("<h1>Hello World</h1>");
    response.end("<html><body>Home,<a href="file:///C:/Personal/College/Semester%204/WT/COMIKS%20READER%20WT%20PROJECT%202/bootlogin.html"</a></body></html>"); 
    console.log("Request received");
} var server=http.createServer(samp);
server.listen(8000);
