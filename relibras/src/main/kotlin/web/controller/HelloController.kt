package web.controller

import io.micronaut.http.annotation.Controller
import io.micronaut.http.annotation.Get
import web.database.WordDao
import web.dto.Word
import javax.inject.Inject

@Controller("/words")
class HelloController {

    @Inject
    lateinit var wordDao: WordDao

    @Get("/random")
    fun index(): List<Word>{
        return wordDao.getRandomWords(3)
    }
}