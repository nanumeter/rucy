class Node(object):
    def __init__(self, id):
        self.id = id


class Link(object):
    def __init__(self, source, target, value):
        self.source = source
        self.target = target
        self.value = value


class SankeyChart(object):
    def __init__(self, nodes, links):
        self.nodes = nodes
        self.links = links
        