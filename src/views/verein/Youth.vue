<template>
  <div class="content youth" id="jugend">
    <div class="item">
      <ItemTitle class="effects fade-in">Jugend</ItemTitle>
      <ItemDivider />
      <div class="item-image pt-14 effects size-fade-in pt-sm-8">
        <img :src="routImageSource" alt=""/>
      </div>
      <ItemRow class="mt-14 mt-sm-6">
        <ItemCol class="effects fade-from-left">
          <ItemColText>
            <ItemText>
              Wir sind eine eigene Abteilung des Schützenvereins und auch dessen Zukunft. Die Jugendgruppe hat ihren
              eigenen Jugendvorstand und eine eigene Jugendkasse.
              <br/><br/>
              Der Schießsport ist gar nicht so langweilig, wie ihr vielleicht denken mögt. Dieser Sport hat sehr
              viel mit Konzentration, Aufmerksamkeit und Verantwortung zu tun. Mit fortlaufender Zeit erreicht man beim
              Schießen ein hohes Maß an Körperbeherrschung und übt sich in Disziplin. Nicht zuletzt wird man durch den
              präzise messbaren Erfolg zur weiteren Steigerung der persönlichen Leistung angespornt.
            </ItemText>
          </ItemColText>
        </ItemCol>
        <ItemCol class="effects size-fade-in align-center">
          <div class="item-col-image mt-sm-5">
            <img src="/assets/verein/jugend1.jpg" alt=""/>
          </div>
        </ItemCol>
      </ItemRow>
      <ItemRow class="mt-14" reverse>
        <ItemCol class="effects fade-from-right">
          <ItemColText>
            <ItemText>
              Um den Schießsport auszuüben, benötigt man eine entsprechende „Ausrüstung“. Diese müsst ihr aber nicht
              teuer im Sportfachhandel kaufen, denn ihr bekommt sie vom Verein während des Trainings gestellt.
              <br/><br/>
              Uns geht es in der Jugendgruppe um die Gemeinschaft, um das Miteinander und, dass jeder so genommen wird,
              wie er ist, mit all seinen Stärken und Schwächen.
            </ItemText>
          </ItemColText>
        </ItemCol>
        <ItemCol class="effects size-fade-in align-center">
          <div class="item-col-image mt-sm-5">
            <img src="/assets/verein/jugend2.jpg" alt=""/>
          </div>
        </ItemCol>
      </ItemRow>
      <ItemText class="mt-12 effects fade-in">
        Wir als Jugendgruppe treffen uns nicht nur während des Trainings, sondern veranstalten auch außerhalb dieser
        Zeit gemeinsame Unternehmungen. Die Jugendgruppe unternimmt u.a. Ausflüge zu den Karl-May-Festspielen nach Bad
        Segeberg, feiert Weihnachtsfeiern u.a. Bowling und nimmt mit am vereinsinternen Spieleabend teil. Auch beim
        alljährlichen Schützenfest hilft die Jugendgruppe tatkräftig mit und unterstützt die Erwachsenen.
      </ItemText>
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