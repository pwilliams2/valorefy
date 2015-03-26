

from lib.base import BaseHandler


class KellyPage(BaseHandler):
    def get(self):
        self.render_template('templates/kelly.html')



