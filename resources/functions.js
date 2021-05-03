function getParameters() {
  // returns page polity, source, year and electorate
  let 

}



// fetch page parameters
parameters = new URL(window.location.href).searchParams;
polity = parameters.get("polity");
source = polity == "tas" ? "Tasmanian" : "act" ? "ACT" : "Australian";
year = parameters.get("year");
electorate = parameters.get("electorate");
