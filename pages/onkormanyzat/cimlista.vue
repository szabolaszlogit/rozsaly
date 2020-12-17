<template>
<v-container>
    <v-row>
        <v-col>

<v-card
            
          >
            <v-card-title class="headline">
              Címlista
            </v-card-title>

            <v-card-subtitle>– a Rozsály község illetékességi területén működő kis-és nagykereskedelmi, vendéglátó egységek, valamint szolgáltató helyeiről –
<br>Kis- és nagykereskedelmi egységek, vendéglátó üzletek:</v-card-subtitle>
            
            <v-card-text class="text--withe">
 <div v-for="item in items"  :key="item.left">             
<p class="accent white--text text-center pa-2">Üzlet neve: {{ item.name }}</p>
<p>Üzlet címe: {{ item.adres }}</p>
<p>Kereskedő neve: {{ item.name2 }}</p>
<p>Székhely címe: {{ item.adres2 }}</p>
<p>Termékkör: {{ item.product }}</p>
<v-divider></v-divider>
</div>  
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
            name: 'Fradi Söröző',
            adres: '4971 Rozsály, Kossuth u. 39.',
            name2: 'Osváth Zsolt',
            adres2: '4971 Rozsály, Kossuth u. 39.',
            product: 'Palackos gáz, Szeszes ital, Élelmiszer',
          }, 
          {
            name: 'Magyar Posta',
            adres: '4971 Rozsály, Kossuth u. 21.',
            name2: 'Magyar Posta Zrt. ',
            adres2: '1138 Budapest XIII. Dunavirág u. 2-6.',
            product: 'Könyv, folyóirat',
          },
          {
            name: 'Rozsály Jóléti Bolt',
            adres: '4971 Rozsály, Kossuth u. 39/a',
            name2: 'Rozsály Községért Jóléti Szolgálat Helyi Alapítvány',
            adres2: '4471 Rozsály, Kossuth u.21/a',
            product: 'Élelmiszer',
          }, 
          {
            name: 'B. S. Gazdabolt',
            adres: '4971 Rozsály, Kossuth u. 19.',
            name2: 'B. S. AGRO Termelő, Kereskedelmi és Szolgáltató Bt.',
            adres2: '4971 Rozsály, Kossuth u. 156.',
            product: 'Mezőgazdasági termékek',
          }, 
          {
            name: 'Park Büfé',
            adres: '4971 Rozsály, Kossuth u. 13.',
            name2: 'Tircsi Szilárd',
            adres2: '4974 Zajta, Petőfi u. 15.',
            product: 'Szeszes ital',
          },
          {
            name: '70. sz. élelmiszerbolt',
            adres: '4971 Rozsály, Kossuth u. 17.',
            name2: 'NYÍRZEM Zrt.',
            adres2: '4600 Kisvárda, Szent L. u. 38.',
            product: 'Élelmiszer',
          }, 
          {
            name: 'Mini Diszkont Vegyeskereskedés',
            adres: '4971 Rozsály, Kossuth u. 114.',
            name2: 'Ignácz György',
            adres2: '4971 Rozsály, Kossuth u. 114.',
            product: 'Élelmiszer, papír-írószer, játék, vegyi áru, ajándéktárgy',
          },
          {
            name: 'Takarmánybolt',
            adres: '4971 Rozsály, Kossuth u. 112.',
            name2: 'Ignácz György',
            adres2: '4971 Rozsály, Kossuth u. 114.',
            product: 'Takarmánybolt',
          }, 
          {
            name: '',
            adres: '4971 Rozsály, Kossuth u. 21/a',
            name2: 'Nyisztorné Jakab Krisztina',
            adres2: '4971 Rozsály, Kossuth u. 140/c',
            product: 'Ruházat',
          }, 
          {
            name: 'Pappné Nagy Tünde',
            adres: '4971 Rozsály, Kossuth u. 21/a',
            name2: 'Pappné Nagy Tünde',
            adres2: '4976 Garbolc, Kossuth u. 7.',
            product: 'Virág, ajándék, papír és írószer, játék, kávé, ital, édesség',
          }, 
          {
            name: 'TIMI TURI',
            adres: '4971 Rozsály, Kossuth u. 56.',
            name2: 'Barnáné Ámik Tímea',
            adres2: '4971 Rozsály, Kossuth u. 72.',
            product: 'Ruházat',
          }, 
          
          
        ],
      }
    },
  }
</script>

<style>

</style>