<template>
  <div id="bienvenida">
    <h1> Bienvenido {{this.usuario}} estos son los precios actuales</h1>
    <table id="tabla-datos" border="1">
      <tbody> <tr>
        <th id="vacio"></th>
        <th id="compra">COMPRA</th>
        <th id="venta">VENTA</th>
        </tr>
        <tr>
        <th id="btc">BITCOIN</th>
        <th id="comprabtc">{{ btc.totalAsk }}</th>
        <th id="ventabtc">{{ btc.totalBid }}</th>
        </tr>

        <tr>
        <th id="bnb">BNB</th>
        <th id="comprabnb">{{ bnb.totalAsk }}</th>
        <th id="ventabnb">{{ bnb.totalBid }}</th>
 

        </tr>
        <tr>
        <th id="xrp">XRP</th>
        <th id="compraxrp">{{ xrp.totalAsk }}</th>
        <th id="ventaxrp">{{ xrp.totalBid }}</th>
 
        </tr>
      </tbody>
      </table>
      
    
    
    

  </div>
</template>
<script>
import router from "@/router"
import login from "@/views/LoginCuenta.vue"
import axios from "axios"
import precios from "@/services/precios.js"

export default{
  data(){
    return{
      usuario: this.usuario,
      btc:"",
      bnb:"",
      xrp:"",
    }
  },
  created(){
    precios.getbitcoin().then((res) => 
    {this.btc = res.data});

    precios.getbnb().then((res) =>
    {this.bnb = res.data})

    precios.getxrp().then((res) =>
    {this.xrp = res.data});

    }
  
  }

 


</script>


