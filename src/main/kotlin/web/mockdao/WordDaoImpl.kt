package web.mockdao

import io.micronaut.context.annotation.Bean
import web.database.WordDao
import web.dto.Subject
import web.dto.Word
import javax.inject.Singleton

@Singleton
class WordDaoImpl : WordDao{
    override fun getRandomWords(amount: Int): List<Word> {
        return (1..amount).map {
            Word("Word $it",
                    "Test acception $it",
                    Subject.ALIMENTO_BEBIDA,
                    "/static/video$it.mp4")
        }

    }

    override fun getRandomWordsBySubject(amount: Int, subject: Subject): List<Word> {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }
}