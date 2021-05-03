function getParameters() {
  console.log("getParameters() called");

  // returns page polity, source, year and electorate
  let parameters = new URL(window.location.href).searchParams;
  let polity = parameters.get("polity");
  let polityString = polity == "tas" ? // polity as an adjectival string
    "Tasmanian" : "act" ?
    "ACT" : "Australian";
  let year = parameters.get("year");
  let electorate = parameters.get("electorate");
  let electorateString = electorate.slice(0, 1).toUpperCase() + electorate.slice(1);

  console.log("returning " + polity, polityString, year, electorate, electorateString);
  return [polity, polityString, year, electorate, electorateString];
}

function setUpChart() {
  console.log("setUpChart() called");

  // fill in title
  title.html("<h1>" + electorateString + "</h1>"
           + "<p>" + year + " " + polityString + " election</p>");

  // fill in footer
  footer.html("Data: " + polityString + " Electoral Commission<span></span>Chart: Markus Mannheim");

  // create navigation icons


}
