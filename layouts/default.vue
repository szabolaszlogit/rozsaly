<template>
  <v-app dark>
<!-- top menubar (app-bar) -->
    <v-app-bar
      :clipped-left="clipped"
      flat
      fixed
      app
      dark
      color="#6A76AB"
      shrink-on-scroll
      :height="height"
      src="/header.jpg"
      fade-img-on-scroll
      scroll-threshold="300"
    >

      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

<!-- Nav icon -->
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="d-lg-none d-xl-flex"/>
<!-- Nav title -->
      <v-toolbar-title v-text="title"/>
      <v-spacer />
 <!--Top menu   -->
<v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">      
       <v-btn icon  v-bind="attrs" v-on="on" href="https://www.facebook.com/rozsaly/" target="_blank">
        <v-icon
        x-large>mdi-facebook</v-icon>
      </v-btn>     
      </template>
      <span>Facebook</span>
</v-tooltip>


<v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
      <v-btn icon  v-bind="attrs" v-on="on"  href="https://www.youtube.com/user/Rozsaly" target="_blank">
        <v-icon 
        x-large>mdi-video</v-icon>
      </v-btn>
      </template>
      <span>Youtube</span>
</v-tooltip>

    </v-app-bar>

<v-card  >
<v-navigation-drawer 
      v-model="drawer"
      :clipped="clipped"
      fixed
      app
      width="auto"
    >
<!-- close icon -->
   <v-card 
    class="d-flex pa-2 d-lg-none"
    outlined
    tile
  >
  <v-spacer></v-spacer>
    <div>      
    <v-icon  @click.stop="drawer = !drawer"
    >
      mdi-close
    </v-icon>
    </div>
  </v-card>

<!-- sidebar (navagation-drawer) menu -->

<v-list 
v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router             
          exact>
 
        <v-list-item  
          :to="item.to"
          router
          exact   
          v-if="!item.subLinks" > 
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item> 

      <v-list-group v-if="item.subLinks" >
        <template v-slot:activator>          
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          v-for="sublink in item.subLinks"
          :key="sublink.text"
          :to="sublink.to"
          router
          exact
        >
        <v-list-item-action class="pl-4">
        <v-icon>{{ sublink.icon }}</v-icon>
        </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="sublink.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>

    </v-list>

    </v-navigation-drawer>
</v-card>

<!-- Main content -->
    <v-main>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-main>

<!-- Footer -->

<Footer />
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      height: 200,
      clipped: true,
      drawer: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Rozsály',
          to: '/'
        },
        {
          icon: 'mdi-file-document-multiple',
          title: 'Pályázatok',
          to: '',
          subLinks : [
            {
                text : 'Erdőháti Bölcsőde',
                to    : '/palyazatok/top141-19',
            },
            {
                text : 'ASP',
                to    : '/palyazatok/asp',
            },
            {
                text : 'MFP-NHI/2019',
                to    : '/palyazatok/mfpnhi2019',
            },
            {
                text : 'MFP-AEE/2020',
                to    : '/palyazatok/mfpaee2020',
            },
            {
                text : 'MFP-SZL/2019',
                to    : '/palyazatok/mfpszl2019',
            }
        ]
        },
        {
          icon: 'mdi-warehouse',
          title: 'Községünkről',
          to: '/inspire',
          subLinks : [
            {
                text : 'Rozsály',
                to    : '/kozsegunkrol/about',
            },
            {
                text : 'Történelem',
                to    : '/kozsegunkrol/tortenelem',
            },
            {
                text : 'Látnivalók',
                to    : '/kozsegunkrol/latnivalok',
            },
            {
                text : 'Hírességek',
                to    : '/kozsegunkrol/hiressegek',
            },
            {
                text : 'Térképek',
                to    : '/kozsegunkrol/terkepek',
            }
        ]
               },
        {
          icon: 'mdi-chart-bubble',
          title: 'Önkormányzat',
          to: '/inspire',
          subLinks : [
            {
                text : 'Önkormányzat',
                to    : '/onkormanyzat/onkormanyzat',
            },
            {
                text : 'Képviselőtestület',
                to    : '/onkormanyzat/testulet',
            },
            {
                text : 'Jegyző',
                to    : '/onkormanyzat/jegyzo',
            },
            {
                text : 'Címlista',
                to    : '/onkormanyzat/cimlista',
            },
        ]
        },
        {
          title: 'Rendeletek',
          to: '/inspire',          
          icon  : 'mdi-arrow-right-drop-circle-outline',
          subLinks : [
            {
                text : 'Helyi adó',
                to    : '/rendelet/helyiado',
            },
            {
                text : 'Avar és hulladék égetés',
                to    : '/rendelet/avaregetes',
            },
            {
                text : 'Kérelem külterületi égetéshez',
                to    : '/rendelet/kerelemegeteshez',
            },
            {
                text : 'Eb összeíró lap, eb bejelentő lap',
                to    : '/rendelet/ebbejelento',
            }
        ]
        },
        {
          icon: 'mdi-account-multiple',
          title: 'Intézmények',
          to: '/inspire',
          subLinks : [
            {
                text : 'Egészségügy',
                to    : '/intezmenyek/egeszsegugy',
            },
            {
                text : 'Idősek klubja',
                to    : '/intezmenyek/idosekklubja',
            },
            {
                text : 'Szociális Központ',
                to    : '/intezmenyek/roszak',
            }
        ]
        },
        {
          icon: 'mdi-account-check-outline',
          title: 'Oktatás, nevelés',
          to: '/inspire',
          subLinks : [
            {
                text : 'Iskola',
                to    : '/oktatas/iskola',
            },
            {
                text : 'Óvoda',
                to    : '/oktatas/ovoda',
            }
        ]
        },
        {
          icon: 'mdi-church',
          title: 'Egyházak',
          to: '/inspire',
          subLinks : [
            {
                text : 'Görögkatolikus',
                to    : '/egyhazak/katolikus',
            },
            {
                text : 'Református',
                to    : '/egyhazak/reformatus',
            }
        ]
        },
        {
          icon: 'mdi-church',
          title: 'Alapítvány',
          to: '/inspire',
          subLinks : [
            {
                text : 'Bemutatkozás',
                to    : '/alapitvany/bemutatkozas',
            }
        ]
        },
        {
          icon: 'mdi-account-group',
          title: 'Kulturális egyesület',
          to: '/egyesulet'
          },
        {
          icon: 'mdi-run-fast',
          title: 'Sportegyesület',
          to: '/sportegyesulet'
          },
      ],
      title: 'Rozsaly'
    }
  }
}
</script>

<style>
::-webkit-scrollbar {
width: 0.1em;
background: blue lighten-4;
display: inline !important;
}
</style>