package web.dto

enum class Subject {
    ALIMENTO_BEBIDA,
    ANIMAL_INSETO_PEIXE_AVE,
    ANO_SIDERAL,
    APARELHO_MAQUINA,
    CASA,
    COR_FORMA,
    CORPO,
    ESPORTE_DIVERSAO,
    FAMILIA,
    FRUTA,
    HIGIENE_SAUDE,
    LEGUME_VERDURA,
    MATERIA_SUBSTANCIA,
    NENHUM,
    NUMERAL_DINHEIRO,
    PAIS_ESTADO_CIDADE,
    PLANTA_FLOR_NATUREZA,
    PROFISSAO_TRABALHO,
    SENTIMENTOS,
    TRANSPORTE_VEICULO,
    VESTUARIO_COMPLEMENTOS;

    companion object {
        fun getRandomSubject(): Subject {
            return values()[(0 until values().size).random()]
        }
    }

}