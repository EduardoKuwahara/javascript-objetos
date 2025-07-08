
/**
 * @param {Array} arrayDeClientes
 * @returns {Array}
 */

export function ordenarClientesPorNome(arrayDeClientes) {

    const copiaArray = [...arrayDeClientes];

 
    copiaArray.sort((clienteA, clienteB) => {
        return clienteA.nome.localeCompare(clienteB.nome);
    });

    
    return copiaArray;
}