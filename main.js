//this is where we would get user info with the document


function bookInfo(title,author,pages,read){
this.title = title
this.author =author
this.pages = pages
this.read = read

this.book = function(){
    console.log(`the title is called ${this.title} by ${this.author} there are ${this.pages} pages, and you have ${this.read}`)
}

}

const book1 = new bookInfo("harry legges","steve",25,true)

book1.book()