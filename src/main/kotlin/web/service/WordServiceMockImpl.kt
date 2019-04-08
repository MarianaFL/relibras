package web.service

import web.dto.Subject
import web.dto.Word
import javax.inject.Singleton

@Singleton
class WordServiceMockImpl : WordService{
    override fun getRandomWords(amount: Int): List<Word> {
        return (1..amount).map {
            Word("Word $it",
                    "Test acception $it",
                    Subject.getRandomSubject(),
                    "/static/video$it.mp4")
        }

    }

    override fun getRandomWordsBySubject(amount: Int, subject: Subject): List<Word> {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }
}