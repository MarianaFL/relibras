package web.database

import web.dto.Subject
import web.dto.Word


interface WordDao {
    fun getRandomWords(amount: Int) : List<Word>
    fun getRandomWordsBySubject(amount: Int, subject: Subject) : List<Word>
}