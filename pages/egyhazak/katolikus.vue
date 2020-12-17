<template>
<v-container>
    <v-row>
        <v-col>

<v-card
            
          >
            <v-card-title class="headline">
              Görög katolikus egyház
            </v-card-title>

            <v-card-subtitle>4971 Rozsály, Kossuth utca 70.</v-card-subtitle>
            
            <v-card-text class="text--withe">

<v-simple-table>
    <tbody>
        <tr v-for="item in items"  :key="item.left">
        <td>{{ item.left }}</td>
        <td>{{ item.right }}</td>
        </tr>
    </tbody>
</v-simple-table>
<p>Az egyházmegye talán legkeletibb egyházközségének híveit az 1920-as határmódosítás szakította el anyaegyházuktól, Nagypeleskétől. Hamarosan, 1926–27-ben saját, új templomot építettek. 1941-ben már önálló egyházközséggé tudott válni a közösség. A templom falait 1964-ben készített díszítőfestés borítja, teljes ikonosztázionját 1970 és 1973 között Kolozsváry Pál debreceni művész festette. A templom 2013–14-ben jelentős pályázati segítséggel megújult.</p>
<v-divider
class="my-4"
></v-divider>
    <v-btn
    color="primary"
    href="https://www.nyirgorkat.hu/?q=parokia&id=146" target="_blank"
    >
      Weboldal
    </v-btn>
            </v-card-text>             
 </v-card>


        </v-col>
    </v-row>
</v-container>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            left: 'Főesperesség:',
            right: 'Szatmári Főesperesség',
          }, 
          {
            left: 'Esperesi kerület:',
            right: 'Csengeri Esperesi Kerület',
          },
          {
            left: 'A parókia címe:',
            right: '4971 Rozsály, Kossuth utca 70.',
          },   
          {
            left: 'Telefonszám:',
            right: '(44) 368 505',
          },
          
        ],
      }
    },
  }
</script>

<style>

</style>