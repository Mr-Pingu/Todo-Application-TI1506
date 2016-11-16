HTML request and reply



bits
frames
packets   --> IP  Internet Protocol
segments  --> TCP transmission control protocol
data
data
data     --> HTTP  Hypertet Transfer Protocol


HTTP request message is een text:
GET / HTTP/1.1  --> GET request en HTTP/1.1

HTTP response message
HTTP/1.1 200 OK
Date: Fri, 01 Aug 2014 13
--> + a body (content of the shizzle).

primary entity *header fields*:
Content-Type
Content-Length
content-Language
Content-encoding --> what type of encodings can be used (compression etc.)
content- expires

b, but what is bandwidth? that is the capacity used
b, it is prone to parsing errors.
c, only the body. because the header needs to be read.

Expires
web caches

http request --> web cache -> valid local copy? --> serve copy
                                                --> forward
the web cache is a server kind of.

different than webbrowser caching

HTTP respons message
HTTP/1.1 200 OK
1xx informational
2xx success (200 OK)
3xx Redirected
4xx Client error (404 not Found)
5xx server error

HTTP methods

GET / Get a document from the Web server
HEAD get the header of a document from the web server
POST send data from the client to the server for processing
PUT save the body of the request on the server

telnet: open a TCP connection (transmission control protocol)
then you can play as if you are a browser and write your own html requests.

ipv6, wat is er anders aan dan ipv5? 32 cs 128 bits. 
