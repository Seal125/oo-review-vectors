import math

class Vec:
    def __init__(self, x, y):
        self.x = x
        self.y = y
        self.__length = math.sqrt(self.x ** 2, self.y ** 2)

    def plus(self, new_vec):
        return Vec((self.x + new_vec.x), (self.y + new_vec.y))

    def minus(self, new_vec):
        return Vec((self.x - new_vec.x), (self.y - new_vec.y))

    @property
    def length(self):
        return self.__length

    @staticmethod
    def distance(self, point1, point2):
        return math.sqrt((point2[0] - point1[0])**2 + (point2[1] - point1[1])**2)