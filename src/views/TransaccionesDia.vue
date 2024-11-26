<template>
    <div id="transacciones">
        <form id="transaccioneshoy">
            <label for="operacion">Operacion: </label>
            <select id="operacion">
                <option>Comprar</option>
                <option>Vender</option>
            </select>
            <label for="tipomoneda">Tipo de moneda: </label>
            <select id="tipo">
                <option>BTC</option>
                <option>BNB</option>
                <option>XRP</option>
            </select>
            <label for="cantidad"> Cantidad: </label>
            <input id="cantidad" type="numbre"> 
            
        </form>

    </div>
</template>
<script>
export default{
    data(){
        return{
            
        }
    }
}
</script>