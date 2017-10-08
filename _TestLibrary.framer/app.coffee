

cloudstitch = require "cloudstitch"

# The `get` method takes your Cloudstitch username and appname, and
# it returns the contents of your spreadsheet as a JSON object.
cloudstitch.get('vsteurs', 'testlibrary', (data) -> 
  print data
)



flow = new FlowComponent

Page.width = Canvas.width
Page.backgroundColor = "#F2F2F2"

flow.showNext(Page)

articlesModule = new ScrollComponent
	width: Page.width
	height: Card_01.height + 140
	backgroundColor: 'white'
	parent: Page

articlesModule.scrollable = true
articlesModule.scrollVertical = false

for i in [0..5]
	articleCard = Card_01.copy()
	articleCard.name = 'articleCard0' + i
	articleCard.parent = articlesModule.content
	articleCard.x = 20 + articleCard.width * i + i*20
	articleCard.y = 100
	articleCard.children[0].image = Utils.randomImage()
	articleCard.children[1].text = 'hello'

