const books = [
    { title: 'Book One', genre : 'Fiction', published: 1981, edition: 2004
    },
    { title: 'Book Two', genre : 'Non-Fiction', published: 1992, edition: 2008
    },
    { title: 'Book Three', genre : 'History', published: 1999, edition: 2007
    },
    { title: 'Book Four', genre : 'Non-Fiction', published: 1989, edition: 2010
    },
    { title: 'Book Five', genre : 'Science', published: 2009, edition: 2014
    },
    { title: 'Book Six', genre : 'Fiction', published: 1987, edition: 2010
    },
    { title: 'Book Seven', genre : 'History', published: 1986, edition: 1996
    },      
    {title: 'Book Eight', genre : 'Science', published: 2011, edition: 2016
    }
]

let userBooks = books.filter((bk) => bk.genre ==='History' )
console.log(userBooks) 
//{
//    title: 'Book Three', genre : 'History', published: 1999, edition: 2007
//},
//{
//    title: 'Book Seven', genre : 'History', published: 1986, edition: 1996
//}

userBooks = books.filter((bk) => bk.published <=1999 && bk.genre ==='History')
console.log(userBooks)
//{
//    title: 'Book Seven', genre : 'History', published: 1986, edition: 1996
//}

