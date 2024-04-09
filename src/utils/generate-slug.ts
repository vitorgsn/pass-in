export function slugify(text: string): string {
    return text
        .toLowerCase() // Transforma tudo para minúsculas
        .normalize('NFD') // Remove acentos
        .replace(/[\u0300-\u036f]/g, '') // Remove caracteres de combinação de acentos
        .replace(/[^a-z0-9]/g, '-') // Substitui caracteres que não são letras nem números por hífens
        .replace(/-+/g, '-') // Remove múltiplos hífens consecutivos
        .replace(/^-|-$/g, ''); // Remove hífens do início e do fim
}