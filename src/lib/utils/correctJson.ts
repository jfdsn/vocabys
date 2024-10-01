export const correctResult = (result: string) => {
    return result
        .replace(/(\w+):/g, '"$1":') // Adiciona aspas duplas às chaves
        .replace(/:\s*'/g, ':"') // Substitui a primeira parte de valores para remover aspas simples antes dos valores
        .replace(/'/g, '"') // Substitui todas as aspas simples por aspas duplas
        .replace(/,\s*}/g, '}') // Remove vírgulas extras antes de chaves de fechamento
        .replace(/,\s*]/g, ']') // Remove vírgulas extras antes de colchetes de fechamento
        .replace(/},\s*]/g, '}]'); // Remove vírgula extra no final de um objeto em um array

}
            