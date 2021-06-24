import { getDb } from '@/db'


export async function createCommentLikesTable() {
    await getDb().exec(`
        CREATE TABLE IF NOT EXISTS comment_likes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        userID INTEGER,
        commentID INTEGER,
        FOREIGN KEY (userId) REFERENCES users (id),
        FOREIGN KEY (commnetId) REFERENCES comments (id)
    
        )
    `)
}



export async function like_commnet(user,comment) {
    return getDb().run(
        `
        INSERT INTO comment_likes (userID,commnetID) values (?, ?)
       `,
        user.id,
        comment.id
    )
}
