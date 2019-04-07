package web

import io.micronaut.runtime.Micronaut

object Application {

    @JvmStatic
    fun main(args: Array<String>) {
        Micronaut.build()
                .packages("web")
                .mainClass(Application.javaClass)
                .start()
    }
}