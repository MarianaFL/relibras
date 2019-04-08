package web.controller

import io.micronaut.http.annotation.Controller
import io.micronaut.http.annotation.Get
import web.service.WordService
import web.dto.Word
import javax.inject.Inject

@Controller("/words")
class WordController {

    @Inject
    lateinit var wordService: WordService

    @Get("/random{/number}")
    fun randomWords(number: Int?): List<Word>{
        return wordService.getRandomWords(number?: 1)
    }
}