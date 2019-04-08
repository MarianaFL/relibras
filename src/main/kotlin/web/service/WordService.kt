package web.service

import web.dto.Subject
import web.dto.Word


interface WordService {
    fun getRandomWords(amount: Int) : List<Word>
    fun getRandomWordsBySubject(amount: Int, subject: Subject) : List<Word>
}