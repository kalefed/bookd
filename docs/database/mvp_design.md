# Database Design Requirements
- A user will have a collection of books that they can add (reminiscint of a spreadsheet for a book tracker). They will be able to track metadata around specific books.
- A user's book will include its title, author, genre (predetermined and custom), its status/shelf (currently reading, TBR, read), reading format (digital, physical, ebook, library)
- A user will be able to track the status on their book. Depending on what the books status/shelf is will depend on what the different statuses can be. For example, a book that is on the currently reading shelf will have a start date and no end date. But a user could reread a book, so a book can have multiple status entries, with each entry tracking their progress. For example, if on day 1 they read 40%, day 2 they read to 60%, this should all be kept track of (date of the status entry and the progress made through the book). 
- Once a book is done, a user can write a review (notes, star rating)

