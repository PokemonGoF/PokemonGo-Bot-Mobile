import tornado
from tornado import websocket, web, httpserver, ioloop
import json

cl = []

class SocketHandler(websocket.WebSocketHandler):
    def check_origin(self, origin):
        return True

    def open(self):
        if self not in cl:
            cl.append(self)

    def on_message(self, data):
        print 'Messaged received'
        print data

    def on_close(self):
        if self in cl:
            cl.remove(self)


app = web.Application([
    (r'/ws', SocketHandler)
])

if __name__ == '__main__':
    app.listen(5000)
    ioloop.IOLoop.instance().start()