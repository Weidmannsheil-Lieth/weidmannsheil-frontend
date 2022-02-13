<template>
  <div class="content club-house" id="heim">
    <div class="item">
      <ItemTitle class="effects fade-in">Vereinsheim</ItemTitle>
      <ItemDivider />
      <ItemTitle size="2" class="pt-12 effects fade-in">
        Schießstände
      </ItemTitle>
      <ItemRow class="mt-10 mt-sm-5" reverse>
        <ItemCol size="7" class="effects fade-from-right">
          <ItemColText :centered="false">
            <ItemTitle size="3" class="py-4 pt-sm-1">
              Luftgewehr- / Luftpistole
            </ItemTitle>
            <ItemText>
              Unser Verein verfügt über einen Schießstand mit 8 Plätzen für das Schießen mit Luftgewehr bzw.
              Luftpistole.
            </ItemText>
          </ItemColText>
        </ItemCol>
        <ItemCol size="5" class="effects size-fade-in">
          <div class="item-col-image">
            <img src="/assets/verein/lg-stand.jpg" alt=""/>
          </div>
        </ItemCol>
      </ItemRow>
      <ItemRow class="mt-10 mt-sm-6" reverse>
        <ItemCol size="7" class="effects fade-from-right">
          <ItemColText :centered="false">
            <ItemTitle size="3" class="py-4">
              Kleinkaliber
            </ItemTitle>
            <ItemText>
              Unser Kleinkaliberstand befindet sich eine Etage tiefer. Hier kann an 6 Plätzen mit
              Kleinkaliberlangwaffen auf 50 Meter geschossen werden.
            </ItemText>
          </ItemColText>
        </ItemCol>
        <ItemCol size="5" class="effects size-fade-in">
          <div class="item-col-image">
            <img src="/assets/verein/kk-stand.jpg" alt=""/>
          </div>
        </ItemCol>
      </ItemRow>

      <ItemTitle size="2" class="pt-20 effects fade-in">
        Räumlichkeiten und Gastronomie
      </ItemTitle>
      <ItemRow class="mt-14 mt-sm-6">
        <ItemCol class="effects fade-from-left">
          <ItemColText>
            <ItemText>
              Unsere Wirtseheleute Sabine und Frank Nickel haben Anfang 2012 unser Vereinslokal übernommen.
              <br/><br/>
              Der Innenraum unseres Vereinslokals bietet etwa ca. 40-50 Personen Platz. Hier findet Freitags ein
              gemütliches Beisammensein in netter Atmosphäre statt. Während die Erwachsenen an der langen Tafel bei Wein
              oder Bier zusammensitzen, findet sich auch immer wieder einmal eine kleine Runde an der Bar zum Knobeln,
              während sich unsere jüngeren Mitglieder meist am Jugendtisch treffen.
            </ItemText>
          </ItemColText>
        </ItemCol>
        <ItemCol class="effects size-fade-in align-center">
          <div class="item-col-image">
            <img src="/assets/verein/heim1.jpg" alt=""/>
          </div>
        </ItemCol>
      </ItemRow>
      <ItemRow class="mt-14 mt-sm-8" reverse>
        <ItemCol class="effects fade-from-right">
          <ItemColText>
            <ItemText>
              Die überdachte Terrasse, die wir extra für unser Schützenfest angebaut haben, bietet bei entsprechender
              Witterung 50-60 weiteren Personen Platz oder kann von Rauchern oder zum Aufstellen eines Grills genutzt
              werden. Auf dem Freigelände bauen wir zum Schützenfest weitere Sitzgelegenheiten, eine kleine Tribüne und
              den bei durstigen Kehlen beliebten Schankwagen auf.
              <br/><br/>
              Außerhalb der Trainingszeiten und nach Rücksprache mit unserem Wirtsehepaar ist es möglich, das gesamte
              Vereinslokal für private Feierlichkeiten zu nutzen. Die Saalmiete hierfür beträgt 75 €. Die Abnahme der
              Getränke bei unserem Wirtsehepaar ist hierbei Voraussetzung.
            </ItemText>
          </ItemColText>
        </ItemCol>
        <ItemCol class="effects size-fade-in align-center">
          <div class="item-col-image">
            <img src="/assets/verein/heim2.jpg" alt=""/>
          </div>
        </ItemCol>
      </ItemRow>
    </div>
  </div>
</template>