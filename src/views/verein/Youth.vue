<template>
  <div class="content youth" id="jugend">
    <div class="item">
      <h2 class="item-title effects fade-in">Jugend</h2>
      <div class="item-divider-container">
        <div class="item-divider effects draw-to-right"></div>
      </div>
      <div class="item-image pt-14 effects size-fade-in pt-sm-8">
        <img :src="routImageSource" alt=""/>
      </div>
      <div class="item-row mt-14 mt-sm-6">
        <div class="item-col-6 effects fade-from-left">
          <p class="item-col-text item-text">
            Wir sind eine eigene Abteilung der Schützenbrüderschaft Weidmannsheil Klein Nordende Lieth und die Zukunft
            des Vereins. Die Jugendgruppe hat ihren eigenen Jugendvorstand und eine eigene Jugendkasse.
            <br/><br/>
            Ihr kennt Biathlon? Wir auch. Bei uns geht das nur ohne dem Laufen.
            Spaß an Sportlichen Aktivitäten? Bei uns ja, denn wir brauchen ja nicht laufen.
            Liebst Du Spannung? Es ist immer wieder spannend auf das Ergebnis zu warten.
            <br/><br/>
            Wir ihr seht, ist der Schießsport gar nicht so langweilig wie ihr vielleicht denkt. Dieser Sport hat sehr
            viel mit Konzentration, Aufmerksamkeit und Verantwortung zu tun. Mit fortlaufender Zeit erreicht man beim
            Schießen ein hohes Maß an Körperbeherrschung und übt sich in Disziplin. Nicht zuletzt wird man durch den
            präzise messbaren Erfolg zur weiteren Steigerung der persönlichen Leistung angespornt.
          </p>
        </div>
        <div class="item-col-6 effects size-fade-in align-center">
          <div class="item-col-image mt-sm-5">
            <img src="/assets/verein/jugend1.jpg" alt=""/>
          </div>
        </div>
      </div>
      <div class="item-row mt-7 row-reverse">
        <div class="item-col-6 effects fade-from-right">
          <p class="item-col-text item-text">
            Um den Schießsport aus zu üben benötigt man zwar eine entsprechende „Ausrüstung“. Diese müsst ihr aber nicht
            teuer im Sportfachhandel kaufen, denn ihr bekommt sie vom Verein während des Trainings gestellt. Mit dieser
            „Ausrüstung“ fahrt ihr dann auch zu den Meisterschaften wie Kreismeisterschaften, Landesmeisterschaften und
            vielleicht sogar auch mal zu einer Deutschen Meisterschaft nach München.
            <br/><br/>
            Gegenüber anderen Sportarten muss man nach dem Schießen nicht unter die Dusche oder sich großartig umziehen.
            Man kommt einfach in seinen Alltagsklamotten bei uns vorbei und schlüpft in seine „Ausrüstung“; und nach dem
            Training sitzen die Jugendlichen noch schön gemütlich beisammen und spielen Karten oder unterhalten sich
            einfach nur.
          </p>
        </div>
        <div class="item-col-6 effects size-fade-in align-center">
          <div class="item-col-image mt-sm-5">
            <img src="/assets/verein/jugend2.jpg" alt=""/>
          </div>
        </div>
      </div>
      <p class="item-text pt-7 effects fade-in">
        Uns geht es in der Jugendgruppe um die Gemeinschaft, um das Miteinander und das jeder so genommen wird wie er
        ist, mit all seinen Stärken und Schwächen.
        <br/><br/>
        Wir als Jugendgruppe treffen uns nicht nur während des Trainings, sondern veranstalten auch außerhalb dieser
        Zeit gemeinsame Unternehmungen. Die Jugendgruppe unternimmt u.a. Ausflüge zu den Karl-May-Festspielen nach Bad
        Segeberg, feiert Weihnachtsfeiern u.a. Bowling und nimmt mit am vereinsinternen Spieleabend teil. Auch beim
        alljährlichen Schützenfest hilft die Jugendgruppe tatkräftig mit und unterstützt die Erwachsenen.
      </p>
      <div class="item-image pt-14 effects size-fade-in">
        <img src="/assets/verein/jugend.jpg" alt=""/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    routImageSource() {
      return process.env.VUE_APP_BACKEND_URL + 'assets/rout-youth.jpg'
    }
  }
}
</script>