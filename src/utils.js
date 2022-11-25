import {randProduct } from "@ngneat/falso"

export let productosIniciales = []

for (let i =0; i <10 ; i ++){
    productosIniciales.push(randProduct())

}
export const getProducts = () => {
 
let simulacionPedido = new Promise((res) => {
    setTimeout(() => {
       
        res(productosIniciales);
        
    }, 2000); 
})

return simulacionPedido
}

export const getProductsByCategoryId = (id) => {

    let simulacionPedido = new Promise((res) => {
        setTimeout(() => {
           
            res(productosIniciales.filter(item=>item.category ==id ))
        }, 2000)
    
    }) 
    return simulacionPedido

}

