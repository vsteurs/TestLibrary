
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

# edit data on https://docs.google.com/spreadsheets/d/1MPpDDvpHpx9thGl7zWet4ueM36k3qS2MaD9lwH6g4TU/edit#gid=0
# convert spreadsheet into json on https://cloudstitch.com/project/newlibrary
# sync json to prototype with github on https://github.com/vsteurs/testlibrary 
# tab 1: Cards / title, description, image
data = JSON.parse Utils.domLoadDataSync "_data/testdata.json"

n = data.Cards.length - 1

for i in [0..n]
	articleCard = Card_01.copy()
	articleCard.name = 'articleCard0' + i
	articleCard.parent = articlesModule.content
	articleCard.x = 20 + articleCard.width * i + i*20
	articleCard.y = 100
	articleCard.children[0].image = data.Cards[i].image
	articleCard.children[1].text = data.Cards[i].title
	articleCard.children[2].text = data.Cards[i].description


