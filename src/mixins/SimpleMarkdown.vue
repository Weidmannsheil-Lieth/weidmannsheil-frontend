<script>
export default {
  methods: {
    simpleMarkdown(text) {
      let t = 'fwaf wa [test](itest) frwagagwag [test](itest) afwafwa 3t q3 [teaagawgast](itdfawest)';

      let pattern = /\[.*]\(.*\)/;
      let regex = new RegExp(pattern);
      let matches = t.match(regex);

      console.log(matches);
      return text;
    }
  }
}
</script>